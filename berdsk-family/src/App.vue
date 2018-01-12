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
  export default {}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,600,700,700i,800&subset=cyrillic,cyrillic-ext');

  * {
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight: normal;
  }

  .tabs__item {
    text-shadow: 0px 0px 63.05px rgba(104, 103, 103, 0.88);
    -moz-transform: matrix( 0.9989846687589,0,0,1.01497230479664,0,0);
    -webkit-transform: matrix( 0.9989846687589,0,0,1.01497230479664,0,0);
    -ms-transform: matrix( 0.9989846687589,0,0,1.01497230479664,0,0);
    text-transform: capitalize !important;
  }

  .tabs__item {
    text-shadow: 3px 3px 8px rgba(255, 255, 255, 1);
  }
</style>
