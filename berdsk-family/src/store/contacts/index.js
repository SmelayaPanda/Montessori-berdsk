import * as firebase from 'firebase'

export default {
  // State ---------------------------------------------------
  state: {
    contacts: {
      phone: '',
      address: '',
      email: ''
    }
  },
  // Mutations ---------------------------------------------------
  mutations: {
    setContacts:
      (state, payload) => {
        state.contacts.phone = payload.phone
        state.contacts.address = payload.address
        state.contacts.email = payload.email
      }
  },
  // Actions ---------------------------------------------------
  actions: {
    editContacts:
      ({commit}, payload) => {
        commit('setLoading', true)
        commit('setContacts', payload)
        firebase.database().ref('contacts').update(payload)
          .then(
            () => {
              commit('setLoading', false)
            })
          .catch(
            error => {
              commit('setLoading', false)
              console.log(error)
            })
      },
    loadContacts:
      ({commit}) => {
        commit('setLoading', true)
        firebase.database().ref('contacts').once('value')
          .then((data) => {
            commit('setLoading', false)
            commit('setContacts', data.val())
          })
          .catch(
            error => {
              commit('setLoading', false)
              console.log(error)
            })
      }
  },
// Getters  ---------------------------------------------------
  getters: {
    contacts:
      state => {
        return state.contacts
      }
  }
}
