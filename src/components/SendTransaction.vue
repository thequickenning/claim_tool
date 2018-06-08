<template>
  <v-form>
    Send an Ethereum transaction with the specified data, destination address, and
    gas amount to redeem your BitcoinHex UTXO. You may enter the below information
    into your Ethereum wallet of choice or send the transaction to Metamask directly
    if you have Metamask installed and configured with the account which will
    receive the tokens.
    <a
      target="_blank"
      :href="'https://etherscan.io/tx/' + txHash">View Transaction
    </a>

    <v-text-field
      label="Encoded Transaction Data (double-click to select)"
      :value="encoded"
      textarea
    />
    <v-text-field
      label="To Address (Bitcoin Hex Token)"
      :value="tokenAddress"
      disabled
    />
    <v-text-field
      label="Gas Amount"
      :value="gasAmount"
      disabled
    />
  </v-form>
</template>
<script>
export default {
  props: {
    encoded: {
      type: String,
      required: false,
    },
    tokenAddress: {
      type: String,
      required: true,
    },
    gasAmount: {
      type: Number,
      required: true,
    },
    txHash: {
      type: String,
      required: true,
    },
  },
};
</script>
