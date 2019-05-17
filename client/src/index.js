/* eslint-disable no-console */
'use strict'

import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import App from './App.vue'
import store from './store/index'
import router from './routes/router'

import 'vuetify/dist/vuetify.min.css'

const vuetifyOptions = {
  options: {
    customProperties: true
  },
  theme: {
    primary: colors.lightBlue,
    secondary: colors.pink,
    accent: colors.amber,
    error: colors.red,
    info: colors.lightGreen,
    success: colors.green,
    warning: colors.yellow
  }
}

Vue.config.productionTip = false

Vue.use(Vuetify, vuetifyOptions)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')



if (module.hot) {
  module.hot.accept()
}
