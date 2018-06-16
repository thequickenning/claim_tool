<template>
  <form-wizard
    ref="wizard"
    @on-complete="onComplete">
      <tab-content
        title="Enter Bitcoin Address"
        icon="ti-user"
        :before-change="addressFormSubmit" />
      <tab-content
        title="Prove Ownership"
        icon="ti-settings"
        :before-change="validateSignedMessage" />
      <tab-content
        title="Enter Ethereum Address"
        icon="ti-settings"
        :before-change="prepareEthTransaction" />
      <tab-content
        title="Send Transaction"
        icon="ti-settings"
        :before-change="sendEthTransaction" />
      <tab-content
        title="Last step"
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
      'setUTXO',
    ]),
    addressFormSubmit() {
      const matched = utxoSet.filter(utxo => utxo.address === this.address);
      this.setUTXO(matched);
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
