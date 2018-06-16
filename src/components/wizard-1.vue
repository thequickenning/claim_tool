<template>
  <AddressForm
    :address="address"
    @updateAddress="updateAddress"
  />
</template>
<script>
import AddressForm from './AddressForm';

export default {
  components: {
    AddressForm,
  },
  data: () => ({
    addressRules: [
      a => !!a || 'Address is required!',
    ],
  }),
  methods: {
    updateAddress(address) {
      this.$emit('updateAddress', address);
    },
  },
  props: {
    address: {
      type: String,
      default: '',
      required: false,
    },
  },
};
</script>
