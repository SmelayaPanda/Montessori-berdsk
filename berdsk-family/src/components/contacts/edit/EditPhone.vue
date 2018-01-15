<template>
  <v-dialog width="250px" persistent v-model="editDialog">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <!--Title-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h3 class="secondary--text">Редактировать телефон</h3></v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <!--Edit title-->
            <v-card-text>
              <v-text-field
                name="phone"
                label="Телефон"
                id="phone"
                v-model="editPhone"
                required
              >
              </v-text-field>
            </v-card-text>

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
    name: 'edit-phone',
    props: ['phone'],
    data: function () {
      return {
        editDialog: false,
        editPhone: ''
      }
    },
    methods: {
      onSaveChanges:
        function () {
          let newPhone = this.editPhone.trim()
          if (newPhone === '') {
            return
          }
          this.editDialog = false
          this.$store.dispatch('editPhone', newPhone)
        }
    }
  }
</script>

<style scoped>

</style>
