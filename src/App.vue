<template>
  <div id="app">
    <v-app id="inspire">
        <v-layout >
            <v-flex
                    xs2 offset-xs5
                    md2 offset-md5
                    lg2 offset-lg5>

                <img :src="logoSrc" style="width:100%"/>
            </v-flex>
        </v-layout>

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
import logo from './assets/logo.png'
export default {
    name: 'app',
    data() {
      return {
        users: [],
        loading: true,
        logoSrc: logo,
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
