import * as types from '../mutation_type'

// 定义state, 注意这个地方不能自定义命名
const state = {
  isLogin: false
}
// 定义 mutations 改变state
const mutations = {
  [types.SET_IS_LOGIN] (state, isLogin) {
    state.isLogin = isLogin
  }
}

// 定义getters
const getters = {
  isLogin: state => state.isLogin
}

// 定义actions
const actions = {
  setIsLogin ({commit}, isLogin) {
    commit(types.SET_IS_LOGIN, isLogin)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
