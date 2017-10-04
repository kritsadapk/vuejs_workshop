<template>
  <div id="app">
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'About', query:{name: 'test'}}">About</router-link>
    <router-view/>
    <!-- <img src="./assets/logo.png">
    <hello></hello> -->
    <form @submit.prevent="submit">
      <input v-model.number="name"> 
      <p v-show="age===''">xxx</p>
      <p v-if="age<=18">AGE NOT 18</p>
      <p v-if="name===''">Please input name</p>
      <p v-else><pre>{{ name }}</pre></p>
      <p :class="{red:!name}">XXXXX</p>
      <select v-model="gender">
        <option :value="null">Select</option>
        <option :value="{v:1}">Mail</option>
        <option :value="{v:2}">Femail</option>
      </select>

      <p v-if="gender">{{gender.v}}</p>


      <ul>
        <li v-for="n in list" :key="n.id">{{n.name}}</li>
      </ul>
      <!-- <select v-model="gender">
        <option value="1">Mail</option>
        <option value="2">Femail</option>
      </select> -->
      <!-- <button v-on:click="submit">Submit</button> -->
      <!-- <button @click="submit">Submit</button> -->


      <p style="background-color:red" v-for="item in computListX" :key="item.id">
       {{item.name}}
      </p>
      <button type="submit">Send</button>
    </form>
    <Item @select="xxx" v-for="item in computedList" :key="item.id" :data="item" header="Item Detail"></Item>
  </div>
</template>

<script>
import Item from './components/Item'
// import Hello from './components/Hello'
// Component Hello จะใช้ได้แบบ Local เท่านั้นซึ่งส่วนใหญ่จะใชเแบบนี้
export default {
  name: 'app',
  components: {
    Item
  },
  data () {
    return {
      name: 'test',
      age: 15,
      gender: 2,
      list: [
        {id: 1, name: 'test1', price: 2000},
        {id: 2, name: 'test2', price: 1000}
      ],
      totalPrice: 0,
      computedList: [
        {id: 1, name: 'test1', price: 2000},
        {id: 2, name: 'test2', price: 1000}
      ]
    }
  },
  methods: {
    submit () {
      window.alert('Hello, ' + this.name)
    },
    xxx (id) {
      window.alert()
    }
  },
  computed: {
    computListX () {
      return this.computedList.filter(item => item.price > 1000)
    }
    // ติดเรื่องนี้ยังไม่เข้าใจ
    // computList () {
    //  this.list.filter(item) => {
    //     return item.price >= this.filter
    //  }
    // }
  },
  created () {
    this.totalPrice = 3000
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.red{
  color:red;
}
</style>
