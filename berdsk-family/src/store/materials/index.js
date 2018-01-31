import * as firebase from 'firebase'

export default {
  state: {
    materials: []
  },
  mutations: {
    updateMaterials:
      (state, payload) => {
        state.materials = payload
      }
  },
  actions: {
    loadMaterials:
      ({commit}) => {
        commit('setLoading', true)
        firebase.database().ref('materials').once('value')
          .then(
            data => {
              const materials = []
              const obj = data.val()
              for (let key in obj) {
                materials.push({
                  id: key,
                  title: obj[key].title,
                  imageUrl: obj[key].imageUrl,
                  description: obj[key].description,
                  order: obj[key].order
                })
              }
              commit('updateMaterials', materials)
              commit('setLoading', false)
            })
          .catch(
            error => {
              console.log(error)
              commit('setLoading', false)
            })
      },
    addMaterial:
      ({commit, getters}, payload) => {
        let materials = []
        materials = getters.materials
        const material = {
          title: payload.title,
          description: payload.description,
          order: payload.order
        }
        let imageUrl
        let key
        firebase.database().ref('materials').push(material)
          .then(
            data => {
              key = data.key
              return key
            })
          .then(
            key => {
              return firebase.storage().ref('materials/' + key).put(payload.image)
            })
          .then(
            fileData => {
              imageUrl = fileData.metadata.downloadURLs[0]
              return firebase.database().ref('materials').child(key).update({imageUrl: imageUrl})
            })
          .then(
            () => {
              materials.push({
                ...material,
                imageUrl: imageUrl,
                storageId: key
              })
              commit('updateMaterials', materials)
            })
          .catch(
            error => {
              console.log(error)
            })
      },
    editMaterialDescription:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let materials = []
        materials = getters.materials
        const updateObj = {}
        updateObj.id = payload.id
        updateObj.title = payload.title
        updateObj.order = payload.order
        updateObj.description = payload.description
        firebase.database().ref('materials').child(payload.id).update(updateObj)
          .then(() => {
            materials.findIndex(el => {
              if (el.id === payload.id) {
                el.title = payload.title
                el.order = payload.order
                el.description = payload.description
              }
            })
            commit('setLoading', false)
            commit('updateMaterials', materials)
          })
          .catch(
            error => {
              console.log(error)
              commit('setLoading', false)
            })
      },
    editMaterialImage:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let materials = []
        materials = getters.materials
        firebase.storage().ref('materials/' + payload.id).put(payload.image)
          .then(
            fileData => {
              let imageUrl = fileData.metadata.downloadURLs[0]
              console.log('New Image uploaded to storage.')
              firebase.database().ref('materials').child(payload.id).update({imageUrl: imageUrl})
              materials.findIndex(el => {
                if (el.id === payload.id) {
                  el.imageUrl = imageUrl
                }
              })
              commit('updateMaterials', materials)
              commit('setLoading', false)
            })
          .catch((error) => {
            console.log(error)
            commit('setLoading', false)
          })
      },
    deleteMaterial:
      ({commit, getters}, payload) => {
        commit('setLoading', true)
        let materials = []
        materials = getters.materials
        firebase.storage().ref('materials/' + payload)
          .delete()
          .then(() => console.log('Image was deleted!'))
          .catch((error) => console.log(error))
        firebase.database().ref('materials').child(payload)
          .remove()
          .then(
            () => {
              console.log('Description successfully deleted!')
              materials = materials.filter(function (obj) {
                return obj.id !== payload
              })
              commit('updateMaterials', materials)
              commit('setLoading', false)
            })
          .catch(
            error => {
              console.log(error)
              commit('setLoading', false)
            })
      }
  },
  getters: {
    materials:
      state => {
        return state.materials
      }
  }
}
