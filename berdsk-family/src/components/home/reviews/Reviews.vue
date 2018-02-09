<template>
  <div class="review_bg">
    <!--ugly hardcoded version =)-->
    <img src="@/assets/img/about_us_home/about_say.png" height="155" width="461" class="about_say_title"/>

    <v-container class="review_container">
      <v-layout class="review_text_container">
        <v-flex xs3>
          <img src="@/assets/img/about_us_home/back.png"
               height="138" width="71"
               class="back_btn"
               @click="back"/>
        </v-flex>


        <v-flex xs6>
          <p class="quotes back_quotes">“</p>
          <div class="text_block">
            <div class="review_text secondary--text">
              <p style="margin-bottom: 4px">
                {{ selectedAuthor }}
              </p>
              {{ selectedReview }}
            </div>
          </div>
          <p class="quotes forward_quotes">”</p>
        </v-flex>

        <v-flex xs3>
          <img src="@/assets/img/about_us_home/forward.png"
               height="127" width="57"
               class="forward_btn"
               @click="forward"/>
        </v-flex>
      </v-layout>


      <v-layout row wrap style="width: 320px; margin: 0 auto;">
        <v-flex xs4>
          <img ref="rw0"
               class="review_icon rw0"
               @click="changeReview(0)"
               src="@/assets/img/reviews/review_1.jpg"/>
        </v-flex>
        <v-flex xs4>
          <img ref="rw1"
               class="review_icon rw1"
               @click="changeReview(1)"
               src="@/assets/img/reviews/review_2.jpg"/>
        </v-flex>
        <v-flex xs4>
          <img ref="rw2"
               class="review_icon rw2"
               @click="changeReview(2)"
               src="@/assets/img/reviews/review_3.jpg"/>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        selectedReviewOrd: 1,
        selectedAuthor: 'Мария и Саша',
        selectedReview: 'Ходим в центр с прошлого года, Саша очень радуется когда нам удается выехать туда. Может играть практически самостоятельно 2 часа и это хорошо, потому что играя он еще и развивается, учиться чему то новому. Мне как маме нравиться индивидуальный подход и что можно приехать когда удобно нам.',
        reviewAuthor: [
          'Наталья и Витя',
          'Мария и Саша',
          'Юлия и Егор'
        ],
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
        this.selectedAuthor = this.reviewAuthor[ord]
        for (let i = 0; i < 3; i++) {
          this.$refs['rw' + i].style.opacity = 0.45
          this.$refs['rw' + i].style.transform = 'scale(1)'
        }
        this.$refs['rw' + ord].style.opacity = 1
        this.$refs['rw' + ord].style.transform = 'scale(1.25)'
      },
      back: function () {
        if (this.selectedReviewOrd === 0) {
          this.selectedReviewOrd = 2
        } else {
          this.selectedReviewOrd -= 1
        }
        this.changeReview(this.selectedReviewOrd)
      },
      forward: function () {
        if (this.selectedReviewOrd === 2) {
          this.selectedReviewOrd = 0
        } else {
          this.selectedReviewOrd += 1
        }
        this.changeReview(this.selectedReviewOrd)
      }
    }
  }
</script>

<style scoped>
  .review_bg {
    background: url("../../../../static/img/home/unicallity/unicallity_bg.png") repeat;
    background-size: 100%;
    position: relative;
    z-index: 1;
  }

  .rw0, .rw2 {
    opacity: 0.5;
  }

  .rw1 {
    opacity: 1;
    transform: scale(1.2);
  }

  .review_container {
    height: 320px;
    padding-top: 10px;
  }

  .review_icon {
    width: 80px;
    height: 80px;
    border: 2px solid #bced96;
    border-radius: 100px;
    transition: all 0.5s;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .review_icon:hover {
    cursor: pointer;
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
    transform: scale(0.85);
  }

  .forward_btn {
    opacity: 0.8;
    transition: all 0.5s;
    transform: scale(0.85);
  }

  .back_btn:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(0.9);
  }

  .forward_btn:hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(0.9);
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
    margin: 0 0 -25px -50px;
    padding: 0;
  }

  .forward_quotes {
    text-align: right;
    padding-left: 10px;
    padding-top: 5px;
    margin: 0;
    margin-right: -40px;
  }

  .text_block {
    display: table;
  }

  .review_text {
    text-align: center;
    font-weight: normal;
    height: 130px;
    display: table-cell;
    vertical-align: middle;
  }
</style>
