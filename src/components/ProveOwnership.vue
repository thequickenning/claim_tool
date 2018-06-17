<template>
  <v-flex xs12>
    <v-card>
      <v-card-title primary-title>
        Address Selected {{ $store.state.address }} with {{ $store.state.utxo.satoshis }} satoshis.
      </v-card-title>
      <v-card-text>
          <span>
            Sign the text 'bitcoinHex' using your wallet or private key to prove ownership. 
            <br /><br />
            <span @click="$modal.show('ProveOwnershipHelpModal')">(Click for Help)</span>
            <modal name="ProveOwnershipHelpModal">
              <ProveOwnershipHelpModal />
              <button class="btn" @click="$modal.hide('ProveOwnershipHelpModal')">Close</button>
            </modal>
          </span>
          <v-form>
            <v-text-field
              label="Signed message with Bitcoin Private Key"
              :rules="signedMessageRules"
              v-model="signature"
              textarea
              required
            />
        </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
import { mapActions } from 'vuex';

import ProveOwnershipHelpModal from './ProveOwnershipHelpModal';

export default {
  computed:{
    signature:{
        get(){ return this.$store.getters.signature; },
        set(signature){ this.setSignature(signature); }
    }
  },
  components: {
    ProveOwnershipHelpModal,
  },
  methods: {
    ...mapActions([
      'setSignature',
    ]),
  },
  data: () => ({
    signedMessageRules: [
      p => !!p || 'Signed message is required!',
    ],
  }),
};
</script>
<style scoped>
  .btn {
      margin: 0 auto;
  }
</style>
