<template>
  <v-app id="app">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </v-app>
</template>
<script>
import Disclaimer from './components/Disclaimer';
import AddressForm from './components/AddressForm';
import ProveOwnership from './components/ProveOwnership';
import EnterEthereumAddress from './components/EnterEthereumAddress';
import SendTransaction from './components/SendTransaction';


const utxoSet = require('./artifacts/utxo.json'); // TODO This will be pulled in VIA node_modules or build process

export default {
  components: {
    AddressForm,
    Disclaimer,
    EnterEthereumAddress,
    ProveOwnership,
    SendTransaction,
  },
  name: 'App',
  metaInfo: {
    title: 'Bitcoin Hex ERC20 Token Redemption',
  },
  data: () => ({
    address: 'WNgGNFk77MxLBgpfG7qTq2wMxYXd9rwBuY',
    ethAddress: '',
    publicKey: '',
    gasAmount: 0,
    signedMessage: '',
    disclaimer: true,
    selected: null,
    tokenAddress: '',
    txHash: '',
    utxos: [],
  }),
  methods: {
    addressFormSubmit() {
      const matched = utxoSet.filter(utxo => utxo.address === this.address);
      this.utxos = matched;
      return true;
    },
    updateAddress(address) {
      this.address = address;
    },
    updateEthAddress(ethAddress) {
      this.ethAddress = ethAddress;
    },
    updatePublicKey(publicKey) {
      this.publicKey = publicKey;
    },
    updateSignedMessage(signedMessage) {
      this.signedMessage = signedMessage;
    },
    showWizard() {
      this.disclaimer = false;
    },
    onComplete() {
      // alert('TODO - Reset World, bring user back to start');
    },
    prepareEthTransaction() {
      // alert('TODO implement prepareEthTransaction()');
      return true;
    },
    sendEthTransaction() {
      // alert('TODO implement sendEthTransaction()');
      return true;
    },
    setUTXO() {
      // alert(`${utxo.outputIndex} - Selected - TODO get UI to display selected by highlighting`);
    },
    selectUTXO() {
      if (this.selected) {
        return true;
      }
      return false;
    },
    validateSignedMessage() {
      // alert('TODO implement validateSignedMessage()');
      return true;
    },
  },
};
</script>
