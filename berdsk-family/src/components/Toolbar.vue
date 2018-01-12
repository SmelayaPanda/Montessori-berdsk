<template>
  <div>

  <div class="toolbar__background">
    <div class="app-logo"></div>
  </div>


  <!--<v-container class="toolbar__background">-->
    <!--<v-flex></v-flex>-->

    <!--<v-layout row wrap class="mb-2">-->
      <!--<v-flex xs12 sm10 md8 offset-sm1 offset-md2>-->
        <!--<v-btn-->
          <!--style="color: white"-->
          <!--class="hidden-xs-only"-->
          <!--flat-->
          <!--v-for="i in menuItems"-->
          <!--:key="i.title"-->
        <!--&gt;-->
          <!--{{ i.title }}-->
        <!--</v-btn>-->
        <!--<v-btn-->
          <!--class="hidden-sm-and-up"-->
        <!--&gt;-->
          <!--<v-icon>dialpad</v-icon>-->
        <!--</v-btn>-->
      <!--</v-flex>-->
    <!--</v-layout>-->
  <!--</v-container>-->
  </div>

</template>

<script>
  export default {
    name: 'toolbar',
    data:
      function () {
        return {
          menuItems: [
            {title: 'О нас', link: '/'},
            {title: 'Услуги', link: '/'},
            {title: 'Новости', link: '/'},
            {title: 'Контакты', link: '/'}
          ]
        }
      }
  }
</script>

<style scoped>
  .toolbar__content {
    height: 25px !important;
  }

  .toolbar__background {
    background-image: url(../../static/toolbar.png);
    width: 2333px;
    height: 79px;
    position: absolute;
    background-size: 78%;
    top: 0;
    left: 50%;
    margin-left: -980px;
    z-index: 1003 !important;
  }

  .app-logo {
    background-image: url(../../static/logo.png);
    width: 258px;
    height: 49px;
    position: absolute;
    background-size: 78%;
    top: 0;
    left: 50%;
    margin-left: -650px;
    margin-top: 10px;
    z-index: 1005 !important;
  }
</style>
