import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login'
import register from '../components/register'
import homepage from '../components/homepage'
import record from '../components/record'
import test from '../components/test'
import view from '../components/view'

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
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) != -1) {
    next()
  }
  let currentUser = Vue.ls.get('user')

  if (currentUser) {
    next()
  } else {
    next({ path: '/login' })
  }
})

export default router
