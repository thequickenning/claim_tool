import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Vuetify from 'vuetify';

import App from './App';

import routes from './routes';
import store from './store';

import '../node_modules/vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(Vuetify, {
  theme: {
    primary: '#000',
  },
});

const router = new VueRouter({ routes, mode: 'history' });

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
  components: { App },
});
