// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Yokio from '@src/main.js'

Yokio.install(Vue)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#mobile',
  router,
  render: h => h(App)
})
