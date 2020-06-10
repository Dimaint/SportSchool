<template>
  <v-container fluid>
    <v-layout row>
      <v-flex x12>
     <v-table :kids_data="KIDS"></v-table>
     
  </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import vTable from "./table/v-table";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "KidsList",

  components: {
    vTable,
  },
  data: () => ({
    
  }),
  computed: {
    ...mapGetters(["KIDS"]),
  },
  methods: {
    ...mapActions(["GET_KIDS_FROM_API"]),
  },
  mounted() {
    this.GET_KIDS_FROM_API();
  },
};
</script>