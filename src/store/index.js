import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import app from '@/store/modules/app';
import user from '@/store/modules/user';


Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: {
    app,
    user,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
