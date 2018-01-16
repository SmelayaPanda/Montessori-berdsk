import * as firebase from 'firebase'

export default {
  // State ---------------------------------------------------
  state: {
    serviceGroups: {},
    serviceSubGroups: {}
  },
  // Mutations ---------------------------------------------------
  mutations: { // to change state
    setServiceGroups:
      (state, payload) => {
        state.serviceGroups = payload
      },
    setServiceSubGroups:
      (state, payload) => {
        state.serviceSubGroups = payload
      },
    updateServiceGroup:
      (state, payload) => {
        state.serviceSubGroups[payload.id] = payload.name
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
            commit('setServiceGroups', data.val())
          })
          .catch(
            error => {
              commit('setLoading', false)
              console.log(error)
            })
      },
    loadServiceSubGroups:
      ({commit}) => {
        commit('setLoading', true)
        firebase.database().ref('services/serviceSubGroups').once('value')
          .then((data) => {
            commit('setLoading', false)
            commit('setServiceSubGroups', data.val())
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
            commit('setServiceGroups', serviceGroups)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    editServiceGroup:
      ({commit}, payload) => {
        commit('setLoading', true)
        firebase.database().ref('services/serviceGroups').child(payload.id).set(payload.name)
          .then(() => {
            commit('updateServiceGroup', payload)
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    deleteServiceGroup:
      ({commit}, payload) => {
        commit('setLoading', true)
        firebase.database().ref('services/serviceGroups').child(payload).remove()
          .then(() => {
            console.log('Group deleted!')
          })
          .catch(error => {
            console.log(error)
          })
        firebase.database().ref('services/serviceSubGroups').orderByChild('parentId').equalTo(payload)
          .on('child_added', (snapshot) => {
            console.log('Child deleted: ' + snapshot.ref)
            snapshot.ref.remove()
          })
      },
    addServiceSubGroup:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let serviceSubGroups = getters.serviceSubGroups
        firebase.database().ref('services/serviceSubGroups').push(payload)
          .then((data) => {
            serviceSubGroups[data.key] = payload
            commit('setServiceSubGroups', serviceSubGroups)
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
        let updateObj = {
          parentId: payload.parentId,
          title: payload.title,
          description: payload.description,
          coast: payload.coast,
          schedule: payload.schedule
        }
        firebase.database().ref('services/serviceSubGroups').child(payload.id).update(updateObj)
          .then(() => {
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    deleteServiceSubGroup:
      ({commit}, payload) => {
        commit('setLoading', true)
        firebase.database().ref('services/serviceSubGroups').child(payload).remove()
          .then(() => {
            console.log('Service deleted')
            commit('setLoading', false)
          })
          .catch(error => {
            console.log(error)
            commit('setLoading', false)
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
      }
  }
}
