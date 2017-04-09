import Vue from 'vue'
import Vuex from 'vuex'
import pageState from './modules/page_state'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// 下面modules 里面的 pageParam 在getter方法中会用到
export default new Vuex.Store({
  modules: {
    pageState
  },
  strict: debug,
  middlewares: debug ? [] : []
})
