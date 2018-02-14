<template>
  <v-dialog v-model="dialog" persistent max-width="700px" v-if="this.isAdmin">
    <v-btn fab color="primary" dark slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Редактировать группу</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                name="groupName"
                label="Группа"
                id="groupName"
                v-model="groupName"
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
    name: 'edit-service-group',
    props: ['group'],
    data: function () {
      return {
        dialog: false,
        groupName: this.group.name
      }
    },
    methods: {
      onSaveGroup: function () {
        this.dialog = false
        this.$store.dispatch('editServiceGroup', {id: this.group.id, name: this.groupName})
      }
    },
    computed: {
      checkValid: function () {
        return this.groupName.trim() === ''
      }
    }
  }
</script>

<style scoped>

</style>
