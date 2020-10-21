import axios from 'axios'

export default {
    state: {
        trainers: [],
    },
    mutations: {
        SET_TRAINERS_TO_VUEX: (state, trainers) => {
            state.trainers = trainers
          },
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
    },
    getters: {
        TRAINERS(state) {
            return state.trainers;
          },
          TRAINER_BY_ID:state => id => {
            return state.trainers.find(item => item.id === id);
          },
          KIDS_BY_TRAINER_ID:state => id => {
            return state.kids.filter(item => item.trainer.id === id)
          },
    }
}