/* eslint-disable no-param-reassign,no-shadow */
import { make } from 'vuex-pathify';
import axios from '@/plugins/axios';
// import userApi from '@/api/user/user-api';

const state = {
  user: {
    nickname: '匿名',
  },
};

const actions = {

  /*  async init(context) {
    const token = window.sessionStorage.getItem('token');
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    if (token !== null && user !== null) {
      context.commit('SET_USER', user);
      axios.defaults.headers.common.Authorization = token;
      return true;
    }
    return false;
  },

  async login(context, { username, password }) {
    const result = await userApi.login({ username, password });
    window.sessionStorage.setItem('token', result.headers.authorization);
    window.sessionStorage.setItem('user', JSON.stringify(result.data));
    context.commit('SET_USER', result.data);
    axios.defaults.headers.common.Authorization = result.headers.authorization;
    return result;
  }, */

  async logout(context) {
    context.commit('SET_USER', null);
    delete axios.defaults.headers.common.Authorization;
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
  },
};

const getters = {
  isLogin: state => state.user !== null,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations: make.mutations(state),
};
