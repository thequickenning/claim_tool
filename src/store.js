import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const actualState = {
  count: 0,
  address: '18vP7cwZH66QkAwUBr2bcjA1wJQncMWhFt',
  utox: null,
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.

const mutations = {
  increment(state) {
    state.count += 1;
  },
  decrement(state) {
    state.count -= 1;
  },
};

// actions are functions that cause side effects and can involve
// asynchronous operations.

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
};

// getters are functions

const getters = {
  evenOrOdd: () => ('even'),
};

// A Vuex instance is created by combining the state, mutations, actions,

// and getters.

export default new Vuex.Store({
  state: actualState,
  getters,
  actions,
  mutations,
});
