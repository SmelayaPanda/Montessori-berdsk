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
        // fetch meetup data
        firebase.database().ref('materials').once('value')
          .then(
            data => {
              const materials = []
              const obj = data.val() // .val() method of promise ?
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
              commit('updateMaterials', {
                ...material,
                imageUrl: imageUrl,
                storageId: key
              })
            })
          .catch(
            error => {
              console.log(error)
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
