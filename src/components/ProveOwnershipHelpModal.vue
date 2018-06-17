<template>
  <v-container fluid>
    <v-flex xs8>
      <v-card-title primary-title>
        Choose your wallet to get instructions on how to sign a message with it.
      </v-card-title>
        <v-select
          :items="items"
          v-model="e1"
          label="Select Wallet You Use"
          single-line
        />
        <button v-if="e1" class="btn" @click="open()">Open instructions</button>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    e1: null,
    links: [{
      key: 'mycelium-android',
      url: 'https://medium.com/@bytether/how-to-sign-a-message-with-a-mycelium-android-wallet-e82fce04860'
    }],
    items: [
      'mycelium-android'
    ],
  }),
  methods: {
    open(){
      const matched = this.links.find(link => link.key === this.e1);
      window.open(matched.url, '_blank');
    }
  }
};
</script>