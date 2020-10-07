<template>
  <v-list-item
        
      >
         <v-list-item-avatar>
          <v-img :src="kid_data.photo"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
          <v-list-item-title v-text="kid_data.last_name + '  '+ kid_data.first_name"></v-list-item-title>
        </v-list-item-content>

        <v-spacer></v-spacer>

        <v-chip
          class="ma-2"
          color=""
          label
          text-color=""

        > {{kid_data.tickets.tickets}}</v-chip>

        <v-spacer></v-spacer>

        <v-btn class="mr-2"
        depressed
        small
        color="green"
        :loading="loading || loading"
        @click.once="toClickHere"
        >Here</v-btn>

        <v-btn
        depressed
        small
        color="error"
        :loading="loading || loading"
        @click.once="toClickAbsent"
        >Absent</v-btn>
       
      </v-list-item>
</template>

<script>
export default {
  name: 'Kid',
  components: {},
  props: {
    kid_data: {
      type: Object,
      default() {
        return {};
      },
    },
    
  },
  data() {
    return {
      today : new Date().toISOString().substr(0, 10),
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed:{
    loading() {
      return this.$store.getters.LOADING;
    }
  },
  methods: {
    toClickHere() {
      const payload = {
        id: this.kid_data.tickets.id,
        fullName: this.kid_data.last_name+ ' ' +this.kid_data.first_name,
        tickets: this.kid_data.tickets.tickets-1,
        isHere: true
      };
      // console.log(payload)
      this.$store.dispatch('USE_TICKET_API', payload)
        .then(() => {
          this.$store.dispatch('VISIT_LOG_API', payload)
        })
        .catch((error) => {
              console.log(error);
            });
    },
    toClickAbsent() {
      const payload = {
        id: this.kid_data.visitsLog.id,
        fullName: this.kid_data.last_name+ ' ' +this.kid_data.first_name,
        isHere: false
        
      };
      this.$store.dispatch('USE_TICKET_API', payload)
        .then(() => {
          this.$store.dispatch('VISIT_LOG_API', payload)
        })
        .catch((error) => {
              console.log(error);
            });
    }
  }
}
</script>

<style lang="css" scoped></style>
