<template>
  <div>
    <div class="icon_container_wrapper">
      <v-container class="icon_container">
        <v-layout row style="justify-content: space-evenly">
          <v-flex sm3>
            <img class="about_icon"
                 src="../../../assets/img/about_us_home/icon2.1.png"
                 height="79" width="72"/>
            <div class="white--text" style="margin-top: 10px">
              <h4>Особые дети.<br>
                Индивидуальный<br>
                образовательный<br>
                опыт в развивающей<br>
                среде поможет открыть<br>
                новые возможности<br>
                ребенка в любом возрасте.
              </h4>
            </div>

          </v-flex>
          <v-flex sm3>
            <img class="about_icon" src="../../../assets/img/about_us_home/icon2.2.png" height="71" width="84"/>
            <div class="white--text" style="margin-top: 19px">
              <h4>У нас ребенок САМ<br>
                считает, развивает<br>
                мелкую моторику,<br>
                получает развитие<br>
                музыкального слуха.<br>
                С монтессори материалами<br>
                мы учимся писать и читать.
              </h4>
            </div>

          </v-flex>
          <v-flex sm3>
            <img class="about_icon" src="../../../assets/img/about_us_home/icon2.3.png" height="80" width="68"/>
            <div class="white--text" style="margin-top: 10px">
              <h4>«Помоги мне<br>
                это сделать самому»<br>
                Мария Монтессори.<br>
                Здесь ребенок получает<br>
                сенсорное развитие.<br>
                Методика учитывает<br>
                возрастные особенности.
              </h4>
            </div>
          </v-flex>
          <v-flex sm3>
            <img class="about_icon" src="../../../assets/img/about_us_home/icon2.4.png" height="68" width="114"/>
            <div class="white--text" style="margin-top: 22px">
              <h4>Кружок для детей<br>
                «Конструктор куборо»<br>
                Увлекательная игра!<br>
                Всероссийские соревнования!<br>
                Программа, задания куборо<br>
                имеют разные<br>
                уровни сложности.
              </h4>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="about_us_title"></div>
    <div class="about_us_center"></div>
    <div class="about_us_bg"></div>
  </div>
</template>

<script>
  export default {
    name: 'about-us-home'
  }
</script>

<style scoped>
  /* About us block */

  .about_us_bg {
    background-image: url("../../../../static/img/home/about_us/about_bg.png");
    background-size: 100%;
    position: relative;
    width: 1937px;
    height: 630px;
    z-index: 5;
    opacity: 0.2;
  }

  .about_us_title {
    background-image: url("../../../../static/img/home/about_us/about_title.png");
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
    background-image: url("../../../../static/img/home/about_us/about_center_back.png");
    background-size: 85%;
    width: 1375px;
    height: 526px;
    position: absolute;
    z-index: 21;
    left: -585px;
    margin-left: 50%;
    margin-top: 160px;
  }

  .about_icon {
    margin-left: 15px;
    margin-right: auto;
    transition: 0.5s all
  }

  .icon_container_wrapper {
    position: relative;
    display: flex;
    justify-content: space-evenly;
  }

  .icon_container {
    width: 1100px;
    position: absolute;
    margin-left: 30px;
    margin-top: 20px;
    display: block;
    top: 200px;
    z-index: 50;
  }

</style>
