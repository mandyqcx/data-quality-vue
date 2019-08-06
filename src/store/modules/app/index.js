/* eslint-disable no-param-reassign,no-shadow */
import { make } from 'vuex-pathify';

import dict from '@/dict';

const state = {
  appTitle: '数据质量管理系统',
  theme: 'dark',
  loadingOverlay: false,
  snackbar: false,
  snackbarIcon: '',
  snackbarColor: '',
  snackbarText: '',
  drawer: false,
  bar: true,
};

const actions = {
  loading(context) {
    context.commit('SET_LOADING_OVERLAY', true);
  },
  loaded(context) {
    context.commit('SET_LOADING_OVERLAY', false);
  },
  snackbar(context, type) {
    context.commit('SET_SNACKBAR_COLOR', dict.snackbarTypes[type].color);
    context.commit('SET_SNACKBAR_TEXT', dict.snackbarTypes[type].text);
    context.commit('SET_SNACKBAR_ICON', dict.snackbarTypes[type].icon);
    context.commit('SET_SNACKBAR', true);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations: make.mutations(state),
};
