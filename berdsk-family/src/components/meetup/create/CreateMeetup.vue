<template>
  <v-container class="mt-5">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="secondary--text">Создать новость</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form v-on:submit.prevent="onCreateMeetup">

          <!--Title-->
          <v-layout row>
            <v-flex xs12 sm10 offset-sm1>
              <v-text-field
                name="title"
                label="Заголовок"
                id="title"
                v-model="title"
                required
              >
              </v-text-field>
              <small>* допустимая длина заголовка 80 символов</small>
            </v-flex>
          </v-layout>

          <!--Description-->
          <v-layout row>
            <v-flex xs12 sm10 offset-sm1>
              <v-text-field
                name="description"
                label="Описание"
                id="description"
                v-model="description"
                required
                multi-line
              >
              </v-text-field>
              <small>** после создания, описание можно будет редактировать в полноценном текстовом редакторе</small>
            </v-flex>
          </v-layout>


          <!--Image-->
          <v-layout row class="mt-3">
            <v-flex xs12 sm10 offset-sm1>
              <v-btn raised class="primary" v-on:click="onPickFile">
                Изображение
                <v-icon class="pl-2">image</v-icon>
              </v-btn>
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
              <img :src="imageUrl" :height="this.imageHeight">
            </v-flex>
          </v-layout>

          <!--Create Meetup Button-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit"
              >
                Создать новость
              </v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'create-meetup',
    data:
      function () {
        return {
          title: '',
          imageUrl: '',
          image: null, // it will be raw image file uploaded by user,
          description: '',
          date: new Date() // default values
        }
      },
    computed: {
      formIsValid:
        function () {
          return this.title !== '' &&
            this.imageUrl !== '' &&
            this.description !== ''
        }
    },
    methods: {
      onCreateMeetup:
        function () {
          if (!this.formIsValid) {
            return
          }
          if (!this.image) {
            return
          }
          const meetUpData = {
            title: this.title,
            image: this.image,
            description: this.description,
            date: this.date
          }
          this.$store.dispatch('createMeetup', meetUpData)
          this.$router.push('/meetups')
        },
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
        }
    }
  }
</script>

<style scoped>

</style>
