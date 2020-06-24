<template>
  <v-card class="product-detail mx-auto my-5" max-width="900">
    <v-img :src="product_data.photo" height="200px" contain></v-img>

    <v-card-title class="">
      {{ product_data.name }}
    </v-card-title>

    <v-card-subtitle class="">
      <v-chip class="green--text ">{{ product_data.price }} р.</v-chip>
      <v-spacer></v-spacer>
      
      <p  class="text-uppercase font-weight-light">{{product_data.type}}</p>
    </v-card-subtitle>
    <v-card-text>
      <p>{{ product_data.description }}</p>
      <pre class="font-weight-bold">{{product_data.characteristics}}</pre>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn 
      tile
      color="success"
      @click="addToCart"
      >ADD TO CART
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "product-detail",
  props: ["id"],
  computed: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    ...mapGetters(["PRODUCT_BY_ID"]),
  
    product_data() {
      const id = +this.$route.params.id;
      return this.PRODUCT_BY_ID(id);
    },
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),
    
    addToCart(product_data) {
      this.ADD_TO_CART(product_data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API;
  },
};
</script>

<style lang="css">
  pre {
    white-space: pre-wrap;
  }
</style>