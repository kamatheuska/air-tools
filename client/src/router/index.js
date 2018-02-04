import Vue from 'vue';
import Router from 'vue-router';

import Generator from '@/components/generator';
import Login from '@/components/login';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/generator',
      name: 'Generator',
      component: Generator,
    },
  ],
  mode: 'history',
});
