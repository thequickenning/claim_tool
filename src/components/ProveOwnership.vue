<template>
  <v-flex xs12>
    <v-card>
      <v-card-title primary-title>
        UTXO Selected with {{ $store.state.utxo.satoshis }} satoshis
      </v-card-title>
      <v-card-text>
        <v-form>
          <span>
            Provide the Bitcoin Public Key associated with this address.
          </span>
          <v-text-field
            label="Bitcoin Public Key"
            :rules="publicKeyRules"
            required
          />
          <span>
            Provide the a Message Signed with Bitcoin Private Key associated with this address.
          </span>
          <v-text-field
            label="Signed message with Bitcoin Private Key"
            :rules="signedMessageRules"
            textarea
            required
          />
        </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    publicKeyRules: [
      p => !!p || 'Public Key is required!',
    ],
    signedMessageRules: [
      p => !!p || 'Signed message is required!',
    ],
  }),
};
</script>
