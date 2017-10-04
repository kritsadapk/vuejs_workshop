<template>
  <div>
    <h1>{{data.name}}</h1>
    <p>{{data.price}}</p>
    <button @click="select">XXXXX</button>
  </div>
</template>

<<script>
export default {
  name: 'item',
  props: {
    data: {
      type: Object,
      requird: true
    },
    header: {
      type: String,
      requird: true
    }
  },
  methods: {
    select () {
      this.$emit('select', this.data)
    }
  }
}
</script>

