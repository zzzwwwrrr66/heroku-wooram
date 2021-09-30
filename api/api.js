import axios from 'axios';

const fetchDeailId = function(id) {
  return axios.get(`http://localhost:3000/products/${id}`);
}


// GET /posts?title_like=server
const fetchSearchByKeyword = function(keyword) {
  return axios.get(`http://localhost:3000/products`, {
    params: {
      name_like : keyword,
    }
  });
} 

const createCartItem = function(cartItem) {
  return axios.post(`http://localhost:3000/carts`, {
    ...cartItem
  });
}

const getCartItem = function(cartItem) {
  return axios.get(`http://localhost:3000/carts`);
}

const deleteCartItem = function(itemId) {
  return axios.delete(`http://localhost:3000/carts/${itemId}`);
}

 
export { fetchDeailId, fetchSearchByKeyword, createCartItem, getCartItem, deleteCartItem }