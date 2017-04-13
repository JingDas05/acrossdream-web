import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Index'
import PageDetail from '../views/PageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pages/:pageId',
      name: 'pageDetail',
      component: PageDetail
    }
  ]
})
