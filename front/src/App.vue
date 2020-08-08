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
        
      </v-list>
    </v-navigation-drawer>
    <v-card>
      <v-toolbar dense>
        <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"      
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Title</v-toolbar-title>

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
    links: [
      { title: "Home", url: "/home", icon: "mdi-home" },
      { title: "Kids", url: "/kids", icon: "mdi-format-list-bulleted"},
      { title: "Shop", url: "/shop", icon: "mdi-cart-outline"},
      { title: "Trainers", url: "/trainers", icon: "mdi-account-group"}
    ],
  }),
  computed: {
    ...mapGetters(["KIDS"]),
  },
  methods: {
    ...mapActions(["GET_KIDS_FROM_API"]),
  },
  mounted() {
    this.GET_KIDS_FROM_API();
  },
};
</script>
