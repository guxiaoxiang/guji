import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import homepage from '../components/homepage'
import record from '../components/record'
import test from '../components/test'
import view from '../components/view'
import deleteBill from '../components/deleteBill'
import analysicBill from '../components/analysicBill'
import { Notify } from 'vant'

Vue.use(VueRouter)

const whiteList = ['/login', '/register']

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
  {
    path: '/homepage/view',
    component: view,
  },
  {
    path: '/homepage/view/deleteBill',
    component: deleteBill,
  },
  {
    path: '/homepage/analysicBill',
    component: analysicBill,
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) != -1) {
    next()
  }
  let currentUser = Vue.ls.get('user')

  if (currentUser || to.path == '/register') {
    next()
  } else {
    Notify({ type: 'warning', message: '请先登录' }), next({ path: '/login' })
  }
})

export default router
