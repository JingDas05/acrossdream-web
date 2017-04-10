import consts from '../res/js/consts/index'

export default {
  install (Vue, options) {
    Vue.mixin({
      created: function () {
        this.$consts = consts
      }
    })
  }
}
