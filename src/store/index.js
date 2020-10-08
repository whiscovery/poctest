import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    speakersInfo: []
  },
  mutations: {
    setSpeakersInfo: function(state, data) {
      state.speakersInfo = data
    }
  },
  getters: {
    getSpeakersInfo: function(state) {
      return state.speakersInfo
    }
  },
  actions: {},
  modules: {}
})
