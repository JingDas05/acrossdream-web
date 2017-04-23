/**
 * Created by vanking on 2017/4/23.
 */

import Vue from 'vue'

Vue.prototype.$setToken = function (token) {
  if (token) {
    localStorage.setItem('token', token)
    this.$root.$emit('tokenChange', token)

    this.$root.$on('tokenChange', token => {
      console.log(token)
    })
  } else {
    localStorage.removeItem('token')
  }
}

Vue.prototype.$getToken = function () {
  return localStorage.getItem('token')
}

Vue.prototype.$removeToken = function () {
  localStorage.removeItem('token')
}
