<template>
  <div class='orders'>
      <v-container>
        <v-row class="justify-center">
          <ordersList
            :orders_data="ORDERS"
          >
          </ordersList>
        </v-row>
    </v-container>
    </div>
</template>

<script>

import ordersList from './OrdersList'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Orders',
  components: {
    ordersList,
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(["ORDERS"]),
  },
  methods: {
    ...mapActions(["GET_ORDERS_FROM_API"]),
  },
  mounted() {
    this.GET_ORDERS_FROM_API();
  },
}
</script>

<style lang="css" scoped></style>
