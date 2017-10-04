<template>
  <div>
     <h1> HOME </h1>
     <form @submit.prevent="login">
         <input type="text" placeholder="Username" v-model="username">
         <input type="text" placeholder="Password" v-model="password">
         <button type="submit" >CLICK TO LOGIN</button>
     </form>
     
  </div>
</template>

<script>
import * as Api from '../services/api'

export default {
  name: 'home',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      Api.login(this.username, this.password)
       .then(() => {
         this.$router.push({name: '/'})
       })
    }
  }
}
</script>
