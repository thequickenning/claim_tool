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
            <AddressForm v-if="!disclaimer" />
            <Disclaimer
              v-if="disclaimer"
              @agree="showAddressForm()" />
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

export default {
  components: {
    AddressForm,
    Disclaimer,
  },
  name: 'App',
  metaInfo: {
    title: 'Bitcoin Hex ERC20 Token Redemption',
  },
  data: () => ({
    disclaimer: true,
  }),
  methods: {
    showAddressForm() {
      this.disclaimer = false;
    },
  },
};
</script>
