<template>
  <v-dialog v-model="dialog" persistent max-width="500px" v-show="this.isAdmin">
    <v-btn fab color="secondary" light slot="activator">
      <v-icon>delete</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Вы действиельно хотите удалить услугу {{ this.subGroup.title }} ?</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <p class="error--text">Внимание!</p>
              <p>Услуга будет удалена без возможности возврата!</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Отмена</v-btn>
        <v-btn color="blue darken-1" flat @click.native="onDeleteGroup">Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: 'delete-service-group',
    props: ['subGroup'],
    data: function () {
      return {
        dialog: false,
        groupName: this.subGroup.name
      }
    },
    methods: {
      onDeleteGroup: function () {
        this.dialog = false
        this.$store.dispatch('deleteServiceSubGroup', this.subGroup.id)
      }
    }
  }
</script>

<style scoped>

</style>
