import Vue from 'vue'

Vue.filter('subContent', function (source, params) {
  if (source && source.length > params) {
    return source.substring(0, params)
  }
  return source
})
