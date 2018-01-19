<template>
  <div class="signup_main_btn">
    <v-layout row justify-end>
      <v-flex>

        <v-dialog v-model="dialog" persistent max-width="600px">


          <div slot="activator" style="width: 170px; height: 32px;">
            <p class="signup_main_text">Записаться</p>
          </div>

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
                      prepend-icon="message"
                      v-model="message"
                      multi-line
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
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'call-us',
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
        message: ''
      }
    },
    methods: {
      submit: function () {
        this.dialog = false
        if (!this.validPhone) {
          this.infoTitle = 'Упс...'
          this.infoIcon = 'warning'
          this.infoMessage = 'Введите пожалуйста корректный номер телефона'
          this.infoDialog = true
          return
        }
        let date = new Date()
        console.log('Current Email ' + this.$store.getters.contacts.email)
        let fullMessage = {
          message: this.message,
          name: this.name,
          email: 'montessori_berdsk@gmail.com',
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
        return this.name.trim() !== '' && this.phone.trim() !== ''
      },
      validPhone: function () {
        let regex = new RegExp('^(1[ \\-\\+]{0,3}|\\+1[ -\\+]{0,3}|\\+1|\\+)?((\\(\\+?1-[2-9][0-9]{1,2}\\))|(\\(\\+?[2-8][0-9][0-9]\\))|(\\(\\+?[1-9][0-9]\\))|(\\(\\+?[17]\\))|(\\([2-9][2-9]\\))|([ \\-\\.]{0,3}[0-9]{2,4}))?([ \\-\\.][0-9])?([ \\-\\.]{0,3}[0-9]{2,4}){2,3}$')
        return regex.test(this.phone)
      }
    }
  }
</script>

<style scoped>

  .signup_main_text {
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 9px;
    color: white;
    z-index: 9;
  }

  .signup_main_btn {
    border-radius: 30px;
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    box-shadow: 0px 0px 38.8px 1.2px rgba(255, 255, 255, 0.5);
    position: absolute;
    left: -72px;
    margin-left: 50%;
    top: 352px;
    z-index: 10;
    transition: box-shadow 0.8s;
  }

  .signup_main_btn:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: box-shadow 0.6s;
    box-shadow: 0 0 60px 2px rgba(255, 255, 255, .7), 0 0 30px rgba(255, 255, 255, .7);
  }

</style>
