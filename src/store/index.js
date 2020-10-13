import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ["speakersInfo"]
    })
  ],
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
  actions: {
    getSpeakersData: function(context) {
      return axios
        .get(
          "https://script.googleusercontent.com/macros/echo?user_content_key=JkcOfggJobXcP2YBrYDmVOshdXuQJbfRn0-XfdfZhVChBNWuHoXrqXg9kiAMWWj4cGsncd2PqRRugogEOMs-9iKSCiARl4Nrm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOqxU5QC_nZgRkPHyeCNP-n4QIUB6fjPh83U0hwv1lFRVFgZq68P2O7iBaYhCunJ0JK7g-6hpKLuKFxq41JwiLj3YGXp3BxfjQ&lib=MXlEvNmo98u7JPl4wcD1WZM7W5hCA46zX"
        )
        .then(res => {
          // handle success
          //this.speakersInfo = res.data.data
          context.commit("setSpeakersInfo", res.data.data)
        })
        .catch(err => {
          // handle error
          console.log(err)
        })
        .then(() => {
          // always executed
          console.log("hi")
        })
    }
  },
  modules: {}
})
