<template>
  <div>
     <h1> LOGIN </h1>
     <form @submit.prevent="login">
       <b-container fluid>
         <b-row class="my-1">
       <b-form-input v-model="username"
                  type="text"
                  placeholder="Username"></b-form-input>
      <b-form-input v-model="password"
                  type="text"
                  placeholder="Password"></b-form-input>
         <button type="submit" >CLICK TO LOGIN</button>
         </b-row>
         </b-container>
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
       .then((r) => {
        //  console.log(r)
         this.$router.push({name: 'TimeCheck'})
       })
    }
  }
}
</script>
