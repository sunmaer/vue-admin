import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import echarts from 'echarts'

Vue.use(iview)
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
