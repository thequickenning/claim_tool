<template>
  <v-form>
    <span>
      Provide the Bitcoin Public Key associated with this address.
    </span>
    <v-text-field
      label="Bitcoin Public Key"
      @change="updatePublicKey"
      :rules="publicKeyRules"
      :counter="52"
      required
    />

    <span>
      Provide the a Message Signed with Bitcoin Private Key associated with this address.
    </span>
    <v-text-field
      label="Signed message with Bitcoin Private Key"
      @change="updateSignedMessage"
      :rules="signedMessageRules"
      textarea
      required
    />
  </v-form>
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
  methods: {
    updatePublicKey() {
      this.$emit('updatePublicKey', address);
    },
    updateSignedMessage() {
      this.$emit('updateSignedMessage', address);
    },
  },
};
</script>
