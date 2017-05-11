import * as types from '../mutation_type'

// 定义state, 注意这个地方不能自定义命名
const state = {
  showDiaries: false,
  flushDiaries: false
}
// 定义 mutations 改变state
const mutations = {
  [types.SET_SHOW_DIARIES] (state, isShowDiaries) {
    state.showDiaries = isShowDiaries
  },
  [types.SET_FLUSH_DIARIES] (state, flushDiaries) {
    state.flushDiaries = flushDiaries
  }
}

// 定义getters
const getters = {
  showDiaries: state => state.showDiaries,
  flushDiaries: state => state.flushDiaries

}

// 定义actions
const actions = {
  setShowDiaries ({commit}, isShowDiaries) {
    commit(types.SET_SHOW_DIARIES, isShowDiaries)
  },
  setFlushDiaries ({commit}, flushDiaries) {
    commit(types.SET_FLUSH_DIARIES, flushDiaries)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
