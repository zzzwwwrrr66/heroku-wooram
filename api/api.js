import axios from 'axios';

const instance = axios.create({
  baseURL : process.env.baseURL,
});

const getProducts = function() {
  return instance.get(`/products/`)
}

const fetchDeailId = function(id) {
  return instance.get(`/products/${id}`);
}

// GET /posts?title_like=server
const fetchSearchByKeyword = function(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like : keyword,
    }
  });
} 

const createCartItem = function(cartItem) {
  return instance.post(`/carts`, {
    ...cartItem
  });
}

const getCartItem = function(cartItem) {
  return instance.get(`/carts`);
}

const deleteCartItem = function(itemId) {
  return instance.delete(`/carts/${itemId}`);
}

export { getProducts, fetchDeailId, fetchSearchByKeyword, createCartItem, getCartItem, deleteCartItem }