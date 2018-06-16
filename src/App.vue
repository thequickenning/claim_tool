<template>
  <v-app id="app">
     <v-layout>
      <v-flex
        xs12
        sm6
        offset-sm3>
        <v-card id="card">
          <Header />
          <Wizard />
        </v-card>
      </v-flex>
     </v-layout>
  </v-app>
</template>
<script>
import Header from './components/Header';
import Wizard from './components/Wizard';
import Disclaimer from './components/Disclaimer';
import AddressForm from './components/AddressForm';
import ProveOwnership from './components/ProveOwnership';
import EnterEthereumAddress from './components/EnterEthereumAddress';
import SendTransaction from './components/SendTransaction';

export default {
  components: {
    AddressForm,
    Disclaimer,
    EnterEthereumAddress,
    Header,
    ProveOwnership,
    SendTransaction,
    Wizard,
  },
  name: 'App',
  metaInfo: {
    title: 'Bitcoin Hex ERC20 Token Redemption',
  },
  data: () => ({
    address: 'WNgGNFk77MxLBgpfG7qTq2wMxYXd9rwBuY',
    ethAddress: '',
    publicKey: '',
    gasAmount: 0,
    signedMessage: '',
    disclaimer: true,
    selected: null,
    tokenAddress: '',
    txHash: '',
    utxos: [],
  }),
};
</script>
