import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalTime: 0
  },
  mutations: {
    setGlobalTime(state, value) {
      state.globalTime = value;
    }
  },
  actions: {}
});
