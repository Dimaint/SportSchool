<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                label="Login"
                name="userName"
                prepend-icon="mdi-account"
                type="text"
                v-model="username"
                :rules="loginRules"
              />

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :rules="passwordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              @click="onLogin"
              :loading="loading || loading"
              :disabled="!valid || loading"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      valid: false,
      loginRules: [
        (v) => !!v || "Login is required",
        (v) => v.length <= 20 || "Login must be less than 10 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) ||
          "Password must be equal or more than 6 characters",
      ],
    };
  },
  computed: {
    loading () {
        return this.$store.getters.LOADING
      }
  },
  methods: {
    onLogin() {
      const payload = {
        username: this.username,
        password: this.password,
      };
      axios.post("http://localhost:8000/auth/jwt/create/", payload)
        .then((response) => {
          this.$store.commit("UPDATE_TOKEN", response.data.access);
          // console.log(response.data.access)
          this.$store.commit("SET_AUTH_USER", { isAuthenticated: true });
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          console.log(error);
          // console.debug(error);
          // console.dir(error);
        });
    },
  },
};
</script>
