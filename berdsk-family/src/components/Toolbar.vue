<template>
  <div v-show="!isAdminPanel">
    <!--Desctop toolbar-->
    <div class="hidden-sm-and-down">
      <!--Mock block-->
      <div style="height: 40px"></div>
      <!--Toolbar-->
      <v-tabs centered style="z-index: 10000" class="toolbar__background">
        <router-link to="/">
          <div class="app-logo"></div>
        </router-link>
        <v-tabs-bar dark style="left: -100px;">
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


    <!--Mobile toolbar-->
    <v-toolbar class="hidden-md-and-up primary mobile_toolbar">
      <v-toolbar-side-icon
        @click="sideNav = !sideNav"
        class="hidden-md-and-up white--text ml-3 pl-3 side_icon"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <!--Navigation drawer-->
    <v-navigation-drawer style="z-index: 100" temporary absolute v-model="sideNav">
      <v-list>
        <!--:key="item.title for dynamic assigning-->
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>

</template>

<script>
  export default {
    name: 'toolbar',
    data:
      function () {
        return {
          sideNav: false,
          menuItems: [
            {title: 'Главная', link: '/', icon: 'home'},
            {title: 'О нас', link: '/about', icon: 'mood'},
            {title: 'Услуги', link: '/services', icon: 'loyalty'},
            {title: 'Новости', link: '/meetups', icon: 'album'},
            {title: 'Контакты', link: '/contacts', icon: 'room'}
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

  .mobile_toolbar {
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
  }

  .side_icon {
    filter: brightness(0) invert(1);
  }
</style>
