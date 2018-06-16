import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

import App from './App';
import router from './router';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(VueFormWizard);
Vue.use(Vuetify, {
  theme: {
    primary: '#000',
  },
});

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
  components: { App },
});
