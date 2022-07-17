import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
createStore({
  state: {
      authenticated: false
  },
  mutations: {
      SET_AUTH: (state: { authenticated: boolean }, auth: boolean) => state.authenticated = auth
  },
  actions: {
      setAuth: ({commit}: { commit: Commit }, auth: boolean) => commit('SET_AUTH', auth)
  },
  modules: {}
})