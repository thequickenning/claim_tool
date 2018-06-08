<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        Redeeming UTXO for address {{ address }}
      </v-card-title>
      <v-card-text>
        {{ selected.satoshis / Math.pow(10, 8) }} BTC
        TX <small>{{ selected.txid }}</small><br >
        Output #{{ selected.outputIndex }}
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <v-form>
          <span>Specify the Ethereum address you wish to remit BitcoinHex tokens to.</span>
          <v-text-field
            label="Ethereum Address"
            @change="updateEthAddress"
            :rules="ethAddressRules"
            :counter="42"
            required />
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    ethAddressRules: [
      e => !!e || 'Ethereum address is required!',
    ],
  }),
  methods: {
    updateEthAddress(ethAddress) {
      this.$emit('updateEthAddress', ethAddress);
    },
  },
  props: {
    address: {
      type: String,
      required: true,
    },
    selected: {
      type: Object,
      required: false,
    },
  },
};
</script>
