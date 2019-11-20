import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // data in vue instance
  state: {
  },
  // methods
  mutations: {
  },
  // combined methods
  actions: {
  },
  modules: {
    auth  // divide all sata storage with each modules
  }
})
