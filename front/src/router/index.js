import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Macro from '../views/Macro.vue'
import Micro from '../views/Micro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/macro',
    name: 'Macro',
    component: Macro
  },
  {
    path: '/micro',
    name: 'Micro',
    component: Micro
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
