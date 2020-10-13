<template>
  <v-card
    max-width="1024"
    class="mx-auto my-5"

  >
  <v-container>
    <v-row>
    <v-btn
      class="ma-2"
      outlined
      x-small
      fab
      color="indigo"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-card-title>{{order_data.lastName + ' ' + order_data.firstName}}</v-card-title>
    </v-row>

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-phone
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{order_data.phone}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-email
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{order_data.email}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-map-marker
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{order_data.address}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">
            mdi-message-text
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{order_data.message}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Product Name
          </th>
          <th class="text-left">
            Size
          </th>
          <th class="text-left">
            Price
          </th>
          <th class="text-left">
            Quantity
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in order_data.cart"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.size }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-list>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'OrderDetail',
  components: {},
  props: ["id"],
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapActions(["GET_ORDERS_FROM_API"]),
    ...mapGetters(["ORDER_BY_ID"]),

    order_data() {
      const id = +this.$route.params.id;
      return this.ORDER_BY_ID(id);
    },
  },
  mounted() {
    this.GET_ORDERS_FROM_API;
  },
  beforeDestroy() {},
}
</script>

<style lang="css" scoped></style>
