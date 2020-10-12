import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import planSelect from '../views/planSelect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: Home
  },
  {
    path: '/plany',
    name: 'Plans',
    component: planSelect
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
