<template>
  <div>

    <!--Call us Button-->
    <call-us style="position: absolute"></call-us>
    <!--Choice service button-->
    <div class="choose_service_btn" @click="goServices">
      <p class="signup_main_text">Выбрать занятие</p>
    </div>
    <div class="montessori_space_main_text"></div>

    <!--Slide show-->
    <app-home-slide-show class="hidden-xs-only"></app-home-slide-show>
    <a href="#"
       v-scroll="onScroll"
       v-scroll-to="scrollToParallaxOptions"
       ref="emitScroll"></a>


    <!--About our center-->
    <div class="about_us_title"></div>
    <div class="about_us_center"></div>
    <div class="about_us_bg"></div>

    <!--Parallax-->
    <app-parallax id="app-parallax"></app-parallax>


    <!--Unicallity-->
    <div class="unicallity_title"></div>
    <div class="unicallity_center"></div>
    <div class="unicallity_bg"></div>


    <!--Unicallity-->
    <div class="material_title"></div>
    <div class="material_icons"></div>
    <div class="material_bg"></div>

  </div>
</template>

<script>
  import AppHomeSlideShow from './HomeSlideShow'
  import AppParallax from './Parallax'
  import HoveredCards from './cards/HoveredCards'
  import CallUs from './CallUs'

  export default {
    name: 'home',
    data: function () {
      return {
        offsetTop: 0,
        scrolled: false,
        scrollToParallaxOptions: {
          el: '#app-parallax',
          duration: 1200,
          easing: 'ease-out',
          offset: -100,
          cancelable: false
        }
      }
    },
    components: {
      AppParallax,
      AppHomeSlideShow,
      HoveredCards,
      CallUs
    },
    methods: {
      callUs: function () {
      },
      goServices:
        function () {
          this.$router.push('/services')
        },
      onScroll: function () {
        // this.offsetTop = window.pageYOffset
        // let scrolled = this.scrolled
        // if (scrolled === false &&
        //   ((this.offsetTop > 949 && this.offsetTop < 950) ||
        //     (this.offsetTop > 1400 && this.offsetTop < 1450))) {
        //   this.$refs.emitScroll.click()
        //   this.scrolled = true
        // }
        // if ((this.offsetTop > 0 && this.offsetTop < 500) || (this.offsetTop > 1700)) {
        //   this.scrolled = false
        // }
      }
    },
    computed: {}
  }
</script>

<style scoped>
  .montessori_space_main_text {
    background-image: url("../../../static/img/home/main-text.png");
    background-size: 75%;
    position: absolute;
    width: 1203px;
    height: 412px;
    left: 50%;
    margin-left: -210px;
    top: 35px;
    z-index: 4;
  }

  .signup_main_text {
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 9px;
    color: white;
    z-index: 5;
  }

  .choose_service_btn {
    border: 2px solid white;
    border-radius: 30px;
    opacity: 0.65;
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    left: 170px;
    margin-left: 50%;
    top: 353px;
    width: 170px;
    height: 40px;
    z-index: 15;
    transition: box-shadow 0.8s;
  }

  .choose_service_btn:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: box-shadow 0.6s;
    box-shadow: 0 0 60px 2px rgba(255, 255, 255, .7), 0 0 30px rgba(255, 255, 255, .7);
  }

  /* About us block */

  .about_us_bg {
    background-image: url("../../../static/img/home/about_us/about_bg.png");
    background-size: 100%;
    position: relative;
    width: 1937px;
    height: 700px;
    z-index: 5;
    opacity: 0.2;
  }

  .about_us_title {
    background-image: url("../../../static/img/home/about_us/about_title.png");
    background-size: 85%;
    width: 445px;
    height: 138px;
    position: absolute;
    z-index: 21;
    left: -195px;
    margin-left: 50%;
    margin-top: 35px;
  }

  .about_us_center {
    background-image: url("../../../static/img/home/about_us/about_center.png");
    background-size: 85%;
    width: 1375px;
    height: 526px;
    position: absolute;
    z-index: 21;
    left: -585px;
    margin-left: 50%;
    margin-top: 160px;
  }

  /* About us block */

  .unicallity_bg {
    background-image: url("../../../static/img/home/unicallity/unicallity_bg.png");
    background-size: 110%;
    position: relative;
    width: 1920px;
    /*height: 437px;*/
    height: 480px;
    z-index: 15;
  }

  .unicallity_title {
    background-image: url("../../../static/img/home/unicallity/unicallity_title.png");
    background-size: 80%;
    width: 905px;
    height: 127px;
    position: absolute;
    z-index: 21;
    left: -360px;
    margin-left: 50%;
    margin-top: 5px;
  }

  .unicallity_center {
    background-image: url("../../../static/img/home/unicallity/unicallity_center.png");
    background-size: 92%;
    width: 1397px;
    height: 376px;
    position: absolute;
    z-index: 21;
    left: -630px;
    margin-left: 50%;
    margin-top: 85px;
  }

  #app-parallax {
    position: relative;
  }

  .material_title {
    background-image: url("../../../static/img/home/material/material_title.png");
    background-size: 75%;
    width: 647px;
    height: 109px;
    position: absolute;
    z-index: 22;
    left: -225px;
    margin-left: 50%;
    margin-top: 5px;
  }

  .material_icons {
    background-image: url("../../../static/img/home/material/material_icons.png");
    background-size: 73%;
    width: 1713px;
    height: 680px;
    position: absolute;
    z-index: 21;
    left: -630px;
    margin-left: 50%;
    /*margin-top: 85px;*/
  }

  .material_bg{
    background-size: 100%;
    background-color: #faaf94;
    position: relative;
    width: 1920px;
    /*height: 437px;*/
    height: 680px;
    z-index: 15;
  }
</style>
