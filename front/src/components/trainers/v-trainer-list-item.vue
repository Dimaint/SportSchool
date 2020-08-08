<template>
  <v-card
    class="mx-auto my-12"
    max-width="400"
    :to="'/trainer/' + trainer_data.id"
    
  >
    <v-img
      :src="trainer_data.photo"
      height="250px"
    ></v-img>

    <v-card-title>
      {{trainer_data.name}}
    </v-card-title>

    <v-card-subtitle>
      {{trainer_data.phone}}
    </v-card-subtitle>

        
  </v-card>
</template>

<script>
export default {
  name: 'v-trainerts-list-item',
  components: {},
  props: {
    trainer_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="" scoped></style>
