import * as types from '../mutation_type'

// 定义state, 注意这个地方不能自定义命名
const state = {
  diaryId: '',
  dateParams: {
    startTime: '',
    endTime: ''
  }
}
// 定义 mutations 改变state
const mutations = {
  [types.SET_DIARY_ID] (state, diaryId) {
    state.diaryId = diaryId
  },
  [types.SET_TIME] (state, dateParams) {
    state.dateParams = dateParams
  }
}

// 定义getters
const getters = {
  diaryId: state => state.diaryId
}

// 定义actions
const actions = {
  setDiaryId ({commit}, diaryId) {
    commit(types.SET_DIARY_ID, diaryId)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
