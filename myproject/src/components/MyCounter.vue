<template>
  <div>
    <h1><slot></slot></h1>
    <button @click="dec"><slot name="dec"></slot></button>
    {{ number }}
    <button @click="inc"><slot name="inc"></slot></button>
  </div>
</template>

<script>
export default {
  props: ['begin'],

  data () {
    return {
      number: 0
    }
  },
  methods: {
    dec: function () {
      this.number--
      this.$emit('dec', this.number)
    },
    inc: function () {
      this.number++
      this.$emit('inc', this.number)
    }
  },
  created () {
    console.log(this.begin)
    this.number = this.begin
  }
}
</script>
