<template>
  <div>
    <select :value="value" @change="eChange">
      <option value="select">Please select one</option>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
  </div>
</template>

<script>
export default {
  props: 
    ['value']
  ,
  data() {
    return {
      items: ['1','2','3']
    }
  },
methods: {
  eChange(e) {
    this.$emit('change', e.target.value)
  }
}
}
</script>

<style>

</style>