<template>
  <v-dialog v-model="dialog" persistent max-width="700px" v-show="this.$store.getters.isAdmin">
    <v-btn fab color="primary" dark slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Редактировать основную услугу</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                name="editedService"
                label="услуга"
                id="editedService"
                v-model="editedService"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                name="editedCoast"
                label="цена"
                id="editedCoast"
                v-model="editedCoast"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Закрыть</v-btn>
        <v-btn color="blue darken-1" flat @click.native="onSaveGroup" :disabled="checkValid">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: 'edit-service-main-coast',
    props: ['coast'],
    data: function () {
      return {
        dialog: false,
        key: this.coast.key,
        editedCoast: this.coast.coast,
        editedService: this.coast.name
      }
    },
    methods: {
      onSaveGroup: function () {
        this.dialog = false
        let editedMainCoast = {
          key: this.key,
          name: this.editedService,
          coast: this.editedCoast
        }
        this.$store.dispatch('editServiceMainCoast', editedMainCoast)
      }
    },
    computed: {
      checkValid: function () {
        return this.editedService.trim() === '' || this.editedCoast.trim() === ''
      }
    }
  }
</script>

<style scoped>

</style>
