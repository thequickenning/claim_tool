<template>
  <v-flex xs12>
    <v-card v-if="utxos.length === 0">
      <v-card-title primary-title>
        Enter your Bitcoin address and select which UTXO you want to redeem.
        Each UTXO can only be redeemed once.
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            label="Bitcoin Address"
            v-model="address"
            :rules="addressRules"
            :counter="34"
            required />
          <v-btn
            @click="scan"
            :disabled="!valid">
            Scan for UTXOs
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-card v-if="utxos.length > 0 && !selected">
      <v-btn
        @click="reEnterAddress"
        :disabled="!valid">
        Re-enter Address
      </v-btn>
      <v-card-title primary-title>
        Found {{ utxos.length }}
        UTXO{{ utxos.length > 1 ? 's' : '' }}!
      </v-card-title>
      <v-layout
        row
        wrap>
        <UTXO
          v-for="(utxo, index) in utxos"
          :key="index"
          :utxo="utxo"
          @setUTXO="setUTXO($event)"
        />
      </v-layout>
    </v-card>
    <v-card v-if="selected">
      <v-btn
        @click="unsetUTXO"
        :disabled="!valid">
        Select a different UTXO
      </v-btn>
      <RedeemUTXO
        :address="address"
        :selected="selected"
      />
    </v-card>
  </v-flex>
</template>

<script>
import RedeemUTXO from './RedeemUTXO';
import UTXO from './UTXO';

const utxoSet = require('../utxo-merkle-proof/data/utxos.json');

export default {
  components: {
    RedeemUTXO,
    UTXO,
  },
  data: () => ({
    address: 'WNgGNFk77MxLBgpfG7qTq2wMxYXd9rwBuY',
    addressRules: [
      a => !!a || 'Address is required!',
    ],
    selected: null,
    utxos: [],
    valid: false,
  }),
  methods: {
    reEnterAddress() {
      this.utxos = [];
    },
    scan() {
      const addr = this.address;
      const matched = utxoSet.filter(utxo => utxo.address === addr);
      this.utxos = matched;
    },
    setUTXO($event) {
      this.selected = $event.utxo;
    },
    unsetUTXO() {
      this.selected = null;
    },
  },
};
</script>
