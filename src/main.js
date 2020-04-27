import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import VueStorage from 'vue-ls'
import config from '@/config/config'
import store from './store'
import './assets/css/gobal.css'
import './assets/css/resetUI.css'
import './plugins/vant.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueStorage, config.storageOptions)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
