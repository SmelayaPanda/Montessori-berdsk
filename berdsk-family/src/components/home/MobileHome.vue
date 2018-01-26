<template>
  <div>

    <div class="main_home_text">
      <h3>Монтессори пространство</h3>

      <h4>Детский центр<br> развития</h4>
    </div>
    <v-container class="call_us">
      <v-layout>
        <v-flex xs12>
          <call-us></call-us>
        </v-flex>
      </v-layout>
    </v-container>

    <!--Contacts-->
    <h3 class="mt-3 secondary--text text-xs-center">Оставьте свои контакты!</h3>
    <h4 class="mb-2 primary--text text-xs-center">И мы расскажем все и даже больше...</h4>
    <live-contacts class="contacts_center"></live-contacts>
    <div class="contacts_bg"></div>

    <mobile-footer></mobile-footer>

    <!--Mobile cards-->
    <!--<mobile-cards></mobile-cards>-->
  </div>
</template>

<script>
  import MobileCards from './cards/MobileCards'
  import MobileFooter from './footer/MobileFooter'
  import LiveContacts from './live_contacts/LiveContacts'
  import CallUs from './call_us/CallUs'

  export default {
    name: 'mobile-home',
    components: {
      MobileCards,
      MobileFooter,
      CallUs,
      LiveContacts
    }
  }
</script>

<style scoped>
  .call_us {
    background: url("../../../static/img/mobile/3.jpg") no-repeat 30% 0%;
    background-size: 300%;
    height: 94vh;
    width: auto;
  }

  .main_home_text {
    position: absolute;
    width: 100vw;
    padding-right: 10%;
    padding-top: 5%;
    color: white;
    text-shadow: 1px 1px 2px grey, 0 0 1em grey;
    text-align: right;
  }

  .contacts_title_wrapper {
    position: relative;
  }

  .contacts_title {
    position: absolute;
    /*width: 50%;*/
  }

</style>
