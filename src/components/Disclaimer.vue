<template>
  <v-flex xs12>
    <p>
      This web application will walk you through claiming your Bitcoin (BTC) UTXO
      (Unspent Transaction Output) on the original Bitcoin blockchain (BTC)
      for ERC20 BitcoinHex tokens on the Ethereum blockchain.
      These BitcoinHex Tokens……[Insert Short Description of staking Rules here].
      Learn more at bitcoinhex.com.
      <a
        href="https://bitcoinhex.com"
        target="_blank">bitcoinhex.com</a>.
      <br ><br >
      You will need to provide proof of ownership of your Bitcoin wallet by cryptographically
      signing a message with your private key along.
      <a
        href="https://coinsutra.com/sign-message-ledger-wallet/"
        target="_blank">Ledger Nano Instructions</a> or <a
          href="https://medium.com/@TenX/mycelium-how-to-sign-a-message-with-a-bitcoin-address-87afdd0a5a0e"
          target="_blank">Mycelium</a>.
      <strong>You will never give anyone your private keys!</strong>
      <br ><br >
      You will also need to provide the address to the Ethereum account where you would like your
      BitcoinHex tokens to be sent. If you do not have an Ethereum account, you can create one using
      <a
        href="https://www.myetherwallet.com/"
        target="_blank">MyEtherWallet</a> or <a
          href="https://metamask.io/"
          target="_blank">Metamask</a>.
      <br ><br >
      In order to interact with the BitconHex smart contract you will need to pay the necessary
      Gas Fees to complete the transactions. This is the current estimated Gas price
      [Insert Gas Price Here, provided by https://ethgasstation.info/]
      <br ><br >
      The ERC20 port mechanism utilized to convert Bitcoin UTXO into Bitcoin Hex tokens is
      trustless, meaning that the BitcoinHex team never controls the funds and that anyone
      can verify that the process was conducted correctly. Read over
      <a
        target="_blank"
        href="https://github.com/BitcoinHEX/utxo-merkle-proof">the Github repository
      </a> to learn more. You may also run this application offline if you like;
      find the code <a
        target="_blank"
        href="https://github.com/BitcoinHEX/claim_tool">here</a>.
      <br ><br >
      UTXOs (unspent transaction outputs) must be redeemed one-at-a-time.
      If you have a large number (due to many small transactions)
      using this web application may take awhile.
      <br ><br >
      Go through the process carefully. If you are stuck or confused, head on over to the
      <a
        href="https://discord.gg/gvyFnKu"
        target="_blank">Strape chat (via Discord)</a>
      or message the Bitcoin Hex team [Other location]for help.
      <strong>
        No one at the BitcoinHex team will ever ask you for your private keys. 
        Do not give them to anyone who asks.
      </strong>
    </p>
    <v-card-actions>
      <v-btn
        class="btn"
        @click="agree()">
        I understand, continue.
      </v-btn>
    </v-card-actions>
  </v-flex>
</template>

<script>
export default {
  methods: {
    agree() {
      this.$emit('agree');
    },
  },
};
</script>
<style scoped>
.btn {
    margin: 0 auto;
}
</style>

