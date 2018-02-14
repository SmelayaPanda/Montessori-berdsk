<template>
  <!--persistent means on the top of the screen-->
  <v-dialog width="1000px" persistent
            v-model="editDialog"
            v-if="this.$store.getters.isAdmin"
            style="position: absolute; z-index: 51; margin-top: 70px"
  >
    <v-btn fab accent slot="activator" class="primary">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <!--Dialog-->
        <!--Title-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h3 class="secondary--text">Редактировать материал</h3></v-card-title>
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

              <!--Edit Order-->
              <v-text-field
                name="order"
                label="Приоритет (чем меньше число, тем выше на странице)"
                id="order"
                v-model="editedOrder"
                required
                type="number"
              >
              </v-text-field>

              <!--Edit description-->
              <p>Описание</p>
              <v-text-field
                name="description"
                label="Заголовок"
                id="description"
                v-model="editedDescription"
                multi-line
                required>
              </v-text-field>
              <small class="grey-text">** длина заголовка не должна превышать 80 символов</small>
              <br>
              <small class="grey-text">*** длина описания не должна превышать 400 символов</small>
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
    name: 'edit-material-description-dialog',
    props: ['material'],
    data:
      function () {
        return {
          editDialog: false,
          editedOrder: this.material.order,
          editedTitle: this.material.title,
          editedDescription: this.material.description
        }
      },
    methods: {
      onSaveChanges:
        function () {
          this.editDialog = false
          this.$store.dispatch('editMaterialDescription', {
            id: this.material.id,
            title: this.editedTitle,
            order: this.editedOrder,
            description: this.editedDescription
          })
        }
    },
    computed: {
      validCheck: function () {
        return this.editedTitle.trim() !== '' ||
          this.editedDescription.trim() !== '' ||
          this.editedOrder.trim() !== ''
      }
    }
  }
</script>

<style scoped>

</style>
