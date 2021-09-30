<template>
  <div class="input-wrapper flex">
    <input type="text" class="search-input" :value="value" @input="updateInput" >

    <button type="button" class="btn" @click="$emit('search')">SEARCH</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
.flex {
  display: flex;
  justify-content: center;
}
</style>