// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import {store} from './store'
import DateFilter from './filters/data'
import * as firebase from 'firebase'
import AlertComp from './components/shared/Alert'
import EditMeetupDetailsDialog from './components/meetup/edit/EditMeetupDetailsDialog'
import EditMeetupImageDialog from './components/meetup/edit/EditMeetupImageDialog'
// register global filter
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-image-dialog', EditMeetupImageDialog)

Vue.use(Vuetify, {
  theme: {
    primary: '#bced96',
    secondary: '#faaf94',
    accept: '#19be6b',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyAcvodoN1hG6n2ms3uztMoG-7gH36jKMgo',
  authDomain: 'montessori-berdsk.firebaseapp.com',
  databaseURL: 'https://montessori-berdsk.firebaseio.com',
  projectId: 'montessori-berdsk',
  storageBucket: 'montessori-berdsk.appspot.com',
  messagingSenderId: '690115880407'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  created: function () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(
      user => {
        if (user) {
          this.$store.dispatch('autoSignIn', user)
          this.$store.dispatch('fetchUserData')
        }
      })
    this.$store.dispatch('loadMeetups')
  }
})
