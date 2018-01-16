<template>
  <v-layout row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn fab color="primary" dark slot="activator">
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Добавить подгруппу для {{ this.parentId }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>

            <!--Title-->
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  name="title"
                  label="Группа"
                  id="title"
                  v-model="title"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>

            <!--Description-->
            <v-layout row>
              <v-flex xs12>
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

            <!--Coast-->
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

            <!--Schedule-->
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  name="schedule"
                  label="Расписание"
                  id="schedule"
                  v-model="schedule"
                  required>
                </v-text-field>
              </v-flex>
            </v-layout>

          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click.native="onSaveGroup">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
  export default {
    name: 'add-service-sub-group',
    props: ['parentId'],
    data: function () {
      return {
        dialog: false,
        title: '',
        description: '',
        coast: '',
        schedule: ''
      }
    },
    methods: {
      onSaveGroup: function () {
        if (this.title === '' || this.description === '' ||
          this.coast === '' || this.schedule === '') {
          return
        }
        this.dialog = false
        this.$store.dispatch('addServiceSubGroup', {
          parentId: this.parentId,
          title: this.title,
          description: this.description,
          coast: this.coast,
          schedule: this.schedule
        })
      }
    }
  }
</script>

<style scoped>

</style>
