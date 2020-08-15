<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registration form</v-toolbar-title>
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
                label="Email"
                name="email"
                prepend-icon="mdi-at"
                type="text"
                v-model="email"
                :rules="emailRules"
              />

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
                :rules="passwordRules"
              />

              <v-text-field
                label="Confirm Password"
                name="confirm-password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              @click="onRegistration"
              :loading="loading || loading"
              :disabled="!valid"
              >Create account</v-btn
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
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      loginRules: [
        (v) => !!v || "Login is required",
        (v) => v.length <= 20 || "Login must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must be less than 6 characters",
      ],
      confirmPasswordRules: [
        (v) => !!v || "Password is required",
        (v) => v === this.password || "Password should match",
      ],
    };
  },
  computed: {
    loading() {
      return this.$store.getters.LOADING;
    },
  },
  methods: {
    onRegistration() {
      if (this.$refs.form.validate()) {
        const payload = {
          username: this.username,
          password: this.password,
          email: this.email,
        };
        axios
          .post("http://localhost:8000/auth/users/", payload)
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch((error) => {
            console.log(error);
            // console.debug(error);
            // console.dir(error);
          });
      }
    },
  },
};
</script>
