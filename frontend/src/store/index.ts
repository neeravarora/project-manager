import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    SET_LOGGED_IN(state, value: boolean) {
      state.isLoggedIn = value;
    },
  },
  actions: {},
  modules: {},
});