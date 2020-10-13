<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="link of links" :key="link.title" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content text-uppercase >
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-spacer/>
          <v-btn text v-if="isUserLoggedIn" @click="onLogout">
            <v-icon left>mdi-logout</v-icon>Logout</v-btn
          >
          <v-spacer/>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <v-card>
      <v-toolbar dense>
        <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"      
        ></v-app-bar-nav-icon>

        <v-toolbar-title >Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            text
            small
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}</v-btn
          >
          <v-btn text v-if="isUserLoggedIn" @click="onLogout">
            <v-icon left>mdi-logout</v-icon>Logout</v-btn
          >
        </v-toolbar-items>
      </v-toolbar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
    </v-card>

   
  </v-app>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    
  },
  data: () => ({
    //
    drawer: false,
    
  }),
  computed: {
    ...mapGetters(["KIDS", "isLoggedIn"]),
    isUserLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    links() {
      if (this.$store.getters.isLoggedIn && this.$store.getters.USER_IS_ADMIN) {
        return [
          { title: "Home", url: "/home", icon: "mdi-home" },
          { title: "Kids", url: "/kids", icon: "mdi-format-list-bulleted"},
          { title: "Shop", url: "/shop", icon: "mdi-cart-outline"},
          { title: "Orders", url: "/orders", icon: "mdi-clipboard-text-outline" },
          { title: "Trainers", url: "/trainers", icon: "mdi-account-group"},
          // { title: "Login", url: "/login", icon: "mdi-lock-open-variant"},
          // { title: "Registration", url: "/registration", icon: "mdi-account-plus"}
        ]
      } 
      else if (this.$store.getters.isLoggedIn && this.$store.getters.USER_IS_MANAGER) {
        return [
          { title: "Orders", url: "/orders", icon: "mdi-clipboard-text-outline" },
        ]
      }
      else if (this.$store.getters.isLoggedIn && this.$store.getters.USER_IS_TRAINER) {
        return [
          { title: "Kids", url: "/kids", icon: "mdi-format-list-bulleted"},
        ]
      }
      else if (this.$store.getters.isLoggedIn && this.$store.getters.USER_IS_PARENT) {
        return [
          { title: "Home", url: "/home", icon: "mdi-home" },
          { title: "My Kid", url: "/kid/1", icon: "mdi-account-outline"},
          { title: "Shop", url: "/shop", icon: "mdi-cart-outline"},
        ]
      }
      else {
        return [
          { title: "Home", url: "/home", icon: "mdi-home" },
          { title: "Shop", url: "/shop", icon: "mdi-cart-outline"},
          { title: "Login", url: "/login", icon: "mdi-lock-open-variant"},
          { title: "Registration", url: "/registration", icon: "mdi-account-plus"}
        ]
      }
    },
  },
  methods: {
    ...mapActions(["GET_KIDS_FROM_API", "VERIFICATION_JWT", "REMOVE_TOKEN"]),
    onLogout () {
      this.$store.commit('REMOVE_TOKEN')
      this.$router.push({ name: "home" })
      
    }
  },
  mounted() {
    this.GET_KIDS_FROM_API();
    
  },
  
  
};
</script>
