import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kids: [],
    products: []
  },
  mutations: {
    SET_KIDS_TO_VUEX: (state, kids) => {
      state.kids = kids
    },
    SET_PRODUCTS_TO_VUEX: (state, products) => {
      state.products = products
    }
  },
  actions: {
    GET_KIDS_FROM_API({commit}) {
      return axios('http://localhost:8000/api/v1/kidsdetail/', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_KIDS_TO_VUEX', response.data)
        })
    },
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:8000/api/v1/products/', {
        method: 'GET'
      })
      .then((response) => {
        commit('SET_PRODUCTS_TO_VUEX', response.data)
      })
    }
  },
  
  modules: {
  },
  getters: {
    KIDS(state) {
      return state.kids;
    },
    KID_BY_ID:state => id => {
      return state.kids.find(kid => kid.id === id);
    },
    PRODUCTS(state) {
      return state.products;
    },
    PRODUCT_BY_ID:state => id => {
      return state.products.find(product => product.id === id);
    },
    
  }
})
