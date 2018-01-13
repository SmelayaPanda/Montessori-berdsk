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
import EditMeetupDateDialog from './components/meetup/edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/meetup/edit/EditMeetupTimeDialog'
import RegistrationDialog from './components/meetup/registration/RegistrationDialog'
// register global filter
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegistrationDialog)

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
  }
})
