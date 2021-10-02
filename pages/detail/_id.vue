<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchDeailId, createCartItem } from '@/api/api.js';

export default {
  async asyncData({ params }){
    const res = await fetchDeailId(params.id);
    const product = res.data;

    return { product };
  },
  head() {
    return {
      title: `product - ${this.product.name}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: `content` },
        { hid: 'og:image', property: 'og:image', content: `${this.product.imageUrl}` },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    }
  }, 
  methods: {
    async addToCart() {
      try {
        await createCartItem(this.product);
        this.$store.dispatch('GET_CART');
      } catch(err) {
        return false;
      }
      // this.$store.commit('ADD_CART', {...this.product});
    }
  },
  
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}

</style>
