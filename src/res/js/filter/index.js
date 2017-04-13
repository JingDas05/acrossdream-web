import Vue from 'vue'

Vue.filter('subContent', function (source, params) {
  console.error(source)
  console.error(params)
  return source.substring(0, params)
})
