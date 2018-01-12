<template>
  <v-container>
    <v-layout row wrap class="mb-2 toolbar__background">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-btn
          class="hidden-xs-only"
          flat
          v-for="i in menuItems"
          :key="i.title"
        >
          {{ i.title }}
        </v-btn>
        <v-btn
          class="hidden-sm-and-up">people
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'toolbar',
    data:
      function () {
        return {
          menuItems: [
            {title: 'Запись', link: '/'},
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
    background-size: 100% 100%;
    display: block;
    position: absolute;
    width: 1600px;
    /*1920 × 79*/
    height: 54px;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>
