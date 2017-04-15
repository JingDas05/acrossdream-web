import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Index'
import PageDetail from '../views/PageDetail'
import PageCreate from '../views/PageCreate'
import DiaryCreate from '../views/DiaryCreate'

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
    },
    {
      path: '/pages/create',
      name: 'pageCreate',
      component: PageCreate
    },
    {
      path: '/diary/create',
      name: 'diaryCreate',
      component: DiaryCreate
    }
  ]
})
