<template>
  <v-container>

    <div id="carousel3d">
      <carousel-3d :perspective="0"
                   :space="400"
                   :display="3"
                   :controls-visible="true"
                   :controls-prev-html="'&#10092;'"
                   :controls-next-html="'&#10093;'"
                   :controls-width="30"
                   :controls-height="60"
                   :clickable="true"
                   :autoplay="true"
                   :autoplay-timeout="4000"
      >
        <slide :index="0">
          <span class="title mb-3">Свобода</span>
          <img src="../../../static/img/home/1.jpg"/>
        </slide>
        <slide :index="1">
          <span class="title mb-3">Впитывающий разум</span>
          <img src="../../../static/img/home/2.jpg"/>
        </slide>
        <slide :index="2">
          <span class="title mb-3">Уважение личности ребенка</span>
          <img src="../../../static/img/home/3.jpg"/>
        </slide>
        <slide :index="3">
          <span class="title mb-3">Роль взрослого</span>
          <img src="../../../static/img/home/4.jpg"/>
        </slide>
        <slide :index="4">
          <span class="title mb-3">Развивающая среда</span>
          <img src="../../../static/img/home/1.jpg"/>
        </slide>
        <slide :index="5">
          <span class="title mb-3">Разновозрастные группа</span>
          <img src="../../../static/img/home/3.jpg"/>
        </slide>
      </carousel-3d>
    </div>
  </v-container>
</template>

<script>
  import {Carousel3d, Slide} from 'vue-carousel-3d'

  export default {
    data: function () {
      return {}
    },
    components: {
      Carousel3d,
      Slide
    }
  }
</script>

<style scoped>
  #carousel3d .carousel-3d-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    background-color: #faaf94;
    padding-left: 30px;
    padding-right: 30px;
    -webkit-transition: all .7s;
    transition: all .7s;
    border-radius: 30px;
    border: none;
  }

  #carousel3d .carousel-3d-slide.current {
    background-color: #bced96;
    color: #fff;
  }

  #carousel3d .carousel-3d-slide.current span {
    font-size: 20px;
    font-weight: 500;
    /*margin-bottom: 10px;*/
  }

  img {
    border-radius: 20px;
  }

  .next, .prev {
    color: #faaf94 !important;
  }
</style>
