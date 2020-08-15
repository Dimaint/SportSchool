export default {
    state: {
      loading: false,
      error: null
    },
    mutations: {
      setLoading(state, payload) {
        state.loading = payload;
      },
      setError(state, payload) {
        state.error = payload;
      },
      clearError(state) {
        state.error = null;
      }
    },
    actions: {
        SET_LOADING ({commit}, payload) {
            commit('setLoading', payload)
        },
        SET_ERROR ({commit}, payload) {
            commit('setError', payload)
        },
        CLEAR_ERROR ({commit}) {
          commit('clearError')
        }
    },
    getters: {
        LOADING(state) {
            return state.loading
        },
        ERROR (state) {
            return state.error
        }
    }
  };
  