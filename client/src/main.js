import Vue from 'vue';
import Vuex from 'vuex';

import App from './App';
import router from './router';
import store from './store/index';

import Header from './components/header';
import Footer from './components/footer';

Vue.config.productionTip = false;

Vue.use(Vuex);


Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
