<template>
  <div class="container">

    <b-row>
      <b-col cols="4">
        <img src="https://lh3.googleusercontent.com/hZvHgmslzcIBZz9dfzhtKzCoaSSPiVMqyX926gZ9G-tW6snNLKz5Nibkz3bzx-8rPg=w300" class="img-responsive">
      </b-col>
      <b-col>
        <h1> LOGIN </h1>
        <b-form @submit.prevent="login">
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">Email:</label>
            <div class="col-sm-12">
              <b-form-input v-model="username" type="text" placeholder="Username"></b-form-input>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">Password:</label>
            <div class="col-sm-12">
              <b-form-input v-model="password" type="text" placeholder="Password"></b-form-input>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <b-btn type="submit">LOGIN</b-btn>
            </div>
          </div>
          <transition name="fade">
            <p class="alert alert-danger" v-if="showDismissibleAlert">
              <strong>เดี๋ยวสิ! </strong>กรุณาตรวจสอบหน่อย กรอกอะไรมาบ้างหรือยัง!
            </p>
            <p class="alert alert-danger" v-if="showUserNotFound">
              <strong>เอ๊ะ! </strong> Username / Password ผิดอะเปล่า ลองเช็คอีกที
            </p>
          </transition>
        </b-form>
      </b-col>
    </b-row>

  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
  opacity: 0
}
</style>

<script>
import * as Api from '../services/api'

export default {
  name: 'home',
  data () {
    return {
      username: '',
      password: '',
      showDismissibleAlert: false,
      showUserNotFound: false,
      form: {}
    }
  },
  methods: {
    login () {
      if (!this.username || !this.password) {
        this.showDismissibleAlert = true
        setTimeout(() => {
          this.showDismissibleAlert = false
        }, 3000)
        return
      }
      Api.login(this.username, this.password)
        .then((r) => {
          //  console.log(r)
          this.$router.push({ name: 'TimeCheck' })
        })
    }
  }
}
</script>
