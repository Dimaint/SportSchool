import axios from 'axios'

export default {
    state: {
        kids: [],
    },
    mutations: {
        SET_KIDS_TO_VUEX: (state, kids) => {
            state.kids = kids
          },
    },
    actions: {
        GET_TRAINERS_FROM_API({commit}) {
            return axios('http://localhost:8000/api/v1/trainers/', {
              method: 'GET'
            })
              .then((response) => {
                commit('SET_TRAINERS_TO_VUEX', response.data)
              })
          },

//visit log
      async USE_TICKET_API({commit} ,payload) {
        commit('setLoading', true)
        let url = 'http://127.0.0.1:8000/api/v1/tickets/'+payload.id+'/'
          try {
            await axios.put(url, payload)
            commit('setLoading', false)
          }
          catch(error) {
            commit('setLoading', false)
            commit('setError', error.message)
            throw error
          }
      },
      async VISIT_LOG_API({commit} ,payload) {
        commit('setLoading', true)
        const url = 'http://127.0.0.1:8000/api/v1/kidvisitlogs/'+payload.id+'/';
        const today = new Date().toISOString().substr(0, 10);
        let todayDate = [{
          date: today,
          isHere: payload.isHere,
        }];

        console.log(url)
          try {
            let response = await axios.get(url)
            
            response.data.dates = response.data.dates.concat(todayDate)
            console.log(response.data)
            
            await axios.put(url, response.data)
              
            commit('setLoading', false)
            
          }
          catch(error) {
            commit('setLoading', false)
            commit('setError', error.message)
            throw error
          }
      },
    },
    getters: {
        KIDS(state) {
            return state.kids;
          },
          KID_BY_ID:state => id => {
            return state.kids.find(kid => kid.id === id);
          },
    }
}