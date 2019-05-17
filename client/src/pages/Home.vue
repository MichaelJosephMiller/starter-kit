<template>
  <v-container id='home' grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <h1>Hello from Starter Kit</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    name: 'home',
    components: {},
    data() {
      return {
      }
    },
    mounted: function() {
    },
    watch: {
    },
    computed: {
      ...mapGetters([]),
    },
    methods: {
      ...mapActions([]),
    }
  }
</script>

<style scoped>
</style>
