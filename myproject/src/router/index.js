import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/from',
    name: 'from',
    component: () => import('../views/From.vue')
  },
  {
    path: '/showview',
    name: 'showview',
    component: () => import('../views/ShowView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/Table.vue')
  },

  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/User2')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
