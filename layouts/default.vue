<template>
  <div>
    <header>
    <ul>
      <li>
        <NuxtLink to="/">HOME</NuxtLink> |
        <NuxtLink to="/cart">cart</NuxtLink>
      </li>
    </ul>
    <h1>{{$route.name}} page</h1>
    </header>
    <div class="cart-wrapper">
      <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>

      <span v-if="$store.state.cartList.length" class="__count">{{$store.state.cartList.length}}</span>
    </div>

   
    <Nuxt /> 
  </div>


    
</template>

<script>
export default {
  async asyncData({store}){
      const {data} = await store.dispatch('GET_CART');

      return { carts: data };
  },
  methods: {
    moveToCartPage() {
      this.$router.push('/cart');
    }
  },
  created() {
  },
  
}
</script>

<style scoped>
  h1 {
    font-size: 24px;
    padding: 10px 0;
  }
  .cart-wrapper {
  
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
.cart-wrapper .__count {
  position: absolute;
  right: -15px;
  top: -5px;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: dodgerblue;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
}
</style>