<template>
  <div>
    <p>MAIN PAGE</p>
    <div>
      <SearchInput ref="input" v-model="inputText" @search="searchByKeyword" ></SearchInput>
    </div>
    <div v-if="isSearch">
      <p>{{lastWord}}의 검색결과</p>
    </div>
    <div>
      <ul v-if="products.length > 0">
        <li v-for="product in products" :key="product.id" class="item" @click="moveToDetailPage(product.id)">
          <div>
            <img :src="product.imageUrl" alt="" class="product-image">
          </div>
          <p>{{product.name}}</p>
          <span>{{product.price}}$</span>
        </li>
      </ul>
      <div v-else>
        <p>theres no products</p>
      </div>
    </div>

    
  </div>
</template>


<script>
// import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import { getProducts, fetchSearchByKeyword } from '@/api/api.js';

export default {
  name : 'HOME',
  components: { SearchInput,  },
  async asyncData(){
    const res = await getProducts();
    const datas = res.data;

    const products = datas.map((v)=>{
      return {
        ...v,
        imageUrl : `${v.imageUrl}${Math.random()}`
      }
    });

    return { products };
  },
  data() {
    return {
      inputText: '',
      testCheck: '',
      isSearch: false,
      lastWord : '',
      count : 0,
    }
  },
  methods: {
    
    moveToDetailPage(id) {

      this.$router.push(`detail/${id}`);
      // this.getDetailData(id);
    },
    updateChange(key) {
      this.testCheck = key
    },
    async searchByKeyword() {
      const res = await fetchSearchByKeyword(this.inputText);
      
      this.isSearch = true;
      this.lastWord = this.inputText;
      this.products = res.data.map(v=>{
        return {
          ...v,
          imageUrl : `${v.imageUrl}/${Math.random()}`,
        }
      });
      const inputWrap = this.$refs.input.$el;
      inputWrap.firstChild.focus();
      this.inputText = '';
    },
    
  },
  created() {
    this.$store.dispatch('GET_CART');
  }
  
  // data() {
  //   return {
  //     products : [],
  //   }
  // },
  
  // async created() {
    
  // },
}
</script>

<style scoped>
body, ul p, span{
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 10px;
  margin: 0;
}
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}

</style>
