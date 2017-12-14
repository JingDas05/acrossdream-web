import * as types from '../mutation_type'

// 定义state
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

// 定义getters,获取状态值
const getters = {
  showDiaries: state => state.showDiaries,
  flushDiaries: state => state.flushDiaries

}

// 定义actions，提交mutations
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
