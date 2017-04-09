import * as types from '../mutation_type'

// 提交mutation(types.SET_DIARY_ID), 并且携带参数diaryId，这个地方会导致modules 里面的page_state 里面的state发生变化
export const setDiaryId = ({dispatch}, diaryId) => {
  dispatch(types.SET_DIARY_ID, diaryId)
}

export const setTime = ({dispatch}, time) => {
  dispatch(types.SET_TIME, time)
}

