import jwtDecode from 'jwt-decode'

const state = {
  token: null
}

const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

const actions = {
  login(options, token) {
    options.commit('setToken', token)
  },
  logout(options) {
    options.commit('setToken', null)
  }
}

const getters = {
  isAuthenticated(state) {
    return state.token ? true : false
  },
  requestHeader(state) {
    return {
      headers: {
        Authorization: 'Bearer ' + state.token
      }
    }
  },
  userId(state) {
    return state.token ? jwtDecode(state.token).user_id : null
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
