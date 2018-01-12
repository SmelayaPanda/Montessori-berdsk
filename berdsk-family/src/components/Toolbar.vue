<template>
  <div>
    <v-tabs centered style="z-index: 10000" class="toolbar__background v-tab-text-capitalization">
      <div class="app-logo"></div>

      <v-tabs-bar dark>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tabs-item
          class="tab__text"
          v-for="i in items"
          :key="i"
          :href="'#tab-' + i"
        >
          {{ i }}
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
            {title: 'О нас', link: '/'},
            {title: 'Услуги', link: '/'},
            {title: 'Новости', link: '/'},
            {title: 'Контакты', link: '/'}
          ],
          items: ['Главная', 'О нас', 'Услуги', 'Новости', 'Контакты']
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
