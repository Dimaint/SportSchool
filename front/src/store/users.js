import axios from "axios";

export default {
  state: {
    isAuthenticated: false,
    jwt: localStorage.getItem("token"),
    userGroups: localStorage.getItem("userGroups"),
    orders: [],
  },
  mutations: {
    SET_AUTH_USER(state) {
      state.isAuthenticated = true;
    },

    SET_USER_GROUPS(state, groups) {
      localStorage.setItem("userGroups", groups);
      state.userGroups = groups;
    },

    UPDATE_TOKEN(state, newToken) {
      localStorage.setItem("token", newToken);
      state.jwt = newToken;
    },

    REMOVE_TOKEN(state) {
      localStorage.removeItem("token");
      state.jwt = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userGroups");
      state.userGroups = null;
    },
  },
  actions: {
    VERIFICATION_JWT({ commit, state }) {
      const headers = {
        token: state.jwt,
      };
      axios
        .post("http://localhost:8000/auth/jwt/verify/", headers)

        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            commit("SET_AUTH_USER");
          } else {
            commit("REMOVE_TOKEN");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async LOGIN_JWT({ commit }, payload) {
      commit("setLoading", true);
      try {
        const response = await axios.post("http://localhost:8000/token/", payload); //"http://localhost:8000/auth/jwt/create/"
        commit("UPDATE_TOKEN", response.data.access);
        commit("SET_AUTH_USER", { isAuthenticated: true });
        commit("SET_USER_GROUPS", response.data.groups);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
    async REGISTRATION_JWT({ commit }, payload) {
      commit("setLoading", true);
      try {
        await axios.post("http://localhost:8000/auth/users/", payload);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
    async CREATE_ORDER({ commit }, payload) {
      commit("setLoading", true);
      console.log(payload);
      try {
        await axios.post("http://127.0.0.1:8000/api/v1/orders/", payload);
        commit("setLoading", false);
      } catch (error) {
        commit("setLoading", false);
        commit("setError", error.message);
        throw error;
      }
    },
  },
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,

    USER_IS_ADMIN: (state) => state.userGroups.indexOf("admin") != -1,
    USER_IS_TRAINER: (state) => state.userGroups.indexOf("trainers") != -1,
    USER_IS_PARENT: (state) => state.userGroups.indexOf("parents") != -1,
    USER_IS_MANAGER: (state) => state.userGroups.indexOf("managers") != -1,
  },
};
