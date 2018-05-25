<template>
  <div id="app">

  </div>
</template>

<script>
const MerkleTree = require('./scripts/merkleTree');
const bs58check = require('bs58check');
const Web3 = require('web3');
const bitcoin = require('bitcoinjs-lib');
const { Buffer } = require('buffer');
const { ecsign } = require('ethereumjs-util');

const utxoMerkleTree = MerkleTree.fromJSON(require('./artifacts/merkleTree.json'));

const utxoMerkleRoot = utxoMerkleTree.getHexRoot();
const utxoSet = require('./artifacts/utxo.json');

const web3inst = new Web3();

const network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};
const hashUTXO = (utxo) => {
  const rawAddr = bs58check.decode(utxo.address).slice(1, 21).toString('hex');
  return Web3.utils.soliditySha3(
    { type: 'bytes32', value: `0x${utxo.txid}` },
    { type: 'bytes20', value: `0x${rawAddr}` },
    { type: 'uint8', value: utxo.outputIndex },
    { type: 'uint', value: utxo.satoshis },
  );
};

const abi = require('bitcoinhex/build/contracts/BitcoinHex.json').abi;

const redeemUTXO = abi.filter(m => m.name === 'redeemUTXO')[0];
const config = require('bitcoinhex/config.json');

export default {
  name: 'app',
  data: () => ({
    disclaimer: false,
    valid: false,
    redeemValid: false,
    privkey: '',
    privkeyRules: [
      p => !!p || 'Privkey is required!',
    ],
    ethAddr: '',
    ethAddrRules: [
      e => !!e || 'Ethereum address is required!',
    ],
    address: '',
    addressRules: [
      a => !!a || 'Address is required!',
    ],
    utxos: [],
    encoded: null,
    tokenAddress: config.deployed.main.WyvernToken,
    gasAmount: 300000,
    selected: null,
    txHash: null,
  }),
  methods: {
    redeem() {
      const utxo = this.selected;
      const hash = hashUTXO(utxo);
      const proof = utxoMerkleTree.getHexProof(Buffer.from(hash.slice(2), 'hex'));
      const keyPair = bitcoin.ECPair.fromWIF(this.privkey, network);
      const ethAddr = this.ethAddr.slice(2);
      const hashBuf = bitcoin.crypto.sha256(Buffer.from(ethAddr, 'hex'));
      let { r, s, v } = ecsign(hashBuf, keyPair.d.toBuffer());
      r = `0x${r.toString('hex')}`;
      s = `0x${s.toString('hex')}`;
      const pubKey = `0x${keyPair.Q.affineX.toBuffer(32).toString('hex')}${keyPair.Q.affineY.toBuffer(32).toString('hex')}`;
      const encoded = web3inst.eth.abi.encodeFunctionCall(redeemUTXO,
        [`0x${utxo.txid}`, utxo.outputIndex, utxo.satoshis, proof, pubKey, true, v, r, s],
      );
      this.encoded = encoded;
    },
    send() {
      if (!window.web3) {
        // No MetaMask, Alert
      } else {
        const w3 = window.web3;
        w3.eth.sendTransaction({
          from: this.ethAddr,
          to: this.tokenAddress,
          gas: this.gasAmount,
          data: this.encoded,
        }, (err, txHash) => {
          if (err) {
            // Transaction Error, Alert
          } else {
            this.txHash = txHash;
          }
        });
      }
    },
    scan() {
      const addr = this.address;
      const matched = utxoSet.filter(utxo => utxo.address === addr);
      this.utxos = matched;
    },
  },
};
</script>

<style scoped>
</style>
