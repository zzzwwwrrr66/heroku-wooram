<template>
  <div>
    <h2>cart</h2>

    <div v-if="$store.state.cartList.length > 0" class="list-wrapper container">
      <ul>
        <li v-for="cartItem in $store.state.cartList" :key="cartItem.id" class="item list-item">
          <div>
            <img :src="cartItem.imageUrl" alt="" class="product-image thumbnail"  @click="moveToDetailPage(cartItem.id)" >
          </div>
          <div class="description">
            <p>{{cartItem.name}}</p>
            <span>{{cartItem.price}}$</span>
          </div>
          
          <div class="extra-panel">
            <button type="button" style="text-align: cetner;">구매하기</button>
          </div>
          <div>
            <button type="button" style="text-align: cetner;" @click="deleteItem(cartItem.id)">삭제하기</button>
          </div>
        </li>
      </ul>
      </div>
    <p v-else>
      there's no item
    </p>
  </div>
</template>

<script>
import {deleteCartItem} from '@/api/api.js';

export default {
  // async asyncData({store}){
  //     const {data} = await store.dispatch('GET_CART')
  //     return { carts: data }
  // },
  async fetch() {
    await this.$store.dispatch('GET_CART');
  },
  head: {
    title: 'cart-wooram',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'cart wooram' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  created() {
    // console.log(this.testItems);
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`);
    },
    async deleteItem(id) {
      const res = await deleteCartItem(id);
      if(res.statusText === 'OK' && res.status === 200) {
        this.$store.dispatch('GET_CART')
      }
      return false;
    }
  },
  
  
  
  
}
</script>


<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}

</style>
