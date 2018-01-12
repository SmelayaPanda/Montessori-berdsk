// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import BackgroundSlideShow from './components/home/BackgroundSlideShow'
import Toolbar from './components/Toolbar'

import App from './App'
import router from './router'

Vue.component('app-background-slide-show', BackgroundSlideShow)
Vue.component('app-toolbar', Toolbar)

Vue.use(Vuetify, {
  theme: {
    primary: '#34B334',
    secondary: '#707b82',
    accept: '#19be6b',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
