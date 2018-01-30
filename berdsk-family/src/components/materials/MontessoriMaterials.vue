<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="loading">
      <app-loader></app-loader>
    </v-container>

    <div class="main_bg">
      <v-container v-if="!loading">
        <h1 class="primary--text app_page_title">Материалы</h1>

        <v-container v-show="this.$store.getters.isAdmin">
          <v-btn fab class="primary white--text" to="materials/new">
            <v-icon>add</v-icon>
          </v-btn>
        </v-container>

        <v-layout class="pt-1">
          <v-flex d-flex xs12 sm12 lg10 offset-lg1>
            <v-layout row wrap justify-center>
              <v-flex d-flex xs12 sm6
                      v-for="material in loadMaterials"
                      :key="material.id"
                      class="m-2"
              >
                <v-card class="material_card">
                  <v-card-media :src="material.imageUrl" height="360px">
                  </v-card-media>
                  <v-card-title primary-title class="card_title_cust">
                    <v-flex xs12>
                      <v-expansion-panel focusable>
                        <v-expansion-panel-content class="exp_panel">
                          <div slot="header" class="white--text">
                            <h3>
                              {{ material.title }}
                            </h3>
                          </div>
                          <v-card class="card-text_wrapper">
                            <v-card-text>
                              <h4>
                                {{ material.description }}
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
  import AddMaterial from './create/AddMaterial'

  export default {
    components: {
      AddMaterial
    },
    data: function () {
      return {}
    },
    computed: {
      loadMaterials:
        function () {
          return this.$store.getters.materials
        },
      loading:
        function () {
          return this.$store.getters.loading
        }
    }
  }
</script>


<style scoped>
  .material_card {
    border: 9px solid #faaf94;
    background: rgb(166, 238, 153);
    border-radius: 50px;
    box-shadow: 2px 2px #dbdbdb;
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

  .expansion-panel__header {
    height: 80px;
  }
</style>
