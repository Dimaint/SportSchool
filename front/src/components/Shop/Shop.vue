<template>
  <div class="shop">
    <v-catalog :products_data="PRODUCTS"/>
    <!-- <v-cart 
      v-if="CART.length"
      :cart_data="CART"
      />-->
  </div> 
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vCatalog from "./v-catalog";
// import vCart from "./v-cart";
export default {
  name: "Schop",
  components: {
    vCatalog,
    
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>
