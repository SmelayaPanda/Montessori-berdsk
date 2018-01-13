<template>
  <div>
    <!--Mock block-->
    <div style="height: 40px"></div>

    <!--Toolbar-->
    <v-tabs centered style="z-index: 10000" class="toolbar__background">

      <div class="app-logo" v-on:click="goHome"></div>

      <v-tabs-bar dark>
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
            {title: 'Контакты', link: '/contacts'}
          ]
        }
      },
    methods: {
      goHome:
        function () {
          this.$router.push('/')
        }
    }
  }
</script>

<style scoped>

  .toolbar__background {
    background-image: url(../../static/img/toolbar.png);
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
    background-image: url(../../static/img/home/logo.png);
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

  .app-logo:hover {
    cursor: pointer;
  }

  .tab__text {
    font-size: 14px;
    font-weight: normal;
    color: white;
    text-transform: capitalize !important;
  }

</style>
