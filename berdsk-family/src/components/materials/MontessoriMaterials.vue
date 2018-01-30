<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="loading">
      <app-loader></app-loader>
    </v-container>


    <div class="main_bg">
      <!--v-if="!loading"-->
      <v-container class="mt-0 pt-0">
        <h1 class="primary--text mb-3 ml-5">Материалы</h1>
        <v-layout>
          <v-flex d-flex xs12 sm12 lg10 offset-lg1>


            <v-layout row wrap justify-center>
              <v-flex d-flex xs12 sm6
                      v-for="img in images"
                      :key="img.num"
                      class="m-2"
              >
                <v-card class="material_card">
                  <v-card-media :src="imagePath(img.name)" height="360px">
                  </v-card-media>
                  <v-card-title primary-title class="card_title_cust">
                    <v-flex xs12>
                      <v-expansion-panel focusable>
                        <v-expansion-panel-content class="exp_panel">
                          <div slot="header" class="white--text">
                            <h3>
                              Kangaroo Valley Safari
                              Kangaroo Valley Safari
                              Kangaroo Valley Safari
                            </h3>
                          </div>
                          <v-card class="card-text_wrapper">
                            <v-card-text>
                              <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </h4>
                            </v-card-text>
                          </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-flex>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  import Lightbox from 'vue-image-lightbox'

  export default {
    components: {
      Lightbox
    },
    data: function () {
      return {
        slideIndex: 1,
        images: [
          {name: 'svo', num: 1},
          {name: 'razvivaushSreda', num: 2},
          {name: 'RolVzroslogo', num: 3},
          {name: 'UvazhenieLichnosti', num: 4},
          {name: 'VpitivUm', num: 5},
          {name: 'svo', num: 6}
        ]
      }
    },
    methods: {
      loading:
        function () {
          return this.$store.getters.loading
        },
      imagePath: function (itemSrc) {
        return require('@/assets/img/about_us_main/' + itemSrc + '.jpg')
      }
    }
  }
</script>


<style scoped>
  .material_card {
    border: 10px solid #faaf94;
    background: rgb(166, 238, 153);
    border-radius: 50px;
  }

  .exp_panel {
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    font-size: 15px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .card_title_cust {
    padding: 0 !important;
    margin: 0 !important;
  }

  .expansion-panel {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .card-text_wrapper {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .card__media {
    border-top-left-radius: 41px !important;
    border-top-right-radius: 41px !important;
  }
</style>
