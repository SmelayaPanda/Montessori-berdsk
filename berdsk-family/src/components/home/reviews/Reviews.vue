<template>
  <v-container class="review_container">
    <h2 class="review_header secondary--text text-xs-center">Что говорят о нас</h2>
    <h4 class="review_header primary--text text-xs-center">Отзывы клиентов</h4>
    <div class="review_text_container">
      <p class="review_text secondary--text">
        {{ selectedReview }}
      </p>
    </div>

    <div class="review_icons_container">
      <v-layout row wrap>
        <v-flex xs4>
          <img ref="rw0"
               class="review_icon rw0"
               @click="changeReview(0)"
               src="@/assets/img/about_us_main/svo.jpg"/>
        </v-flex>
        <v-flex xs4>
          <img ref="rw1"
               class="review_icon rw1"
               @click="changeReview(1)"
               src="@/assets/img/about_us_main/VpitivUm.jpg"/>
        </v-flex>
        <v-flex xs4>
          <img ref="rw2"
               class="review_icon rw2"
               @click="changeReview(2)"
               src="@/assets/img/about_us_main/UvazhenieLichnosti.jpg"/>
        </v-flex>
      </v-layout>
    </div>

  </v-container>
</template>

<script>
  export default {
    data: function () {
      return {
        selectedReview: 'Ходим в центр с прошлого года, Саша очень радуется когда нам удается выехать туда. Может играть практически самостоятельно 2 часа и это хорошо, потому что играя он еще и развивается, учиться чему то новому. Мне как маме нравиться индивидуальный подход и что можно приехать когда удобно нам.',
        reviewText: [
          'Ребенку очень нравится. Занимается с удовольствием. Много интересного. Индивидуальный подход. Мы довольны.',
          'Ходим в центр с прошлого года, Саша очень радуется когда нам удается выехать туда. Может играть практически самостоятельно 2 часа и это хорошо, потому что играя он еще и развивается, учиться чему то новому. Мне как маме нравиться индивидуальный подход и что можно приехать когда удобно нам.',
          'Периодически посещаем данную развивайку. Очень она нравится моему сыну (1,9). Многообразие развивающих игр позволит заинтересовать и маленького и взрослого))) Обстановка ненавязчивая, я бы даже сказала, свободная, ребенок занят тем, что ему интересно.'
        ]
      }
    },
    methods: {
      imagePath: function (itemSrc) {
        return require('@/assets/img/about_us_main' + itemSrc + '.jpg')
      },
      changeReview: function (ord) {
        this.selectedReview = this.reviewText[ord]
        for (let i = 0; i < 3; i++) {
          this.$refs['rw' + i].style.opacity = 0.5
          this.$refs['rw' + i].style.transform = 'scale(1)'
        }
        this.$refs['rw' + ord].style.opacity = 1
        this.$refs['rw' + ord].style.transform = 'scale(1.2)'
      }
    }
  }
</script>

<style scoped>
  .rw0, rw2 {
    opacity: 0.5;
  }

  .rw1 {
    opacity: 1;
    transform: scale(1.2);
  }

  .review_container {
    width: 350px;
  }

  .review_icon {
    width: 80px;
    height: 80px;
    border: 2px solid #bced96;
    border-radius: 100px;
    transition: all 0.5s;

  }

  .review_icon:hover {
    cursor: pointer;
  }

  .review_header {
    font-weight: bolder;
  }

  .review_icons_container {
    width: 280px;
    margin-left: 15px;
  }

  .review_text {
    font-weight: normal;
    height: 130px;
    margin-top: 10px;
  }

  .review_text_container {
    width: 500px;
    margin-left: -100px;
    text-align: center;
  }
</style>
