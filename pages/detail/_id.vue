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
  methods: {
    async addToCart() {
      try {
        const res = await createCartItem(this.product);
        console.log(res);
        if(res.statusText === 'Created' && res.status === 201) {
          this.$store.dispatch('GET_CART')
        }
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
