import vue from "vue";
import vuex from "vuex";

Vue.useAttrs(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {},
});
