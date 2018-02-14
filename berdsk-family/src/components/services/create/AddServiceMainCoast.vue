<template>
  <v-layout row justify-center v-if="this.isAdmin">
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-btn fab color="primary" dark slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Добавить основную услугу</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>

            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  name="serviceName"
                  label="Название"
                  id="serviceName"
                  v-model="serviceName"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  name="coast"
                  label="Цена"
                  id="coast"
                  v-model="coast"
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
  </v-layout>
</template>
<script>
  export default {
    name: 'add-service-main-coast',
    data: function () {
      return {
        dialog: false,
        serviceName: '',
        coast: ''
      }
    },
    methods: {
      onSaveGroup: function () {
        this.dialog = false
        this.$store.dispatch('addServiceMainCoast', {name: this.serviceName, coast: this.coast})
      }
    },
    computed: {
      checkValid: function () {
        return this.serviceName.trim() === ''
      }
    }

  }
</script>

<style scoped>

</style>
