<template>
  <div class="about_bg">

    <v-container>
      <v-container class="mt-1">
        <h1 class="primary--text about_us_main_title">О нас</h1>


        <div class="about_header">
          <img src="../../../static/img/home/about_us/about_us.png" height="40%" width="40%"/>
        </div>
        <h2 class="about_sub_header secondary--text">Важность движения</h2>
        <p class="about_sub_header secondary--text">Один из основных принципов Монтессори</p>

        <v-flex xs12 sm10 offset-sm1>

          <v-card class="secondary white--text about_card elevation-5">
            <v-card-text>
              <b>Движение является одним из самых важных аспектов развития в первые годы жизни.</b>
              <p>Движение – основная характеристика жизни. В случае если свобода движений не предоставляется, ребенок
                приобретает только опыт физического ограничения, который становится опытом психологической неспособности
                осуществить свои желания и реализовать свои интересы. Окружающий мир становится тюрьмой, а не местом для
                развития.
              </p>
              <b>Взаимосвязь между движениями и знаниями очевидна.</b>
              <p>
                Дети, которым предоставлена свобода движения, осознают, что они могут реализовать свои идеи и
                потребности.
                Их
                повторяющийся опыт - вижу предмет, добираюсь до него и изучаю его с помочью рук и рта – порождает четко
                представление, состоящее в том, что когда мы чего-то хотим, мы можем двигаться и получить желаемое.
                Именно
                таким образом развивается здоровое эго, человек, способный успешно справиться с жизненными трудностями.
                Это
                есть БАЗОВАЯ ВЕРА В СЕБЯ И БАЗОВОЕ ДОВЕРИЕ К МИРУ. – это две ноги в психологическом плане, с помощью
                которых
                мы должны идти по жизни. Каждый раз, когда мы лишаем ребенка возможности активно двигаться, основа его
                развивающегося эго находится под угрозой со всей чрезвычайной серьезностью отдаленных последствий.
                (из книги «Понимание человека» С. К. Монтанаро, ведущего специалиста и первого AMI-тренера в
                Монтессори-методе
                0-3.)
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>

      <!--Gallery-->
      <gallery-slick></gallery-slick>
    </v-container>
  </div>

</template>

<script>
  import GallerySlick from './GallerySlick'

  export default {
    name: 'about-us',
    components: {
      GallerySlick
    }
  }
</script>

<style scoped>
  .about_bg {
    background: url("../../../static/img/common/common_background.png") repeat;
    background-size: 100%;
    position: relative;
    z-index: 1;
  }

  .about_card {
    font-size: 13px;
    border-radius: 30px;
    padding: 10px 20px 20px;
  }

  .about_header {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .about_sub_header {
    display: flex;
    justify-content: center;
  }

  .about_us_main_title {
    margin-left: 90px;
  }
</style>
