<template>
  <v-container class="mt-5"
               v-show="this.isAdmin">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="secondary--text">Добавить новый материал</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form v-on:submit.prevent="onCreateMaterial">

          <!--Title-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Заголовок"
                id="title"
                v-model="title"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>


          <!--Order-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="order"
                label="Приоритет (чем меньше число, тем выше на странице)"
                id="order"
                v-model="order"
                required
                type="number"
              >
              </v-text-field>
            </v-flex>
          </v-layout>


          <!--Description-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Описание"
                id="description"
                v-model="description"
                required
                multi-line
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <small class="grey-text">** длина заголовка не должна превышать 80 символов</small>
              <br>
              <small class="grey-text">*** длина описания не должна превышать 400 символов</small>
            </v-flex>
          </v-layout>

          <!--Image-->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
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
              <img :src="imageUrl" :height="imageHeight">
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
                Добавить
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
    name: 'create-material',
    data:
      function () {
        return {
          title: '',
          imageUrl: '',
          image: null, // it will be raw image file uploaded by user,
          description: '',
          order: 1
        }
      },
    computed: {
      formIsValid:
        function () {
          return this.title !== '' &&
            this.imageUrl !== '' &&
            this.description !== '' &&
            this.order !== ''
        },
      imageHeight:
        function () {
          switch (this.$vuetify.breakpoint.name) {
            case 'xs':
              return '150px'
            case 'sm':
              return '200px'
            case 'md':
              return '250px'
            case 'lg':
              return '300px'
            case 'xl':
              return '400px'
          }
        }
    },
    methods: {
      onCreateMaterial:
        function () {
          if (!this.formIsValid) {
            return
          }
          if (!this.image) {
            return
          }
          const materialData = {
            title: this.title,
            image: this.image,
            description: this.description,
            order: this.order
          }
          this.$store.dispatch('addMaterial', materialData)
          this.$router.push('/materials')
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
