<template>
  <v-app id="app">
     <v-layout>
      <v-flex
        xs12
        sm6
        offset-sm3>
        <v-card id="card">
          <Header />
          <router-view></router-view>
        </v-card>
      </v-flex>
     </v-layout>
  </v-app>
</template>
<script>
import Header from './components/Header';

export default {
  components: {
    Header,
  },
  name: 'App',
  metaInfo: {
    title: 'Bitcoin Hex ERC20 Token Redemption',
  },
};
</script>
