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
  updateUserProp: (state, payload) => {
    switch (payload.type) {
      default:
        state.user.name = payload.value;
        break;
      case 'number':
        state.user.phone= payload.value;
        break;
      case 'email':
        state.user.email = payload.value;
        break;
      case 'password':
        state.user.password = payload.value;
        break;
    }
  },
};

const actions = {
  registerUser({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      axios.create({ baseURL: state.urlApi })
        .post('users', state.user)
        .then((res) => {
          if (res.status === 200) {
            state.isRegistered = true;
            resolve();
          } else {
            state.isRegistered = false;
            reject();
          }
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
