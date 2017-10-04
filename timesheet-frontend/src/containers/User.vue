<template>
    <div>
        <h1>
            User : {{userId}}
        </h1>
       

        <router-link :to="{name: 'Userinfo'}">INFO</router-link>
        <router-link :to="{name: 'UserEdit'}">Edit</router-link>

         
       <router-view/>
       <br/>
        <button @click="next">NEXT >>></button>

    </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      userId: +this.$route.params.id
    }
  },
  watch: {
    $route () {
    //   immediate: true,
      this.userId = +this.$route.params.id
    }
  },
  methods: {
    next () {
      this.$router.push({name: 'User', params: { id: this.userId + 1 }})
    }
  }
}
</script>

