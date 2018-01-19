<template>
  <!--persistent means on the top of the screen-->
  <v-dialog width="1000px" persistent v-model="editDialog">
    <v-btn fab accent slot="activator" class="primary">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <!--Dialog-->
        <!--Title-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h3 class="secondary--text">Редактировать новость</h3></v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-layout row wrap>
          <v-flex xs12>
            <!--Edit title-->
            <v-card-text>
              <v-text-field
                name="title"
                label="Заголовок"
                id="title"
                v-model="editedTitle"
                required></v-text-field>

              <!--Edit description-->
              <p>Описание</p>
              <vue-html-editor v-model="editedDescription"></vue-html-editor>
            </v-card-text>

          </v-flex>
        </v-layout>

        <!--Close & Save Buttons-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat class="secondary--text" v-on:click="editDialog = false">Закрыть</v-btn>
              <v-btn flat class="primary--text" v-on:click="onSaveChanges" :disabled="!validCheck">Сохранить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>

      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'edit-meetup-details-dialog',
    props: ['meetup'],
    data:
      function () {
        return {
          editDialog: false,
          editedTitle: this.meetup.title,
          editedDescription: this.meetup.description
        }
      },
    methods: {
      onSaveChanges:
        function () {
          this.editDialog = false
          this.$store.dispatch('updateMeetupData', {
            id: this.meetup.id,
            title: this.editedTitle,
            description: this.editedDescription
          })
        }
    },
    computed: {
      validCheck: function () {
        return this.editedTitle.trim() !== '' || this.editedDescription.trim() !== ''
      }
    }
  }
</script>

<style scoped>

</style>
