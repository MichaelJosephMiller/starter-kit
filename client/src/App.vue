<template>
  <v-app id="app" dark>
    <v-navigation-drawer app clipped mobile-break-point=960 v-model='drawer'>
      <v-list>
        <div v-for="route in routes" :key='route.name'>
          <v-list-tile v-if='route.name' :to='route.path'>
            <v-list-tile-content class='subheading'>{{ route.name }}</v-list-tile-content>
          </v-list-tile>
          <v-divider/>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app clipped-left id='toolbar'>
      <v-toolbar-side-icon class='hidden-md-and-up' @click='drawer = !drawer'></v-toolbar-side-icon>
      <v-toolbar-title>Starter Kit &mdash; {{$route.name}}</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app id='footer'>
      <div>{{title}} &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  const mapActions = () => import('vuex')

  export default {
    name: 'app',
    components: {
    },
    data() {
      return {
        routes: this.$router.options.routes,
        title: this.$router.options.documentTitle,
        drawer: null
      }
    },
    mounted: function () {
      this.$vuetify.goTo(0)
    },
    methods: {
      ...mapActions([])
    }
  }
</script>

<style scoped>
  #footer {
    padding: 0 10px;
  }
</style>
