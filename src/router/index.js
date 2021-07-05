import Vue from 'vue'
import Router from 'vue-router'
import cv from './cv'
import * as view from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
  }
  return { x: 0, y: 0 }
},
  routes: []
})

router.addRoutes(cv)
router.addRoutes([
    {
      path: '*',
      name: 'home',
      component: view.index,
      meta: {
        title: 'yoyoyo~~~'
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ])

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
