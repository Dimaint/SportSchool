<template>
    <div class='v-table'>
        <v-list >
      
               <v-list-item
        v-for="item in kids_data"
        :key="item.key"
        :to="'/kid/' + item.id"
      >
        
        <v-list-item-content>
          <v-list-item-title v-text="item.last_name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
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