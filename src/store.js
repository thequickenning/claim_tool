import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const actualState = {
  count: 0,
  address: '1LrtY5dPW3aQyNPkcqnNifXwz8Uen1sPoS',
  signature: 'H2lSFbNp/rIca3OFrg+fBQhatgWMfj+lIvjjR3g/8Qq9V6nG5SHu9vfpCAUNd9yWAphs/MLOFGFVhKIyFe/f1LY=',
  utox: null,
  utxoNotFound: null,
  verification: {
    algo: null,
    verified: false
  }
};

const mutations = {
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    state.count -= 1;
  },
  setUtxo(state, utxo) {
    state.utxoNotFound = null;
    state.utxo = utxo;
  },
  setUtxoNotFound(state) {
    state.utxoNotFound = true;
  },
  setAddress(state, address) {
    state.address = address;
  },
  setSignature(state, signature) {
    state.signature = signature;
  },
  setVerification(state, verification) {
    state.verification.algo = verification.algo;
    state.verification.verified = verification.verified;
  },
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  setUtxo: ({ commit }, utxo) => commit('setUtxo', utxo),
  setUtxoNotFound: ({ commit }) => commit('setUtxoNotFound'),
  setAddress: ({ commit }, address) => commit('setAddress', address),
  setVerification: ({ commit }, verification) => commit('setVerification', verification),
  setSignature: ({ commit }, signature) => commit('setSignature', signature),
};

const getters = {
  address (state) {
    return state.address;
  },
  signature (state) {
    return state.signature;
  },
};

export default new Vuex.Store({
  state: actualState,
  getters,
  actions,
  mutations,
});
