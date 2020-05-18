import axios from 'axios'
import { VueAxios } from './axios'
import { Toast } from 'vant'
// 创建 axios 实例
const service = axios.create({
  timeout: 6000, // 请求超时时间
  headers: {'Content-Type': 'application/json; charset=utf-8'}
})

const err = () => {
  loading.clear()
  Toast.fail('network error')
}

var loading = {}
// request interceptor
service.interceptors.request.use(req => {
  loading = Toast.loading({
    message: '加载中...',
    forbidClick: true,
  })
  return req
}, err)

// response interceptor
service.interceptors.response.use(res => {
  loading.clear()
  return res.data
}, err)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service)
  },
}

export { installer as VueAxios, service as axios }
