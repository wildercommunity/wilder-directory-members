<template>
  <div id="app">
    <v-app id="inspire">
        <v-layout v-if="loading" >
          <v-flex xs12 text-xs-center>
            <v-progress-circular
              :width="8"
              :size="60"
              color="teal"
              indeterminate
            ></v-progress-circular>
          </v-flex>
        </v-layout>
        <MembersList :users="users" :loading="loading" />
    </v-app>
  </div>
</template>

<script>
import MembersList from './components/MembersList.vue'
import axios from 'axios'
export default {
    name: 'app',
    data() {
      return {
        users: [],
        loading: true
      }
    },
    components: {
      MembersList,
    },
    computed: {
      binding () {
        const binding = {}
        if (this.$vuetify.breakpoint.xs) binding.column = true
        return binding
      },
    },
    created() {
    console.log('created');
      axios.get('/')
        .then(response => {
          this.loading = false
          this.users = response.data
          console.log(this.users)
        })

    }
  }
</script>
