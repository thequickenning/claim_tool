<template>
  <form-wizard
    title=""
    subtitle=""
    ref="wizard"
    @on-complete="onComplete">
      <tab-content
        title="Enter Bitcoin Address"
        route='/enter-bitcoin-address'
        icon="ti-user"
        :before-change="addressFormSubmit" />

      <tab-content
        title="Prove Ownership"
        icon="ti-settings"
        route='/prove-ownership'
        :before-change="validateSignedMessage" />

      <tab-content
        title="Enter Ethereum Address"
        icon="ti-settings"
        route='/enter-ethereum-address'
        :before-change="prepareEthTransaction" />

      <tab-content
        title="Send Transaction"
        icon="ti-settings"
        route='/send-transaction'
        :before-change="sendEthTransaction" />

      <tab-content
        title="Last step"
        path='/last-step'
        icon="ti-check" />

      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </form-wizard>
</template>
<script>
import { mapActions } from 'vuex';

const utxoSet = require('../artifacts/utxo.json'); // TODO This will be pulled in VIA node_modules or build process

export default {
  methods: {
    ...mapActions([
      'setUtxo',
      'setUtxoNotFound',
    ]),
    addressFormSubmit() {
      const matched = utxoSet.find(utxo => utxo.address === this.$store.state.address);
      if (matched) {
        this.setUtxo(matched);
        return true;
      }
      this.setUtxoNotFound();
      return false;
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
