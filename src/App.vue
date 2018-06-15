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
                ref="wizard"
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
                  title="Select UTXO"
                  icon="ti-settings"
                  :before-change="selectUTXO"
                >
                  <SearchResults
                    :selected="selected"
                    :utxos="utxos"
                    @setUTXO="setUTXO"
                  />
                </tab-content>

                <tab-content
                  title="Prove Ownership"
                  icon="ti-settings"
                  :before-change="validateSignedMessage"
                >
                  <ProveOwnership
                    @updatePublicKey="updatePublicKey"
                    @updateSignedMessage="updateSignedMessage"
                  />
                </tab-content>

                <tab-content
                  title="Enter Ethereum Address"
                  icon="ti-settings"
                  :before-change="prepareEthTransaction"
                >
                  <EnterEthereumAddress
                    v-if="selected !== null"
                    :selected="selected"
                    :address="address"
                  />
                </tab-content>

                <tab-content
                  title="Send Transaction"
                  icon="ti-settings"
                  :before-change="sendEthTransaction"
                >
                  <SendTransaction
                    :gas-amount="gasAmount"
                    :token-address="tokenAddress"
                    :tx-hash="txHash"
                  />
                </tab-content>

                <tab-content
                  title="Last step"
                  icon="ti-check">
                  TODO
                  Show Congrats Text
                  Show Eth Link to eth Transaction
                  Explain to do Another one click "Finish" (change finish button to Start Over)
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


const utxoSet = require('./artifacts/utxo.json'); // TODO This will be pulled in VIA node_modules or build process

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
