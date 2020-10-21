import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import status from './status'
import users from './users'
import orders from './orders'
import shop from './shop'
import kids from './kids'
import trainers from './trainers'

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    status,
    orders,
    users,
    shop,
    kids,
    trainers
    
  },
  
})
