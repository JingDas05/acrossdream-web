import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'
import diary from './modules/diary'
import global from './modules/global'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

// 下面modules 里面的 pageParam 在getter方法中会用到
export default new Vuex.Store({
  modules: {
    page,
    diary,
    global
  },
  strict: debug,
  middlewares: debug ? [] : []
})
