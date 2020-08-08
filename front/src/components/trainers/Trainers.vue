<template>
  <v-container class="Trainers" fluid>
    <v-row class="justify-center">
      <h1>Trainers</h1>
    </v-row>
    <v-row 
    align="center"
    justify="center">
      <v-trainer-list
        :trainers_data="TRAINERS"
      />
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import vTrainerList from './v-trainer-list'

export default {
  name: "Trainers",
  components: {
    vTrainerList
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(['GET_TRAINERS_FROM_API'])
  },
  computed: {
    ...mapGetters(['TRAINERS'])
  },
  mounted() {
    this.GET_TRAINERS_FROM_API();
  },
};
</script>

<style lang="" scoped></style>
