<template>
  <v-list width="1000">
    <ordersListItem
      v-for="order in orders_data"
      :key="order.key"
      :order_data="order" 
    >
    </ordersListItem>
  </v-list>
</template>

<script>

import ordersListItem from './OrdersList-item'

export default {
  name: "OrdersList",
  components: {
    ordersListItem
  },
  props: {
    orders_data:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>

<style lang="css" scoped></style>
