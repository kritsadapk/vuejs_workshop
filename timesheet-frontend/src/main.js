// เริ่มต้นของโปรแกรม
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import './filter'
import router from './router'
// หากต้องการใช้HelloแบบGolbalได้

Vue.config.productionTip = false
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
