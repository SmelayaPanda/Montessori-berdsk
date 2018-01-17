<template>
  <div>
    <app-home-slide-show class="hidden-xs-only"></app-home-slide-show>
    <a href="#"
       v-scroll="onScroll"
       v-scroll-to="scrollToParallaxOptions"
       ref="emitScroll"></a>

    <div class="montessori_space_main_text"></div>
    <div class="signup_main_btn">
      <p class="signup_main_text">Записаться</p>
    </div>
    <div class="choose_service_btn" v-on:click="goServices">
      <p class="signup_main_text">Выбрать занятие</p>
    </div>

    <img class="about_us" src="../../../static/img/home/about_us.jpg" alt="">

    <app-parallax id="app-parallax"></app-parallax>

    <img class="about_us" src="../../../static/img/home/about_us.jpg" alt="">

  </div>
</template>

<script>
  import AppHomeSlideShow from './HomeSlideShow'
  import AppParallax from './Parallax'
  import HoveredCards from './cards/HoveredCards'

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
      HoveredCards
    },
    methods: {
      goServices:
        function () {
          this.$router.push('/services')
        },
      onScroll: function () {
        this.offsetTop = window.pageYOffset
        let scrolled = this.scrolled
        if (scrolled === false &&
          ((this.offsetTop > 900 && this.offsetTop < 950) ||
            (this.offsetTop > 1400 && this.offsetTop < 1450))) {
          this.$refs.emitScroll.click()
          this.scrolled = true
        }
        if ((this.offsetTop > 0 && this.offsetTop < 500) || (this.offsetTop > 1700)) {
          this.scrolled = false
        }
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
    z-index: 1023;
  }

  .signup_main_btn {
    border-radius: 30px;
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    box-shadow: 0px 0px 38.8px 1.2px rgba(255, 255, 255, 0.5);
    position: absolute;
    left: -82px;
    margin-left: 50%;
    top: 352px;
    width: 170px;
    height: 40px;
    z-index: 10000;
    transition: box-shadow 0.8s;
  }

  .signup_main_btn:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: box-shadow 0.6s;
    box-shadow: 0 0 60px 2px rgba(255, 255, 255, .7), 0 0 30px rgba(255, 255, 255, .7);
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
    z-index: 10000;
    transition: box-shadow 0.8s;
  }

  .choose_service_btn:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: box-shadow 0.6s;
    box-shadow: 0 0 60px 2px rgba(255, 255, 255, .7), 0 0 30px rgba(255, 255, 255, .7);
  }

  .signup_main_text {
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-top: 9px;
    color: white;
    z-index: 19;
  }

  .about_us {
    width: 100vw;
  }

  #app-parallax {
    position: relative;
  }
</style>
