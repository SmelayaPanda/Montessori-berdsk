<template>
  <!--Edit Image-->
  <v-dialog width="1000px" persistent v-model="editDialog"
            v-show="this.$store.getters.isAdmin"
            style="position: absolute; z-index: 51; margin-top: 70px"
  >
    <v-btn fab accent slot="activator" class="primary">
      <v-icon>image</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout>
          <v-flex>
            <v-btn raised class="primary" v-on:click="onPickFile">Новое изображение</v-btn>
            <input
              type="file"
              style="display: none;"
              ref="fileInput"
              accept="image/*"
              v-on:change="onFilePicked"
            >
          </v-flex>
        </v-layout>

        <!--Image preview-->
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <img :src="imageUrl" style="height: 350px">
          </v-flex>
        </v-layout>

        <!--Close & Save Buttons-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat class="secondary--text" v-on:click="editDialog = false">Закрыть</v-btn>
              <v-btn flat class="primary--text" v-on:click="onSaveChanges">Сохранить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>


      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'edit-material-image-dialog',
    props: ['material'],
    data: function () {
      return {
        editDialog: false,
        imageUrl: '',
        image: null
      }
    },
    methods: {
      onPickFile:
        function () {
          // this.$refs - gives for as all ref on this component
          this.$refs.fileInput.click()
        },
      onFilePicked:
        function (event) {
          const files = event.target.files // files[0] because it may be multiselect of files, take first
          const filename = files[0].name // name provided by native js
          if (filename.indexOf('.') <= 0) { // means what file have extension
            return alert('Please, pick a valid file')
          }
          const fileReader = new FileReader() // native js future for client file work
          fileReader.addEventListener('load', () => {
            this.imageUrl = fileReader.result
          })
          fileReader.readAsDataURL(files[0])
          this.image = files[0]
        },
      onSaveChanges:
        function () {
          if (this.imageUrl.trim() === '') {
            return
          }
          this.editDialog = false
          this.$store.dispatch('editMaterialImage', {
            id: this.material.id,
            image: this.image,
            imageUrl: this.imageUrl
          })
        }
    }
  }
</script>

<style scoped>

</style>
