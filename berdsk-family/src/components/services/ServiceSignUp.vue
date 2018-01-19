<template>
  <v-layout row justify-end>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-btn color="white" dark slot="activator" class="primary--text">
        Записаться
        <v-icon class="ml-3">done</v-icon>
      </v-btn>
      <v-card>

        <v-card-title class="ml-2">
          <span class="headline primary--text">Мы свяжемся с Вами в ближайшее время!</span>
        </v-card-title>
        <v-card-text>

          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="people"
                  label="Ваше имя"
                  required
                  v-model="name"
                >
                </v-text-field>
              </v-flex>
              <v-flex xs10>
                <v-text-field
                  prepend-icon="phone"
                  label="Телефон"
                  required
                  v-model="phone"
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="email"
                  label="Email"
                  v-model="email"
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="message"
                  v-model="message"
                  multi-line
                  required
                  label="Сообщение"
                >
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Закрыть</v-btn>
          <v-btn color="blue darken-1" flat @click="submit" :disabled="!validCheck">Отправить</v-btn>
        </v-card-actions>


        <v-layout row justify-center>
          <v-dialog v-model="infoDialog" max-width="290">
            <v-card>
              <v-card-title class="headline">
                <v-icon class="ml-5 mr-2">{{ infoIcon }}</v-icon>
                {{ infoTitle }}
              </v-card-title>
              <v-card-text>{{ infoMessage }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click.native="infoDialog = false">Ок</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'service-sign-up',
    props: ['signGroup'],
    data: function () {
      return {
        dialog: false,
        infoDialog: false,
        infoTitle: '',
        infoMessage: '',
        infoIcon: '',
        name: '',
        email: '',
        phone: '',
        message:
        'Здравствуйте! Желаем прийти к Вам на занятия "' +
        this.signGroup.service +
        '" в группе "' +
        this.signGroup.group + '"'
      }
    },
    methods: {
      submit: function () {
        this.dialog = false
        let date = new Date()
        console.log('Current Email ' + this.$store.getters.contacts.email)

        let fullMessage = {
          message: this.message,
          name: this.name,
          email: this.email,
          phone: this.phone,
          date: date.toISOString()
        }
        $.ajax({
          url: 'https://formspree.io/' + this.$store.getters.contacts.email,
          method: 'POST',
          data: fullMessage,
          dataType: 'json'
        })
          .then((data) => {
            console.log(data)
            this.infoTitle = 'Спасибо'
            this.infoIcon = 'done_all'
            this.infoMessage = 'Ваша заявка доставлена'
            this.infoDialog = true
            this.$store.dispatch('addSignUpMessages', fullMessage)
          })
          .catch(error => {
            console.log(error)
            this.infoTitle = 'Упс...'
            this.infoIcon = 'warning'
            this.infoMessage = 'Что то пошло не так. ' +
              'Сервер не отвечает. Убедитесь в корректности введеного email'
            this.infoDialog = true
          })
      }
    },
    computed: {
      validCheck: function () {
        return this.message.trim() !== '' && this.name.trim() !== '' &&
          this.phone.trim() !== '' && this.email.trim() !== ''
      }
    }
  }
</script>

<style scoped>

</style>
