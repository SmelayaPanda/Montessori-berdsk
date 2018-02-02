import * as firebase from 'firebase'

export default {
  state: {
    signUpMessages: {}
  },
  mutations: {
    updateSignUpMessages:
      (state, payload) => {
        state.signUpMessages = payload
      }
  },
  actions: {
    addSignUpMessages:
      ({commit, getters}, payload) => {
        let messages = getters.serviceSignUpMessages
        firebase.database().ref('signUpMessages').push(payload)
          .then((data) => {
            messages[data.key] = payload
            commit('updateSignUpMessages', messages)
          })
          .catch(error => {
            console.log(error)
          })
      },
    loadSignUpMessages:
      ({commit}) => {
        commit('setLoading', true)
        firebase.database().ref('signUpMessages').once('value')
          .then((data) => {
            commit('setLoading', false)
            commit('updateSignUpMessages', data.val())
          })
          .catch(
            error => {
              console.log(error)
              commit('setLoading', false)
            })
      },
    markAsRead:
      ({commit, getters}, payload) => {
        let messages = getters.serviceSignUpMessages
        firebase.database().ref('signUpMessages').child(payload.id).update({status: payload.status})
          .then(() => {
            messages[payload.id].status = payload.status
            commit('updateSignUpMessages', messages)
          })
          .catch(error => {
            console.log(error)
          })
      }
  },
  getters: {
    serviceSignUpMessages:
      state => {
        return state.signUpMessages
      }
  }
}
