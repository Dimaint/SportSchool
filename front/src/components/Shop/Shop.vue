<template>
  <div class="shop">
    <v-catalog :products_data="PRODUCTS"/>
    <v-cart />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vCatalog from "./v-catalog";
import vCart from "./v-cart";
export default {
  name: "Schop",
  components: {
    vCatalog,
    vCart,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>
