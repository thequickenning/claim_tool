<template>
  <v-flex xs12>
    <v-card>
      <v-card-title primary-title>
        Enter your Bitcoin Address.
      </v-card-title>
      <v-card-text>
        <h1 v-if="$store.state.utxoNotFound"> UTXO Not Found Please Try Again </h1>
        <v-form>
          <v-text-field 
            label="Bitcoin Address"
            v-model="address"
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
    items: [
      'Multibit',
      'Mycelium'
    ],
  }),
  computed:{
    address:{
        get(){ return this.$store.getters.address; },
        set(address){ this.setAddress(address); }
    },
    wallet:{
        get(){ return this.$store.getters.wallet; },
        set(wallet){ this.setWallet(wallet); }
    }
  },
  methods: {
    ...mapActions([
      'setAddress',
      'setWallet'
    ]),
  },
};
</script>