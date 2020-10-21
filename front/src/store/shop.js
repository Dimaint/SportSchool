import axios from 'axios'

export default {
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS_TO_VUEX: (state, products) => {
            state.products = products
          },
          SET_CART: (state, product) => {
            if (state.cart) {
              let isProductExist = false;
              state.cart.map(function(item){
                if (item.id === product.id) {
                  isProductExist = true;
                  item.quantity++
                }
              })
              if (!isProductExist) {
                state.cart.push(product)
              }
            } else {
              state.cart.push(product)
            }
            
          },
          REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
          },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:8000/api/v1/products/', {
              method: 'GET'
            })
            .then((response) => {
              commit('SET_PRODUCTS_TO_VUEX', response.data)
            })
          },
          ADD_TO_CART({commit}, product) {
            commit('SET_CART', product)
          },
          DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
          },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
          },
          PRODUCT_BY_ID:state => id => {
            return state.products.find(product => product.id === id);
          },
          CART(state) {
            return state.cart;
          },
    }
}