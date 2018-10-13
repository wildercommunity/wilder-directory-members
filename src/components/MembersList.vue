<template>
  <div v-if="!loading">
    <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="user in users">
      <MemberCard  :user="user"/>
      </v-flex>
    </v-layout>
    </div>
  </div>
</template>

<script>
import MemberCard from './MemberCard.vue'
export default {
    name: 'MembersList',
    props: ['users','loading'],
    components: {
      MemberCard,
    },
    computed: {
      binding () {
        const binding = {}
        if (this.$vuetify.breakpoint.xs) binding.column = true
        return binding
      },
    },
  }
</script>
