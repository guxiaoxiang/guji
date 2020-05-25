import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import register from '../views/register'
import homepage from '../components/homepage'
import record from '../views/main/record'
import userInfo from '../views/userInfo'
import modifyPassword from '../views/modifyPassword'
import bar from '../views/main/bar'
import view from '../views/main/view'
import my from '../views/main/my'
import deleteBill from '../views/deleteBill'
import analysicBill from '../views/main/analysicBill'
import { Notify } from 'vant'

Vue.use(VueRouter)

const whiteList = ['/login', '/register']

const routes = [
  {
    path: '/bar',
    component: bar,
    children: [
      { path: '/bar/record', component: record },
      { path: '/bar/view', component: view },
      { path: '/bar/analysicBill', component: analysicBill },
      { path: '/bar/my', component: my },
    ],
  },
  {
    path: '/login',
    component: login,
  },
  { path: '/bar/view/deleteBill', component: deleteBill },
  {
    path: '/bar/my/userInfo',
    component: userInfo,
  },
  {
    path: '/bar/my/modifyPassword',
    component: modifyPassword,
  },
  {
    path: '/',
    redirect: '/bar/my',
  },
  {
    path: '/',
    componentmy: my,
  },
  {
    path: '/register',
    component: register,
  },
  {
    path: '/homepage',
    component: homepage,
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

  if (currentUser || to.path == '/register' || to.path == '/bar/my' || to.path == '/login') {
    next()
  } else {
    Notify({ type: 'warning', message: '请先登录' }), next({ path: '/bar/my' })
  }
})

export default router
