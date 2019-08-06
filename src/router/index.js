import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'controlHouse',
      component: () => import('@/pages/control-house/ControlHouse'),
    },
    {
      path: '/validdata',
      name: 'validData',
      component: () => import('@/pages/valid-data/ValidData'),
    },
  ],
});
