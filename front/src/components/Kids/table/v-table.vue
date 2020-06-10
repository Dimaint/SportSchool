<template>
    <div class='v-table'>
        <v-list >
      
               <v-list-item
        v-for="kid in kids_data"
        :key="kid.key"
        :to="'/kid/' + kid.id"
      >
         <v-list-item-avatar>
          <v-img :src="kid.photo"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
          <v-list-item-title v-text="kid.last_name"></v-list-item-title>
        </v-list-item-content>

       
      </v-list-item>
      
    </v-list>
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