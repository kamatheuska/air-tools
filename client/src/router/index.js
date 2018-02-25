import Vue from 'vue';
import Router from 'vue-router';

import Generator from '@/components/generator';
import Login from '@/components/login';
import Home from '@/components/home';
import Register from '@/components/register';
import store from '../store/index';

Vue.use(Router);

const authRouteGuard = (to, from, next) => {
  if (!to.path.startsWith('/login') && !store.getters.isAuthenticated) {
    next(`/login?service=${to.fullPath}`);
  } else {
    next();
  }
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/generator',
      name: 'Generator',
      component: Generator,
      beforeEnter: authRouteGuard,
    },
  ],
  mode: 'history',
});
