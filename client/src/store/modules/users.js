/* eslint-disable */
import axios from 'axios';
// import { succesLogger, errorLogger } from './../logger.js';
import _ from 'lodash';

const state = {
  urlApi: 'http://localhost:3000',
  user: {
    name: '',
    email: '',
    phone: '',
    password: '',
  },
  isRegistered: false,
};

const getters = {
  isRegistered: state => state.isRegistered,
  userCredentials: state => _.pick(state.user, ['email', 'password']),
};

const mutations = {
  getUserCredentials: (state, credentials) => {
    console.log('mutation', credentials);
    _.assign(state.user, credentials);
  },
  setUserRegistration: (state) => {
    state.isRegistered = true;
  },
};

const actions = {
  registerUser({ commit, credentials }) {
    commit('getUserCredentials', credentials);
    let user = _.pick(state.user, ['email', 'password']);
    console.log(state.user);
    console.log('****', user);
    axios.create({ baseURL: state.urlApi })
      .post('users', user)
      .then((res) => {
        // succesLogger(res)
        if (res.status === 200) {
          commit('setUserRegistration');
        }
      })
      .catch(e => e);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
