<template>
  <v-flex xs12>
    <v-card>
      <v-card-title primary-title>
        {{ utxo.satoshis / Math.pow(10, 8) }} BTC
      </v-card-title>
      <v-card-text>
        TX <small>{{ utxo.txid }}</small>
        <br >
        Output #{{ utxo.outputIndex }}
      </v-card-text>
      <v-card-actions class="utxo-actions">
        <v-btn @click="selectUTXO(utxo)">Redeem UTXO</v-btn>
      </v-card-actions>
    </v-card>
    <hr>
  </v-flex>
</template>
<script>
export default {
  methods: {
    selectUTXO(utxo) {
      this.$emit('setUTXO', { utxo });
    },
  },
  props: {
    utxo: {
      type: Object,
      required: true,
    },
  },
};
</script>
