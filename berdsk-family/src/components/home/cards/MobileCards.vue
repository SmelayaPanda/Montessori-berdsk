<template>
  <div>
    <v-parallax src="../../../static/img/home/parallax.png" class="parallax_main">
      <div class="mt-2">
        <v-layout class="mt-2" style="margin-bottom: 30px">
          <v-flex xs12>
            <p class="white--text mb-0 text-xs-center">Мы подобрали методику основываясь на</p>
            <h3 class="secondary--text text-xs-center mt-1 mb-2">ВОЗРАСТНЫЕ ГРУППЫ</h3>
          </v-flex>
        </v-layout>
      </div>

      <!--1-->
      <v-layout v-for="card in cards" :key="card.src">
        <v-flex xs12 >
          <div class="card_wrapper">
            <img :src="imagePath(card.src)" class="card_img"/>
            <div class="card_text">
              <p class="secondary--text text_inner" v-html="card.text"></p>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
  export default {
    name: 'mobile-cards',
    data: function () {
      return {
        cards: [
          {
            src: '1',
            text: 'Младенцы и дети до <br>трех лет любознательны <br> и им интересна каждая\n' +
            'мелочь окружающая их и это\n' +
            'возраст, когда необходимо развивать первые жизненные навыки. В силу возрастных особенностей создается\n' +
            'среда.'
          },
          {
            src: '2',
            text: 'В этом возрасте дети открывают для себя окружающий их мир, но встречают столько запретов, но в нашем\n' +
            '              центре нет запретов и ребенок может познать <br> мир намного быстрее.'
          },
          {
            src: '3',
            text: 'В школьном возрасте <br> дети нуждаются в помощи, правильно принять те знания, что подготовили в школе. В\n' +
            'центре мы помогаем встретить эти знания с радостью и легкостью.'
          },
          {
            src: '4',
            text: 'В монтессори-среде <br> каждый работает в <br> своем ритме. И известно, что ограничение какой-то возможности\n' +
            'подстегивает в развитии у ребенка других доступных ему навыков. Материалы монтессори помогут их\n' +
            'развить.'
          },
          {
            src: '5',
            text: 'Развивать у детей <br> любовь к учебе необходимо <br> в альтернативной форме, отличающейся от стандартной, чтобы\n' +
            'ребенок сам захотел учиться,  что и позволяет методика Монтессори.'
          },
          {
            src: '6',
            text: 'Полуторачасовые занятие <br> в Монтессори\n' +
            '- среде <br> с  двумя педагогами на русском и английском (педагог с опытом общения <br> в языковой среде\n' +
            '(Канада)'
          }
        ]
      }
    },
    methods: {
      imagePath: function (itemSrc) {
        return require('@/assets/img/mobile/card' + itemSrc + '.png')
      }
    }
  }
</script>

<style scoped>
  .parallax_main {
    height: 1200px !important;
    background-color: #bced96;
    background-size: 30%;
  }

  .card_img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    position: absolute;
    z-index: 2;
  }

  .card_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card_text {
    width: 180px;
    height: 120px;
    z-index: 10;
    line-height: 1.1;
    font-size: 11px;
    margin-top: 20px;
    margin-left: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
  }

  .text_inner {
    font-weight: normal;
  }
</style>
