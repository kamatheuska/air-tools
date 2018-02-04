import Vue from 'vue';
import App from './App';
import router from './router';

import Header from './components/header';
import Footer from './components/footer';

Vue.config.productionTip = false;

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
