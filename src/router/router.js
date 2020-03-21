import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import homepage from '../components/homepage'
import record from '../components/record'
import test from '../components/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    component: test,
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/register',
    component: register,
  },
  {
    path: '/homepage',
    component: homepage,
  },
  {
    path: '/homepage/record',
    component: record,
  },
]

const router = new VueRouter({
  routes,
})

export default router
