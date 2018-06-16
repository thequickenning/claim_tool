import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const actualState = {
  count: 0,
  address: '18vP7cwZH66QkAwUBr2bcjA1wJQncMWhFt',
  utox: null,
  utxoNotFound: null,
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
  updateAddress(state, address) {
    state.address = address;
  },
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  setUtxo: ({ commit }, utxo) => commit('setUtxo', utxo),
  setUtxoNotFound: ({ commit }) => commit('setUtxoNotFound'),
  updateAddress: ({ commit }, address) => commit('updateAddress', address),
};

const getters = {};

export default new Vuex.Store({
  state: actualState,
  getters,
  actions,
  mutations,
});
