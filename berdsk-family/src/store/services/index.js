import * as firebase from 'firebase'

export default {
  // State ---------------------------------------------------
  state: {
    serviceGroups: {},
    serviceSubGroups: {},
    signUpMessages: []
  },
  // Mutations ---------------------------------------------------
  mutations: { // to change state
    updateServiceGroups:
      (state, payload) => {
        state.serviceGroups = payload
      },
    updateServiceSubGroups:
      (state, payload) => {
        state.serviceSubGroups = payload
      },
    updateSignUpMessages:
      (state, payload) => {
        state.signUpMessages = payload
      }
  },
  // Actions ---------------------------------------------------
  actions: { // specify the mutation
    loadServiceGroups:
      ({commit}) => {
        commit('setLoading', true)
        firebase.database().ref('services/serviceGroups').once('value')
          .then((data) => {
            commit('setLoading', false)
            commit('updateServiceGroups', data.val())
          })
          .catch(
            error => {
              commit('setLoading', false)
              console.log(error)
            })
      },
    addServiceGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceGroups = getters.serviceGroups
        firebase.database().ref('services/serviceGroups').push(payload)
          .then((data) => {
            serviceGroups[data.key] = payload
            commit('updateServiceGroups', serviceGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    editServiceGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceGroups = getters.serviceGroups
        firebase.database().ref('services/serviceGroups').child(payload.id).set(payload.name)
          .then(() => {
            serviceGroups[payload.id] = payload.name
            commit('updateServiceGroups', serviceGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    deleteServiceGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceGroups = getters.serviceGroups
        firebase.database().ref('services/serviceGroups').child(payload).remove()
          .then(() => {
            delete serviceGroups[payload]
            commit('updateServiceGroups', serviceGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
        firebase.database().ref('services/serviceSubGroups').orderByChild('parentId').equalTo(payload)
          .on('child_added', (snapshot) => {
            console.log('Child deleted: ' + snapshot.ref)
            snapshot.ref.remove()
          })
      },
    // Sub Group action
    loadServiceSubGroups:
      ({commit}) => {
        commit('setLoading', true)
        firebase.database().ref('services/serviceSubGroups').once('value')
          .then((data) => {
            commit('setLoading', false)
            commit('updateServiceSubGroups', data.val())
          })
          .catch(
            error => {
              commit('setLoading', false)
              console.log(error)
            })
      },
    addServiceSubGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceSubGroups = getters.serviceSubGroups
        firebase.database().ref('services/serviceSubGroups').push(payload)
          .then((data) => {
            serviceSubGroups[data.key] = payload
            commit('updateServiceSubGroups', serviceSubGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    editServiceSubGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceSubGroups = getters.serviceSubGroups
        let updateObj = {
          parentId: payload.parentId,
          title: payload.title,
          description: payload.description,
          coast: payload.coast,
          schedule: payload.schedule
        }
        firebase.database().ref('services/serviceSubGroups').child(payload.id).update(updateObj)
          .then(() => {
            serviceSubGroups[payload.id] = updateObj
            commit('updateServiceSubGroups', serviceSubGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    deleteServiceSubGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceSubGroups = getters.serviceSubGroups
        firebase.database().ref('services/serviceSubGroups').child(payload).remove()
          .then(() => {
            delete serviceSubGroups[payload]
            commit('updateServiceSubGroups', serviceSubGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    addSignUpMessages:
      ({commit, getters}, payload) => {
        let messages = []
        messages = getters.serviceSignUpMessages
        firebase.database().ref('signUpMessages').push(payload)
          .then(() => {
            messages.push(payload)
            commit('updateSignUpMessages', payload)
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
            let dataObj = data.val()
            let messages = []
            for (let msg in dataObj) {
              messages.push(dataObj[msg])
            }
            commit('setLoading', false)
            commit('updateSignUpMessages', messages)
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
    serviceGroups:
      state => {
        return state.serviceGroups
      },
    serviceSubGroups:
      state => {
        return state.serviceSubGroups
      },
    serviceSignUpMessages:
      state => {
        return state.signUpMessages
      }
  }
}
