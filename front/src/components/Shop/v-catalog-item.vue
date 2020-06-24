<template>
  <v-card class="v-catalog-item mx-auto mb-7" max-width="350">
    <v-img :src="product_data.photo" height="200px" contain></v-img>

    <v-card-title class="">
      {{ product_data.name }}
    </v-card-title>

    <v-card-subtitle >
      <v-chip class="green--text ">{{ product_data.price }} р.</v-chip>
      <v-spacer></v-spacer>
      
      <p  class="text-uppercase font-weight-light">{{product_data.type}}</p>
    </v-card-subtitle>
    <v-card-text>
      {{ product_data.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn 
      tile
      color="success"
      @click="addToCart"
      >ADD TO CART
      </v-btn>

      <v-btn tile outlined color="secondary"  :to="'/product/' + product_data.id">
        Detail
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },
};
</script>
