<template>
  <div>
    <v-parallax src="../../../static/img/home/parallax.png" class="parallax_main">
      <v-container>
        <v-layout class="mt-2 pb-0">
          <v-flex xs12>
            <p class="white--text mb-0 text-xs-center">Мы подобрали методику основываясь на</p>
            <h3 class="secondary--text text-xs-center">Возрастные группы</h3>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container v-for="card in cards"
                   :key="card.src"
                   style="padding: 0 !important;"
      >
        <v-layout class="m-0 p-0">
          <v-flex xs12 class="m-0 p-0">
            <div>
              <img :src="imagePath(card.src)"
                   class="card_img"
              />
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>

  </div>
</template>

<script>
  export default {
    name: 'mobile-cards',
    data: function () {
      return {
        cards: [
          {src: '1'},
          {src: '2'},
          {src: '3'},
          {src: '4'},
          {src: '5'},
          {src: '6'}
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
    height: 1100px !important;
    background-color: #bced96;
    background-size: 30%;
  }

  .card_img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

</style>
