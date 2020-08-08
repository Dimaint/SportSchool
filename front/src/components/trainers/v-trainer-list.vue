<template>
  <v-trainer-list class="trainers-list">
    <v-trainer-list-item
      v-for="item in trainers_data"
      :key="item.id"
      :trainer_data="item"
      
    />
  </v-trainer-list>
</template>

<script>
import vTrainerList from "./v-trainer-list"
import vTrainerListItem from "./v-trainer-list-item"

export default {
  name: "v-trainers-list",
  components: {
    vTrainerList,
    vTrainerListItem
  },
  props: {
    trainers_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="css"></style>
