<template>
    <v-card >
        <v-card-text style="overflow: auto">

            <v-avatar
              color="grey lighten-4"
              :size="80"
              style="float:left;"

            >
              <img :src="user.picture">
            </v-avatar>
            <div style="float:left" class="pa-3">
                <span class="headline">
                    {{getUserMetaData(user).firstName}}
                    {{getUserMetaData(user).lastName}}
                </span>
                <br/>
                {{user.email}}
            </div>
       </v-card-text>

</span>
    </v-card>
</template>



<script>
export default {
  name: 'MemberCard',
  props: ['user'],
    methods: {
        getUserMetaData: function (user) {
           if(user.user_metadata) {
               return user.user_metadata
           } else {
               return {}
           }
        }
    }
};
</script>