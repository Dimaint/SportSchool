import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import status from './status'
// import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kids: [],
    products: [],
    cart: [],
    trainers: [],
    isAuthenticated: false,
    jwt: localStorage.getItem('token'),
  },
  mutations: {
    SET_KIDS_TO_VUEX: (state, kids) => {
      state.kids = kids
    },
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
    SET_TRAINERS_TO_VUEX: (state, trainers) => {
      state.trainers = trainers
    },
    // auth
    SET_AUTH_USER(state) {
      //Vue.set(state, 'isAuthenticated', isAuthenticated)
      state.isAuthenticated = true
    },

    UPDATE_TOKEN(state, newToken) {
      
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },

    REMOVE_TOKEN(state) {
      
      localStorage.removeItem('token');
      state.jwt = null;
      state.isAuthenticated = false;
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
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
    GET_TRAINERS_FROM_API({commit}) {
      return axios('http://localhost:8000/api/v1/trainers/', {
        method: 'GET'
      })
        .then((response) => {
          commit('SET_TRAINERS_TO_VUEX', response.data)
        })
    },
    //auth
    VERIFICATION_JWT({commit, state}) {
      
      const headers = {
        token: state.jwt
      }
      axios.post('http://localhost:8000/auth/jwt/verify/', headers)
      
      .then((response) => {
        console.log(response.status)
        if(response.status === 200) {
           commit("SET_AUTH_USER")
         } else {
           commit("REMOVE_TOKEN")
         }
        
      })
      .catch((error) => {
        console.log(error);
      });
    },
    
    async LOGIN_JWT({commit}, payload) {
      commit('setLoading', true)
          try {
              const response = await axios.post("http://localhost:8000/auth/jwt/create/", payload)
              // .then((response) => {
              commit("UPDATE_TOKEN", response.data.access);
              // console.log(response.data.access)
              commit("SET_AUTH_USER", { isAuthenticated: true });
              commit('setLoading', false) //}) 
          }
          catch(error) {
              //console.log(error);
              commit('setLoading', false)
              commit('setError', error.message)
              throw error
          }
      },
    async REGISTRATION_JWT({commit},payload) {
        commit('setLoading', true)
          try {
            await axios.post("http://localhost:8000/auth/users/", payload)
            commit('setLoading', false)
          }
          catch(error) {
            commit('setLoading', false)
            commit('setError', error.message)
            throw error
          }
      },
      async CREATE_ORDER({commit} ,payload) {
        commit('setLoading', true)
        console.log(payload)
          try {
            await axios.post("http://127.0.0.1:8000/api/v1/orders/", payload)
            commit('setLoading', false)
          }
          catch(error) {
            commit('setLoading', false)
            commit('setError', error.message)
            throw error
          }
      }
    
  },
  
  modules: {
    status,
    
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
    CART(state) {
      return state.cart;
    },
    TRAINERS(state) {
      return state.trainers;
    },
    TRAINER_BY_ID:state => id => {
      return state.trainers.find(item => item.id === id);
    },
    KIDS_BY_TRAINER_ID:state => id => {
      return state.kids.filter(item => item.trainer.id === id)
    },
    isLoggedIn: state => state.isAuthenticated
  }
})
