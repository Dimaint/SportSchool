<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-card class="mx-auto my-12" max-width="374">
          <v-img height="250" :src="trainer.photo"></v-img>

          <v-card-title>{{ trainer.name }}</v-card-title>

          <!-- <v-card-text>
            <v-row>
              <div class="grey--text ml-4">{{ kid.birthday }}</div>
            </v-row>

            <div class="my-4 subtitle-1">Разряд: {{ kid.sportCategory }}</div>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Родители</v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ kid.parents.name1 + "  " + kid.parents.phone1 }}
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  {{ kid.parents.name2 + "  " + kid.parents.phone2 }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text> -->

          <v-divider class="mx-4"></v-divider>

          

          <v-card-text>
            
          </v-card-text>
        </v-card>
        <v-list>
          <v-list-item
            v-for="kid in kids"
            :key="kid.key"
            :to="'/kid/' + kid.id"
          >
            <v-list-item-avatar>
              <v-img :src="kid.photo"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                v-text="kid.last_name + '  ' + kid.first_name"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "v-trainer",
  components: {},
  props: ["id"],
  data() {
    return {};
  },
  mounted() {
    this.GET_TRAINERS_FROM_API();
    this.GET_KIDS_FROM_FROM_API();
  },
  beforeDestroy() {},
  methods: {
    ...mapActions(["GET_TRAINERS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["KIDS_BY_TRAINER_ID", "TRAINER_BY_ID"]),

    trainer() {
      const id = +this.$route.params.id;
      return this.TRAINER_BY_ID(id);
    },
    kids() {
      const id = +this.$route.params.id;
      return this.KIDS_BY_TRAINER_ID(id);
    },
  },
};
</script>

<style lang="" scoped></style>
