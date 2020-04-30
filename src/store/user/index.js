import Vue from 'vue'
const state = {
  user: {},
}

// getters
const getters = {
  user: state => {
    return state.user
  },
}

// actions
const actions = {}

// mutations
const mutations = {
  setUser(state, data) {
    state.user = data
    Vue.ls.set('user', data)
  },
  clearUser(state) {
    state.user = {}
    Vue.ls.remove('user')
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
