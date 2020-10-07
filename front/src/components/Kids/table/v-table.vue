<template>
    <div class='v-table'>
      <v-container>
        <v-row class="justify-center">
      
        <v-list width="1000">
      
               <kid
        v-for="kid in kids_data"
        :key="kid.key"
        :kid_data="kid"
        :to="'/kid/' + kid.id"
      >
         
       
      </kid>
      
    </v-list>
        </v-row>
    </v-container>
    </div>
</template>

<script>
import kid from './Kid'

export default {
    name: "v-table",
    components: {
      kid
    },
    props: {
        kids_data: {
            type:Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
      
    },
}
</script>