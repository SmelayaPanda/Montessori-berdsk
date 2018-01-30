import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './contacts/index'
import meetup from './meetup/index'
import user from './user/index'
import services from './services/index'
import materials from './materials/index'
import shared from './shared/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    contacts: contacts,
    meetup: meetup,
    user: user,
    services: services,
    shared: shared,
    materials: materials
  }
})
