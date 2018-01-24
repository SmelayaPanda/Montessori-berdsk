<template>
  <div>
    <div v-show="!isAdminPanel">
      <!--Mock block-->
      <div style="height: 40px"></div>
      <!--Toolbar-->
      <v-tabs centered style="z-index: 10000" class="toolbar__background">

        <router-link to="/">
          <div class="app-logo"></div>
        </router-link>

        <v-tabs-bar dark
                    style="left: -100px;">
          <v-tabs-slider color="white"></v-tabs-slider>
          <v-tabs-item
            class="tab__text"
            v-for="i in menuItems"
            :key="i.title"
            :to="i.link"
          >
            {{ i.title }}
          </v-tabs-item>
        </v-tabs-bar>
      </v-tabs>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'toolbar',
    data:
      function () {
        return {
          menuItems: [
            {title: 'Главная', link: '/'},
            {title: 'О нас', link: '/about'},
            {title: 'Услуги', link: '/services'},
            {title: 'Новости', link: '/meetups'},
            {title: 'Контакты', link: '/contacts'},
            {title: 'Admin', link: '/admin'}
          ]
        }
      },
    methods: {},
    computed: {
      isAdminPanel:
        function () {
          return window.location.pathname === '/admin'
        }
    }
  }
</script>

<style scoped>

  .toolbar__background {
    background-image: url(../../static/img/common/toolbar.png);
    width: 3219px;
    height: 79px;
    position: absolute;
    background-size: 78%;
    top: 0;
    left: 30%;
    margin-left: -1020px;
    z-index: 1003 !important;
  }

  .app-logo {
    background-image: url(../../static/img/home/app_logo.png);
    width: 258px;
    height: 49px;
    position: absolute;
    background-size: 78%;
    top: 0;
    left: 40%;
    margin-left: -425px;
    margin-top: 10px;
    z-index: 1005 !important;
  }

  .app-logo:hover {
    cursor: pointer;
  }

  .tab__text {
    font-size: 14px;
    font-weight: normal;
    color: white;
    text-transform: capitalize !important;
    margin-left: 0;
  }

  .tabs__slider {
    top: 43px !important;
  }
</style>
