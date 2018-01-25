<template>
  <v-container class="pt-0 pr-5 pl-5">
    <v-layout row wrap style="justify-content: space-evenly">
      <v-flex xs12 sm4 md3 class="col-3-wrapper mt-2">
        <div class="col-3">
          <input class="effect-2"
                 type="text"
                 placeholder="Введите Ваше имя"
                 v-model="name">
          <span class="focus-border"></span>
        </div>
      </v-flex>
      <v-flex xs12 sm4 md3 class="col-3-wrapper mt-2">
        <div class="col-3">
          <input class="effect-2"
                 type="text"
                 v-model="phone"
                 placeholder="Ваш номер телефона">
          <span xs12 class="focus-border"></span>
        </div>
      </v-flex>

      <!--Submit-->
      <v-flex xs12 sm3 md2 class="signup_main_btn mt-2" @click="submit">
        <p class="signup_main_text">Отправить</p>
      </v-flex>
    </v-layout>


    <!--Info dialog-->
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
  </v-container>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'live-contacts',
    data: function () {
      return {
        infoDialog: false,
        infoTitle: '',
        infoMessage: '',
        infoIcon: '',
        name: '',
        phone: ''
      }
    },
    methods: {
      submit: function () {
        this.dialog = false
        if (!this.name.trim() === '') {
          this.infoTitle = 'Упс...'
          this.infoIcon = 'warning'
          this.infoMessage = 'Введите пожалуйста имя'
          this.infoDialog = true
          return
        }
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
          message: '',
          name: this.name,
          email: 'montessoriberdsk@gmail.com',
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
    justify-content: center;
    margin-top: 12px;
    color: white;
    z-index: 9;
  }

  .signup_main_btn {
    border-radius: 30px;
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    box-shadow: 0px 0px 38.8px 1.2px rgba(255, 255, 255, 0.5);
    display: flex;
    position: relative;
    justify-content: center;
    z-index: 10;
    width: 180px;
    height: 48px;
    transition: box-shadow 0.8s;
  }

  .signup_main_btn:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: box-shadow 0.6s;
    box-shadow: 0 0 60px 2px rgba(255, 255, 255, .7), 0 0 30px rgba(255, 255, 255, .7);
  }

  /* Your contacts */
  :focus {
    outline: none;
  }

  .col-3-wrapper {
    background-color: rgb(255, 171, 148);
    width: 320px;
    height: 48px;
    border-radius: 48px;
  }

  .col-3 {
    float: left;
    margin: 4px 10%;
    position: relative;
  }

  /* necessary to give position: relative to parent. */
  input[type="text"] {
    color: white;
    width: 120%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  ::placeholder {
    color: white;
    opacity: 0.7;
    font-size: 12px;
  }

  .effect-2 {
    border: 0;
    padding: 7px 0;
    border-bottom: 1px solid white;
  }

  .effect-2 ~ .focus-border {
    position: absolute;
    bottom: 0;
    /*left: 60%;*/
    width: 0;
    height: 2px;
    background-color: #bced96;
    transition: 0.4s;
  }

  .effect-2:focus ~ .focus-border {
    width: 130%;
    transition: 0.4s;
    left: 0;
  }
</style>
