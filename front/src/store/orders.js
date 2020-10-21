import axios from 'axios'

export default {
    state: {
        orders: []
    },
    mutations: {
        SET_ORDERS_TO_VUEX(state, orders) {
            state.orders = orders;
          },
    },
    actions:{
        GET_ORDERS_FROM_API({commit}) {
            return axios('http://localhost:8000/api/v1/orders/', {
              method: 'GET'
            })
            .then((response) => {
              commit('SET_ORDERS_TO_VUEX', response.data)
            })
          },
    },
    getters: {
        ORDERS(state) {
            return state.orders;
          },

          ORDER_BY_ID:state => id => {
            return state.orders.find(order => order.id === id);
          },
    }
}