import * as firebase from 'firebase'

export default {
  // State ---------------------------------------------------
  state: {
    phone: ''
  },
  // Mutations ---------------------------------------------------
  mutations: {
    setPhone:
      (state, payload) => {
        state.phone = payload
      }
  },
  // Actions ---------------------------------------------------
  actions: {
    editPhone:
      ({commit}, payload) => {
        commit('setLoading', true)
        commit('setPhone', payload)
        firebase.database().ref('contacts').update({phone: payload})
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
    loadPhone:
      ({commit}) => {
        console.log('loading')
        commit('setLoading', true)
        firebase.database().ref('contacts/phone').once('value')
          .then((data) => {
            commit('setLoading', false)
            console.log(data.val())
            commit('setPhone', data.val())
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
    phone:
      state => {
        return state.phone
      }
  }
}
