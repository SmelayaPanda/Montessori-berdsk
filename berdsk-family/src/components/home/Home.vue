<template>
  <div>
    <home-slide-show class="hidden-xs-only"></home-slide-show>
    <div class="montessori_space_main_text"></div>
    <div class="signup_main_btn">
      <p class="signup_main_text">Записаться</p>
    </div>
    <div class="choose_service_btn">
      <p class="signup_main_text">Выбрать занятие</p>
    </div>
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


</style>
