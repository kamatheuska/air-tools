/* eslint-disable */
import axios from 'axios';
// import { succesLogger, errorLogger } from './../logger.js';
import _ from 'lodash';
// import router from '../../router/index'

const state = {
  baseURL: 'http://localhost:3000',
  user: {
    name: '',
    email: '',
    phone: '',
    password: '',
  },
  authErrors: {
    registration: false,
    login: false,
  },
  credentials: {
    email: '',
    password: '', 
  },
  token: localStorage.getItem('user-token') || '',
  status: '',
  register: false,
  auth: false,
};

const getters = {
  authStatus: state => state.status,
  isRegistered: state => state.register,
  isAuthenticated: state => state.auth,
  getUserProps: state => state.user,
  getCredentials: state => state.credentials,
  getApiBaseUrl: state => state.baseURL,
  registrationError: state => state.authErrors.registration,
  loginError: state => state.authErrors.login,
};

const mutations = {
  UPDATE_USER_PROP: (state, payload) => {
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
  UPDATE_CREDENTIALS: (state, payload) => {
    switch (payload.type) {
      case 'email':
        state.credentials.email = payload.value;
        break;
      case 'password':
        state.credentials.password = payload.value;
        break;
    }
  },
  SET_USER_TOKEN: (state, response) => {
    let token = response.headers['x-auth'];
    localStorage.setItem('user-token', token);
    console.log('TOKEN FROM MUTATION', state.token);
  },
  AUTH_REQUEST: state => {
    state.status = 'loading';
  },
  AUTH_SUCCESS: state => {
    state.auth = true;
    state.authErrors.login = false;
    state.status = 'success';
    console.log(state.auth);
  },
  AUTH_LOGOUT: state => {
    state.auth = false;
    localStorage.removeItem('user-token');
  },
  REGISTRATION_SUCCESS: state => {
    state.user.isRegistered = true;
    state.authErrors.registration = false;
    state.status = 'success';
  },
  REGISTRATION_ERROR: (state) => {
    state.user.isRegistered = false;
    state.authErrors.registration = true;
    state.status = 'error';
  },
  LOGIN_ERROR: (state) => {
    state.user.isAuthenticated = false;
    state.authErrors.login = true;
    state.status = 'error';
  },
};

const actions = {
  registerUser({ commit, getters }) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST');
      let user = getters.getUserProps;
      let baseURL = getters.getApiBaseUrl;
      return axios
        .create({ baseURL })
        .post('users', user)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_USER_TOKEN', response);
            commit('REGISTRATION_SUCCESS');
            resolve();
          } 
        }).catch((e) => {
          commit('REGISTRATION_ERROR');
          reject()
        });
    });
  },
  loginUser({ commit, getters }) {
    return new Promise((resolve, reject) => {
      let credentials = getters.getCredentials;
      let baseURL = getters.getApiBaseUrl;
      return axios
        .create({ baseURL })
        .post('users/login', credentials)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_USER_TOKEN', response);
            commit('AUTH_SUCCESS');
            resolve();
          } 
        }).catch((e) => {
          console.log(e);
          commit('LOGIN_ERROR');
          reject()
        });
    });
  },
  logoutUser({ commit }) {
    return new Promise((resolve, reject) => {
      commit('AUTH_LOGOUT');
      resolve();
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
