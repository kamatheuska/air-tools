/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/users';

import * as Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [
    createPersistedState({

    })
  ],
});
