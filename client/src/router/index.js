import Vue from 'vue';
import Router from 'vue-router';

import Generator from '@/components/generator';
import Login from '@/components/login';
import Register from '@/components/register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
    {
      path: '/generator',
      name: 'Generator',
      component: Generator,
    },
  ],
  mode: 'history',
});
