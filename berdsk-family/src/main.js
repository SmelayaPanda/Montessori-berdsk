// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import {store} from './store'
import {sync} from 'vuex-router-sync'
import DateFilter from './filters/date'
import AdminDateFilter from './filters/admin_date'
import Snippet from './filters/snippet'
import LongSnippet from './filters/long_snippet'
import * as firebase from 'firebase'
import AlertComp from './components/shared/Alert'
import Loader from './components/shared/Loader'
import EditMeetupDetailsDialog from './components/meetup/edit/EditMeetupDetailsDialog'
import EditMeetupImageDialog from './components/meetup/edit/EditMeetupImageDialog'
import {VueEditor} from 'vue2-editor'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import Notifications from 'vue-notification'

// register global filter
Vue.use(VueScrollTo)
Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.filter('date', DateFilter)
Vue.filter('admin_date', AdminDateFilter)
Vue.filter('snippet', Snippet)
Vue.filter('long_snippet', LongSnippet)
Vue.component('app-alert', AlertComp)
Vue.component('app-loader', Loader)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-image-dialog', EditMeetupImageDialog)
Vue.component('vue-html-editor', VueEditor)

const unsync = sync(store, router) // Sync vue-router's current $route as part of vuex store's state.
unsync()

Vue.use(Vuetify, {
  theme: {
    primary: '#bced96',
    secondary: '#faaf94',
    accept: '#19be6b',
    accent: '#8c9eff',
    error: '#b71c1c',
    readable: '#333'
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
    this.$store.dispatch('loadServiceGroups')
    this.$store.dispatch('loadServicesMainCoast')
    this.$store.dispatch('loadSignUpMessages')
    this.$store.dispatch('loadServiceSubGroups')
    this.$store.dispatch('loadMaterials')
    this.$store.dispatch('loadContacts')
  }
})
