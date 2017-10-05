<template>
  <div> 
      <b-card title="Time Check"
          img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      <p>Welcome, Khun ...</p>
      <b-button  variant="primary" @click="checkin">CHECK IN</b-button>
       <b-button variant="success" @click="checkout">CHECK OUT</b-button>
    </p> 
  </b-card> 
  </div>
</template>
<script>
import * as Api from '../services/api'
export default {
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    checkin () {
      Api.checkin()
      .then((r) => {
        console.log(r)
      })
    },
    checkout () {
      Api.checkout()
      .then((r) => {
        console.log(r)
      })
    }
  }
}
</script> 

