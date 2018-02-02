// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// main
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import {store} from './store'
import {sync} from 'vuex-router-sync'
// filters
import DateFilter from './filters/date'
import AdminDateFilter from './filters/admin_date'
import Snippet from './filters/snippet'
import LongSnippet from './filters/long_snippet'
// mixins
import {authMixin} from './mixins/autentication'
import {image} from './mixins/image'
import {isLoading} from './mixins/loading'
import {mailing} from './mixins/mailing'
// other
import * as firebase from 'firebase'
import AlertComp from './components/shared/Alert'
import Loader from './components/shared/Loader'
import {VueEditor} from 'vue2-editor'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import Notifications from 'vue-notification'
import MaskedInput from 'vue-masked-input'

Vue.use(VueScrollTo)
Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.mixin(authMixin)
Vue.mixin(image)
Vue.mixin(isLoading)
Vue.mixin(mailing)
Vue.filter('date', DateFilter)
Vue.filter('admin_date', AdminDateFilter)
Vue.filter('snippet', Snippet)
Vue.filter('long_snippet', LongSnippet)
Vue.component('masked-input', MaskedInput)
Vue.component('app-alert', AlertComp)
Vue.component('app-loader', Loader)
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

var config
if (process.env.NODE_ENV === 'development') {
  config = {
    apiKey: 'AIzaSyBVMnzJaWQOgViwK03kzya27sdyZNQ50o0',
    authDomain: 'montessori-dev.firebaseapp.com',
    databaseURL: 'https://montessori-dev.firebaseio.com',
    projectId: 'montessori-dev',
    storageBucket: 'montessori-dev.appspot.com',
    messagingSenderId: '547079671351'
  }
} else if (process.env.NODE_ENV === 'production') {
  config = {
    apiKey: 'AIzaSyAcvodoN1hG6n2ms3uztMoG-7gH36jKMgo',
    authDomain: 'montessori-berdsk.firebaseapp.com',
    databaseURL: 'https://montessori-berdsk.firebaseio.com',
    projectId: 'montessori-berdsk',
    storageBucket: 'montessori-berdsk.appspot.com',
    messagingSenderId: '690115880407'
  }
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
