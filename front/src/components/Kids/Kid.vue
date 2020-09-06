<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <v-img
            height="250"
            :src="kid.photo"
          ></v-img>

          <v-card-title>{{
            kid.last_name + " " + kid.first_name
          }}</v-card-title>

          <v-card-text>
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
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Группа</v-card-title>

          <v-card-text>
            <v-chip-group
              
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>{{kid.group.name}}</v-chip>

              <v-chip>{{kid.group. description}}</v-chip>

              <!-- <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip> -->
            </v-chip-group>
          </v-card-text>

          <v-sheet height="400">
            <v-calendar
              ref="calendar"
              v-model="value"
              :type="type"
              :now="today"
              :weekdays="kid.group.days"
              :events="events"
              :event-overlap-mode="mode"
              :event-overlap-threshold="30"
              color="primary"
              
            ></v-calendar>
          </v-sheet>

       
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "Kid",
  props: ["id"],
  data() {
    return {
      today : new Date().toISOString().substr(0, 10),
    }
  },
  computed: {
    ...mapGetters(['KID_BY_ID']),
    
    kid() {
     
      const id = +this.$route.params.id;
      return this.KID_BY_ID(id);
    },
  },
  methods: {
    
  },
};
</script>
