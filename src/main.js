import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/gobal.css'
import './assets/css/resetUI.css'
import './plugins/vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
