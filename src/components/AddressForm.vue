<template>
  <v-flex xs12>
    <v-card>
      <v-card-title primary-title>
        Enter your Bitcoin address and select which UTXO you want to redeem.
        Each UTXO can only be redeemed once.
      </v-card-title>
      <v-card-text>
        <h1 v-if="$store.state.utxoNotFound"> UTXO Not Found Please Try Again </h1>
        <v-form>
          <v-text-field
            label="Bitcoin Address"
            @change="addressChange"
            :value="$store.state.address"
            :rules="addressRules"
            required />
        </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    addressRules: [
      a => !!a || 'Address is required!',
    ],
  }),
  methods: {
    ...mapActions([
      'updateAddress',
    ]),
    addressChange(evt) {
      this.updateAddress(evt);
    },
  },
};
</script>
