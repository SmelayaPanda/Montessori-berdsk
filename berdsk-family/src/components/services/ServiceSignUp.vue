<template>
  <v-layout row justify-end>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-btn dark slot="activator" class="white--text signup_btn">
        Записаться
        <v-icon class="ml-3 white--text done_icon">done</v-icon>
      </v-btn>
      <v-card>

        <v-card-title class="ml-2">
          <span class="headline primary--text">Мы свяжемся с Вами в ближайшее время!</span>
        </v-card-title>

        <v-card-text class="pb-0">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="people"
                  label="Ваше имя"
                  required
                  v-model="name"
                >
                </v-text-field>
              </v-flex>

              <!--Phone-->
              <v-flex xs6>
                <v-icon class="ml-3">phone</v-icon>
                <masked-input v-model="phone"
                              class="mt-1 pt-4"
                              required
                              mask="\+\7 (111) 111-11-11"
                              placeholder="Телефон*"
                />
              </v-flex>

              <!--Message-->
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
              <small class="ml-4 pl-3">* обязательные для заполнения</small>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-actions class="mb-1">
          <app-help-tooltip></app-help-tooltip>
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
        let fullMessage = {
          message: this.message,
          name: this.name,
          email: this.appMail,
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
            this.infoMessage = 'Что то пошло не так. Сервер не отвечает. Попробуйте повторить попытку позже.'
            this.infoDialog = true
          })
      }
    },
    computed: {
      validCheck: function () {
        return this.message.trim() !== '' &&
          this.name.trim() !== '' &&
          this.validPhone
      },
      validPhone: function () {
        return this.phone.replace(/[^0-9]/g, '').length === 11
      }
    }
  }
</script>

<style scoped>

  .signup_btn {
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    border-radius: 20px;
  }

  .done_icon {
    color: white;
    filter: brightness(0) invert(1);
  }
</style>
