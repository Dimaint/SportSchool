<template>
  <v-card
    class="mx-auto mb-5"
    max-width="300"
    
  >
    <v-img
      :src="cart_item_data.photo"
      height="150px"
    ></v-img>

    <v-card-title>
      {{cart_item_data.name}}
    </v-card-title>

    <v-card-subtitle>
      PRICE: {{cart_item_data.price}} <v-spacer/> QUANTUTY: {{cart_item_data.quantity}}
    </v-card-subtitle>
    <v-card-title>
      <v-col cols="12">
        SIZE: {{cart_item_data.size}}
      </v-col>
      <v-col cols="12">
        <v-text-field
            v-model="size"
            @change="editSize"
            :counter="10"
            label="Edit size"
            required
          ></v-text-field>
      </v-col>
      
    </v-card-title>

    <v-card-actions>
      <v-btn 
      text
      @click="addQuantity"
      >ADD</v-btn>

      <v-btn
        color="purple"
        text
        @click="delFromCart"
      >
        DELETE
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <pre>{{cart_item_data.characteristics}}
          </pre>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'v-cart-item',
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data: () => ({
      show: false,
      size: "",
    }),
  methods: {
    delFromCart() {
      this.$emit('delFromCart')
    },
    addQuantity() {
      this.cart_item_data.quantity++
    },
    editSize() {
      this.cart_item_data.size = this.size
    }
  },
  
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1);
    this.$set(this.cart_item_data, 'size', 1)
  },
  beforeDestroy() {},
  
}
</script>

<style lang="css">
  pre {
    white-space: pre-wrap;
  }
</style>