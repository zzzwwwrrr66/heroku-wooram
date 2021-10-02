import _ from 'lodash';
import {getCartItem} from '@/api/api.js';


export const state = () => ({
  cartList: [],
})

export const mutations = {
  ADD_CART(state, data) {
    const newCartItem = {
      ...data,
      imageUrl : `${data.imageUrl}/${Math.random()}`,
    }
    state.cartList.push(newCartItem);
    state.cartList = _.uniqBy(state.cartList, 'id');

    /*
      filter
      const a = state.cartList.filter( v=> v.id === data.id);
      if(a.length === 0 ) state.cartList.push(data);
      else return false;
    */
  },
  SET_CART_ITEMS(state, data){
    state.cartList = data;
  }
}


export const actions = {
  async GET_CART({commit}) {
    const { data } = await getCartItem();
    console.log(data);
    // const newCartItem = data.map(v=> ({
    //   ...data,
    //   imageUrl : `${data.imageUrl}/${Math.random()}`,
    // }));
   
    commit('SET_CART_ITEMS', data);
 
    return false;
    
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch('GET_CART');
  // }
}

