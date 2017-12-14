import * as types from '../mutation_type'

// 定义state, 注意这个地方不能自定义命名
const state = {
  isLogin: false,
  // 这个地方展示的是记录列表页是否展示具体内容
  isShowContent: false,
  // 当前搜索策略： diary:左侧日记列表点击， search：全文检索， searchByPeriod 日期搜索
  currentStrategy: 'diary'
}
// 定义 mutations 改变state
const mutations = {
  [types.SET_IS_LOGIN] (state, isLogin) {
    state.isLogin = isLogin
  },
  [types.SET_IS_SHOW_CONTENT] (state, isShowContent) {
    state.isShowContent = isShowContent
  },
  [types.SET_CURRENT_STRATERY] (state, currentStrategy) {
    state.currentStrategy = currentStrategy
  }
}

// 定义getters
const getters = {
  isLogin: state => state.isLogin,
  isShowContent: state => state.isShowContent,
  currentStrategy: state => state.currentStrategy
}

// 定义actions
const actions = {
  setIsLogin ({commit}, isLogin) {
    commit(types.SET_IS_LOGIN, isLogin)
  },
  setIsShowContent ({commit}, isShowContent) {
    commit(types.SET_IS_SHOW_CONTENT, isShowContent)
  },
  setCurrentStrategy ({commit}, currentStrategy) {
    commit(types.SET_CURRENT_STRATERY, currentStrategy)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
