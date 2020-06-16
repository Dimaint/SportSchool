<template>
  <v-card class="product-detail mx-auto my-5" max-width="900">
    <v-img :src="product_data.photo" height="200px" contain></v-img>

    <v-card-title class="">
      {{ product_data.name }}
    </v-card-title>

    <v-card-subtitle class="green--text">
      Price: {{ product_data.price }} р.
    </v-card-subtitle>
    <v-card-text>
      <p>{{ product_data.description }}</p>
      <p>{{product_data.characteristics}}</p>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn tile color="success">ADD TO CART</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "product-detail",
  props: ["id"],
  computed: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  
    product_data() {
      const id = +this.$route.params.id;
      return this.$store.getters.PRODUCT_BY_ID(id);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>
