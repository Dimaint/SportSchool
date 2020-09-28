<template>
    <div class='v-table'>
      <v-container>
        <v-row class="justify-center">
      
        <v-list width="1000">
      
               <v-list-item
        v-for="kid in kids_data"
        :key="kid.key"
        :to="'/kid/' + kid.id"
      >
         <v-list-item-avatar>
          <v-img :src="kid.photo"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
          <v-list-item-title v-text="kid.last_name + '  '+ kid.first_name"></v-list-item-title>
        </v-list-item-content>

        <v-spacer></v-spacer>

        <v-chip
          class="ma-2"
          color=""
          label
          text-color=""

        > {{kid.tickets}}</v-chip>

        <v-spacer></v-spacer>

        <v-btn class="mr-2" depressed small color="green">Here</v-btn>
        <v-btn depressed small color="error">Absent</v-btn>
       
      </v-list-item>
      
    </v-list>
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
    name: "v-table",
    props: {
        kids_data: {
            type:Array,
            default: () => {
                return []
            }
        }
    }
}
</script>