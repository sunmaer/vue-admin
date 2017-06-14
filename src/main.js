// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import echarts from 'echarts'
import vuex from 'vuex'

Vue.use(iview)
Vue.use(vuex)
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

const store = new vuex.Store({
  state: {
    count: 0,
    activeName: "1" //管理左侧导航
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
