<template>
  <v-dialog v-model="dialog" persistent max-width="500px"
            v-if="this.isAdmin"
            style="position: absolute; z-index: 51"
  >
    <v-btn fab color="secondary" dark slot="activator">
      <v-icon>delete</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Вы действиельно хотите удалить материал "{{ this.material.title }}" ?</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <p class="error--text">Внимание!</p>
              <p>Восстановлению не подлежит!</p>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Отмена</v-btn>
        <v-btn color="blue darken-1" flat @click.native="onDeleteMaterial">Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    name: 'delete-material',
    props: ['material'],
    data: function () {
      return {
        dialog: false,
        materialName: this.material.title
      }
    },
    methods: {
      onDeleteMaterial: function () {
        this.dialog = false
        this.$store.dispatch('deleteMaterial', this.material.id)
      }
    }
  }
</script>

<style scoped>

</style>
