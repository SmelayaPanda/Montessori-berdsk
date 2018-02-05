<template>
  <div>

    <img src="../../../assets/img/about_us_home/about_say.png" height="155" width="461" class="about_say_title"/>

    <v-container class="review_container">

      <v-layout class="review_text_container">
        <v-flex xs3>
          <img src="@/assets/img/about_us_home/back.png"
               height="138" width="71"
               class="back_btn"
          />
        </v-flex>


        <v-flex xs6>
          <p class="quotes back_quotes">“</p>
          <div class="text_block">
            <p class="review_text secondary--text">{{ selectedReview }}</p>
          </div>
          <p class="quotes forward_quotes">”</p>
        </v-flex>

        <v-flex xs3>
          <img src="@/assets/img/about_us_home/forward.png"
               height="127" width="57"
               class="forward_btn"
          />
        </v-flex>
      </v-layout>


      <v-layout row wrap>
        <v-flex xs4 style="margin-left: 60px"></v-flex>
        <v-flex xs1>
          <img ref="rw0"
               class="review_icon rw0"
               @click="changeReview(0)"
               src="@/assets/img/about_us_main/svo.jpg"/>
        </v-flex>
        <v-flex xs1>
          <img ref="rw1"
               class="review_icon rw1"
               @click="changeReview(1)"
               src="@/assets/img/about_us_main/VpitivUm.jpg"/>
        </v-flex>
        <v-flex xs1>
          <img ref="rw2"
               class="review_icon rw2"
               @click="changeReview(2)"
               src="@/assets/img/about_us_main/UvazhenieLichnosti.jpg"/>
        </v-flex>
        <v-flex xs4></v-flex>
      </v-layout>
    </v-container>

  </div>
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
          this.$refs['rw' + i].style.opacity = 0.45
          this.$refs['rw' + i].style.transform = 'scale(1)'
        }
        this.$refs['rw' + ord].style.opacity = 1
        this.$refs['rw' + ord].style.transform = 'scale(1.25)'
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
    height: 500px;
    padding-top: 10px;
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

  .review_text {
    text-align: center;
    font-weight: normal;
    height: 130px;
    margin-top: 10px;
  }

  .review_text_container {
    text-align: center;
  }

  .about_say_title {
    transform: scale(0.8);
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .back_btn {
    opacity: 0.8;
    transition: all 0.5s;
  }

  .forward_btn {
    opacity: 0.8;
    transition: all 0.5s;
  }

  .back_btn:hover {
    cursor: pointer;
    opacity: 1;
  }

  .forward_btn:hover {
    cursor: pointer;
    opacity: 1;
  }

  .quotes {
    font-size: 72px;
    font-weight: bold;
    color: rgb(188, 237, 150);
    line-height: 0.333;
    text-align: center;
    z-index: 329;
  }

  .back_quotes {
    text-align: left;
    margin: 0;
  }

  .forward_quotes {
    text-align: right;
    margin: 0;
  }

  .text_block {
    display: flex !important;
    justify-content: center !important; /* align horizontal */
    align-items: center !important;
  }
</style>
