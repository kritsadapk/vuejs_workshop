// เริ่มต้นของโปรแกรม
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import './filter'
import router from './router'
// หากต้องการใช้HelloแบบGolbalได้

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
