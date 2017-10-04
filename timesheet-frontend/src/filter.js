import Vue from 'vue'
import moment from 'moment'

Vue.filter('upper', (text) => {
  return text.toUpperCase()
})

// const ticker = new Vue({
//   data () {
//     return {
//       tick: 0,
//       intervalId: 0
//     }
//   },
//   created () {
//     this.intervalId = setInterval(() => {
//       this.tick = Date.now()
//     }, 5000)
//   },
//   beforeDestroy () {
//     clearInterval(this.intervalId)
//   }
// })
Vue.filter('formNow', (date) => {
    // this.ticker
  return moment(date).fromNow()
})
