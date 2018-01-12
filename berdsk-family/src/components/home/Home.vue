<template>
  <div>
    <home-slide-show class="hidden-xs-only"></home-slide-show>
    <div class="montessori_space_main_text"></div>
  </div>
</template>

<script>
  import HomeSlideShow from './HomeSlideShow'

  export default {
    name: 'home',
    components: {
      HomeSlideShow
    }
  }
</script>

<style scoped>
  .montessori_space_main_text {
    background-image: url("../../../static/img/home/main-text.png");
    background-size: 75%;
    position: absolute;
    width: 1203px;
    height: 412px;
    left: 500px;
    top: 35px;
    z-index: 1023;
  }

  .кнопка {
    border-radius: 30px;
    background: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%) !important;
    box-shadow: 0px 0px 38.8px 1.2px rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 848px;
    top: 471px;
    width: 236px;
    height: 61px;
    z-index: 10010;
  }
</style>
