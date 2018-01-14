<template>
  <v-layout row>
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-btn fab slot="activator">
        <v-icon>delete_forever</v-icon>
      </v-btn>
      <v-card>
        <v-card-title class="headline">Вы действительно хотите удалить новость?</v-card-title>
        <v-card-text>
          После удаление восстановить новость можно будет лишь обратившись к администратору
          (резервные копии данных снимаются раз в сутки.
          Если новости менее суток, то вероятно она не попала в последнее резервирование
          и восстановлению не подлежит)
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary darken-1" flat @click.native="dialog = false">Отмена</v-btn>
          <v-btn color="primary darken-1" flat @click.native="onDeleteMeetup">Удалить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'app-delete-meetup',
    props: ['meetup'],
    data: function () {
      return {
        dialog: false
      }
    },
    methods: {
      onDeleteMeetup:
      function () {
        this.$store.dispatch('deleteMeetup', this.meetup.id)
      }
    }
  }
</script>

<style scoped>

</style>
