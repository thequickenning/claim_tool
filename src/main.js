import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import PrettyCheckbox from 'pretty-checkbox-vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Vuetify from 'vuetify';

import App from './App';

import routes from './routes';
import store from './store';

import 'vuetify/dist/vuetify.min.css';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(VueFormWizard);
Vue.use(PrettyCheckbox);
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
