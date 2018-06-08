<template>
  <div>
    <v-card>
      <v-card-title primary-title>
        Redeeming UTXO for address {{ address }}
      </v-card-title>
      <v-card-text color=green v-if="signedMessageVerified">
          Verified
      </v-card-text>
      <v-card-text>
        {{ selected.satoshis / Math.pow(10, 8) }} BTC
        TX <small>{{ selected.txid }}</small><br >
        Output #{{ selected.outputIndex }}
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-text>
        <v-form
          v-if="!signedMessageVerified"
          v-model="redeemValid">
          <span>Provide the Bitcoin Public Key associated with this address.</span>
          <v-text-field
            label="Bitcoin Public Key"
            v-model="publicKey"
            :rules="publicKeyRules"
            :counter="52"
            required
          />

          <span>
            Provide the a Message Signed with Bitcoin Private Key associated with this
            address.
          </span>
          <v-text-field
            label="Signed message with Bitcoin Private Key"
            v-model="signedMessage"
            :rules="signedMessageRules"
            :counter="52"
            required
          />
          <v-btn
            @click="verifySignedMessage"
            :disabled="!redeemValid">Verify Signed Message
          </v-btn>
        </v-form>

        <v-form v-if="signedMessageVerified">
          <span>Specify the Ethereum address you wish to remit BitcoinHex tokens to.</span>
          <v-text-field
            label="Ethereum Address"
            v-model="ethAddress"
            :rules="ethAddressRules"
            :counter="42"
            required />
          <v-btn
            @click="redeem"
            :disabled="!redeemValid">Generate Redeem Transaction
          </v-btn>
        </v-form>

        <v-form v-if="encoded">
          Send an Ethereum transaction with the specified data, destination address, and
          gas amount to redeem your BitcoinHex UTXO. You may enter the below information
          into your Ethereum wallet of choice or send the transaction to Metamask directly
          if you have Metamask installed and configured with the account which will
          receive the tokens.
          <v-btn
            @click="send"
            :disabled="txHash !== null">Send with Metamask
          </v-btn>
          <a
            v-if="txHash"
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
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    encoded: null,
    ethAddress: '',
    ethAddressRules: [
      e => !!e || 'Ethereum address is required!',
    ],
    gasAmount: 300000,
    publicKey: '',
    publicKeyRules: [
      p => !!p || 'Public is required!',
    ],
    signedMessage: '',
    signedMessageRules: [
      p => !!p || 'Signed message is required!',
    ],
    redeemValid: false,
    tokenAddress: '',
    signedMessageVerified: false,
    txHash: null,
  }),
  methods: {
    verifySignedMessage() {
      alert('need to build function - verifySignedMessage');
      this.signedMessageVerified = true;
    },
    redeem() {
      alert('need to implment redeem method');
    },
    send() {
      alert('need to implment send method');
    },
  },
  props: {
    address: {
      type: String,
      required: true,
    },
    selected: {
      type: Object,
      required: true,
    },
  },
};
</script>
