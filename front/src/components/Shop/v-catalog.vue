<template>
  <v-container class="v-catalog">
    <v-row class="justify-center mb-5">
      <router-link
      v-if="CART.length" 
      :to="{name: 'cart', params: {cart_data: CART} }"
      >
        <div class="v-catalog__link_to_cart">
          Cart: {{CART.length}}
        </div>
      </router-link>
      
      <h1>catalog</h1>
    </v-row>
    <v-row class="">
      
      <v-catalog-item
      v-for="product in products_data"
      :key="product.id"
      :product_data="product"
      @productDetail="productDetail"
      @addToCart="addToCart"
      />
      
    </v-row>
  </v-container>
</template>

<script>
import vCatalogItem from "./v-catalog-item";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props:{
    products_data:{
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    ...mapGetters(["CART"]),
    
  },
  methods: {
    ...mapActions(['ADD_TO_CART']),
    productDetail(id) {
      this.$router.push({name: 'product', query: {'product': id }})
    },
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  data() {
      return {
          products: [
              {
                  id: 1,
                  name: "КОНЬКИ ФИГУРНЫЕ EDEA OVERTURE ЧЁРНЫЕ",
                  image: 'https://www.twizzle.ru/upload/iblock/447/447765e2739ec284108ef13532362535.jpg',
                  description: "Конструкция системы  шнуровки не позволяет в случая разрыва шнурков ослабить фиксацию голеностопного сустава, тем самым предохраняя  профессионального фигуриста от серьёзных травм. Самые лёгкие и лучшие профессиональные фигурные ботинки в своём спортивном классе.",
                  price: 13000,
                  category: "Коньки(ботинки)",
                  available: true
              },
              {
                  id: 2,
                  name: "КОНЬКИ ФИГУРНЫЕ EDEA PIANO (ЧЕРНЫЕ)",
                  image: 'https://www.twizzle.ru/upload/iblock/e1a/e1ac8b373eaa01547fd455acc0a1381e.jpg',
                  description: "Профессиональные фигурные коньки (ботинки) класса - Еxtra Luxe для профессиональных фигуристов 4-го Высшего спортивного уровня, позволяющие легко и профессионально изучать, шлифовать дупель, все тройные прыжки и четверные прыжки",
                  price: 41500,
                  category: "Коньки(ботинки)",
                  available: true
              },
              {
                  id: 3,
                  name: "ФИГУРНЫЕ ЛЕЗВИЯ MATRIX LEGACY BLUE MX 7050",
                  image: 'https://www.twizzle.ru/upload/iblock/16b/16b7a70fe0bef884206f9f73c553ad07.jpg',
                  description: "Профессиональные фигурные коньки (ботинки) класса - Еxtra Luxe для профессиональных фигуристов 4-го Высшего спортивного уровня, позволяющие легко и профессионально изучать, шлифовать дупель, все тройные прыжки и четверные прыжки",
                  price: 19100,
                  category: "Коньки(лезвия)",
                  available: true
              },
              {
                  id: 4,
                  name: "КОНЬКИ ФИГУРНЫЕ EDEA OVERTURE ЧЁРНЫЕ",
                  image: 'https://www.twizzle.ru/upload/iblock/447/447765e2739ec284108ef13532362535.jpg',
                  description: "Конструкция системы  шнуровки не позволяет в случая разрыва шнурков ослабить фиксацию голеностопного сустава, тем самым предохраняя  профессионального фигуриста от серьёзных травм. Самые лёгкие и лучшие профессиональные фигурные ботинки в своём спортивном классе.",
                  price: 13000,
                  category: "Коньки(ботинки)",
                  available: true
              },
              {
                  id: 5,
                  name: "КОНЬКИ ФИГУРНЫЕ EDEA PIANO (ЧЕРНЫЕ)",
                  image: 'https://www.twizzle.ru/upload/iblock/e1a/e1ac8b373eaa01547fd455acc0a1381e.jpg',
                  description: "Профессиональные фигурные коньки (ботинки) класса - Еxtra Luxe для профессиональных фигуристов 4-го Высшего спортивного уровня, позволяющие легко и профессионально изучать, шлифовать дупель, все тройные прыжки и четверные прыжки",
                  price: 41500,
                  category: "Коньки(ботинки)",
                  available: true
              },
              {
                  id: 6,
                  name: "ФИГУРНЫЕ ЛЕЗВИЯ MATRIX LEGACY BLUE MX 7050",
                  image: 'https://www.twizzle.ru/upload/iblock/16b/16b7a70fe0bef884206f9f73c553ad07.jpg',
                  description: "Профессиональные фигурные коньки (ботинки) класса - Еxtra Luxe для профессиональных фигуристов 4-го Высшего спортивного уровня, позволяющие легко и профессионально изучать, шлифовать дупель, все тройные прыжки и четверные прыжки",
                  price: 19100,
                  category: "Коньки(лезвия)",
                  available: true
              },
          ]
      }
  },
};
</script>

<style lang="css">
   .v-catalog__link_to_cart {
        position: absolute;
        top: 60px;
        right: 10px;
        padding: 16px;
        border: 1px solid #aeaeae;
    }
</style>