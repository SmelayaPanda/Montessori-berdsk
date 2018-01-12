<template>
  <v-app light>

    <!--Toolbar-->
    <app-toolbar></app-toolbar>

    <!--Content-->
    <router-view></router-view>

    <!--Footer-->
    <!--<v-footer></v-footer>-->
  </v-app>
</template>

<script>
  import AppToolbar from './components/Toolbar'

  export default {
    components: {
      AppToolbar
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,600,700,700i,800&subset=cyrillic,cyrillic-ext');

  @font-face {
    font-family: MullerBlack;
    src: url("../static/MullerBlack.otf") format("opentype");
  }

  * {
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: 600;
  }

  .tabs__item {
    text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.95);
    text-transform: capitalize !important;
  }

  .tabs__item {
    text-shadow: 3px 3px 8px rgba(255, 255, 255, 1);
  }

  .carousel__controls__item {
    width: 14px !important;
    height: 14px !important;
  }

</style>
