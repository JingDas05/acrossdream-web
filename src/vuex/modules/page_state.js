import {
  SET_DIARY_ID,
  SET_TIME
} from '../mutation_type'

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
  [SET_DIARY_ID] (state, diaryId) {
    state.diaryId = diaryId
  },
  [SET_TIME] (state, dateParams) {
    state.dateParams = dateParams
  }
}

export default {
  state,
  mutations
}
