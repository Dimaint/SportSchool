<template>
  <v-list-item
    :to="'/order/' + order_data.id"
  >
    <!-- <v-list-item-content>
      <v-list-item-title>{{order_data.lastName + ' ' + order_data.firstName}}</v-list-item-title>
      <v-list-item-subtitle>{{order_data.address}}</v-list-item-subtitle>
    </v-list-item-content> -->
    
    <v-list-item-content>
      <v-list-item-title>{{order_data.status}}</v-list-item-title>
      <v-list-item-subtitle>{{order_data.updateDate.replace('T',' / ').slice(0,18)}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'OrdersList-item',
  components: {},
  props: {
    order_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="css" scoped></style>
