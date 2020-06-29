<template>
  <v-container class="v-cart">
    <v-row class="justify-center">
      <h1>Cart</h1>
      <router-link
        
        :to="{ name: 'shop' }"
      >
        <div class="v-cart__link_to_catalog">
            <v-icon>mdi-keyboard-backspace</v-icon>
        </div>
      </router-link>
    </v-row>
    <v-row>
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @delFromCart="delFromCart(index)"
      />
    </v-row>
  </v-container>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),

    delFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="css">
    .v-cart__link_to_catalog {
        position: absolute;
        top: 60px;
        left: 20px;
        padding: 5px;
        border: 1px solid #aeaeae;
    }
</style>
