// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import store from './vuex/store'
import plugins from './plugins/index'
import './res/js/filter/index'
import './res/js/storage/index'
import VueQuillEditor from 'vue-quill-editor'

const isDebugMode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebugMode
Vue.config.devtools = isDebugMode
Vue.config.productionTip = isDebugMode

// Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(VueResource)
Vue.use(plugins)
Vue.use(VueQuillEditor)

Vue.http.interceptors.push((request, next) => {
  let token = localStorage.getItem('token')
  if (token !== 'undefined' && token !== '' && token !== null) {
    request.headers.set('X-Auth-Token', token)
  }
  next((response) => {
    console.log(response)
    if (response.status === 401) {
      router.push({name: 'login'})
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

// cordova 打包app需要,平时可以注释掉
// document.addEventListener('deviceready', function () {
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     template: '<App/>',
//     components: { App }
//   })
//   window.navigator.splashscreen.hide()
// }, false)
