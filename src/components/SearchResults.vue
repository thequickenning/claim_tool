<template>
  <v-card>
    <v-card-title primary-title>
      Found {{ utxos.length }}
      UTXO{{ utxos.length > 1 ? 's' : '' }}!
    </v-card-title>
    <v-layout
      row
      wrap>
      <v-flex xs12
        v-for="(utxo, index) in utxos"
        :key="index"
        @click="setUTXO(utxo)">
        <v-card>
            <v-card-text>
                {{ utxo.satoshis / Math.pow(10, 8) }} BTC
                TX <small>{{ utxo.txid }}</small>
                <br >
                Output #{{ utxo.outputIndex }}
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  methods: {
    setUTXO(utxo) {
      this.$emit('setUTXO', utxo);
    },
  },
  props: {
    selectedUTXO: {
      type: Object,
      required: false,
    },
    utxos: {
      type: Array,
      required: true,
    },
  },
};
</script>
