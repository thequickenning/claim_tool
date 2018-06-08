<template>
  <v-app id="app">
    <v-layout>
      <v-flex
        xs12
        sm6
        offset-sm3>
        <v-card id="card">
          <v-card-media
            src="https://github.com/BitcoinHEX/logo/blob/master/Logo@1024.png?raw=true"
            height="200px"
            :contain="true"
          />
          <v-card-title primary-title>
            Bitcoin Hex ERC20 Token Redemption
          </v-card-title>
          <v-card-text>
            <div v-if="!disclaimer">
              <form-wizard
                @on-complete="onComplete">

                <tab-content
                  title="Enter Bitcoin Address"
                  icon="ti-user"
                  :before-change="addressFormSubmit">

                  <AddressForm
                    :address="address"
                    @updateAddress="updateAddress"
                  />

                </tab-content>

                <tab-content
                  title="Choose Unspent transactions"
                  icon="ti-settings"
                  :before-change="selectUTXO"
                >
                  <SearchResults
                    :selected-utxo="selectedUTXO"
                    :utxos="utxos"
                    @setUTXO="setUTXO"
                  />
                </tab-content>

                <tab-content
                  title="Prove Ownership"
                  icon="ti-settings">
                  <ProveOwnership
                    @updatePublicKey="updatePublicKey"
                    @updateSignedMessage="updateSignedMessage"
                  />
                </tab-content>

                <tab-content
                  title="Enter Ethereum Address"
                  icon="ti-settings">
                  <EnterEthereumAddress
                    v-if="selectedUTXO !== null"
                    :selectedUTXO="selectedUTXO"
                    :address="address"
                  />
                </tab-content>

                <tab-content
                  title="Send Transaction"
                  icon="ti-settings">
                  <SendTransaction
                    v-if="selectedUTXO !== null"
                    :gas-amount="gasAmount"
                    :token-address="tokenAddress"
                    :txHash="txHash"
                  />
                </tab-content>

                <tab-content
                  title="Last step"
                  icon="ti-check">
                  Yuhuuu! This seems pretty damn simple
                </tab-content>

              </form-wizard>
            </div>
            <Disclaimer
              v-if="disclaimer"
              @agree="showWizard()" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <router-view/>
  </v-app>
</template>
<script>
import Disclaimer from './components/Disclaimer';
import AddressForm from './components/AddressForm';
import SearchResults from './components/SearchResults';
import ProveOwnership from './components/ProveOwnership';
import EnterEthereumAddress from './components/EnterEthereumAddress';
import SendTransaction from './components/SendTransaction';


const utxoSet = require('./utxo-merkle-proof/data/utxos.json');

export default {
  components: {
    AddressForm,
    Disclaimer,
    EnterEthereumAddress,
    SearchResults,
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
    selectedUTXO: null,
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
      alert("Restart");
    },
    setUTXO(utxo) {
      alert(utxo.outputIndex + " Selected -- need having difficulty displaying this in the ui");
      this.selectedUTXO = utxo;
    },
    selectUTXO() {
      if (this.selectedUTXO) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
