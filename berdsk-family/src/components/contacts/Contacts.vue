<template>
  <v-container>

    <!--Loading circular-->
    <app-loader v-if="this.$store.getters.loading"></app-loader>

    <v-container class="mt-3 ml-0" v-if="!this.$store.getters.loading">
      <h1 class="primary--text">Контакты</h1>

      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card>
            <v-card-media
              class="primary--text"
              height="650px"
              src="/static/doc-images/cards/docks.jpg"
            >
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <span class="headline" align="center">
                      <p>«Монтессори-пространство» </p>
                         <p>в Бердске.</p>
                      <p>Детский развивающий центр.</p>
                      <!--2Gis map-->
                      <double-gis-map></double-gis-map>
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div>
                <span class="grey--text">Мы рядом!</span><br>
                <span>Искитим, Посёлок Новый, Посёлок Геологов, Академгородок</span><br>
                <address>Адрес: ул. Красная Сибирь, 124</address>
                <span>
                    <p>  Телефон:
                      <a :href="'tel://' + this.$store.getters.phone">{{ this.$store.getters.phone }}</a>
                      <edit-phone></edit-phone>
                    </p>
                  <br>
                  <p>Электронная почта:
                    <a href="mailto:detiM2017@gmail.com?Subject=Hello%20again" target="_blank">
                      detiM2017@gmail.com
                    </a>
                  </p>

                </span>
              </div>
            </v-card-title>
            <v-card-actions>

              <v-container>
                <v-layout row wrap>
                  <v-spacer></v-spacer>
                  <v-flex>
                    <v-btn fab class="primary" onclick="window.open('https://vk.com/club153200073', '_blank')">
                      <img class="icons" src="../../../static/img/icons/vk.png" alt="">
                    </v-btn>
                    <v-btn fab class="primary"
                           onclick="window.open('https://www.instagram.com/montessori_prostranstvo/', '_blank')">
                      <img class="icons" src="../../../static/img/icons/instagram.png" alt="">
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>

</template>


<script>
  import EditPhone from './edit/EditPhone'
  import DoubleGisMap from './DoubleGisMap'

  export default {
    name: 'contacts',
    data: function () {
      return {
        phone: ''
      }
    },
    components: {
      DoubleGisMap,
      EditPhone
    },
    methods: {},
    created: function () {
      this.$store.dispatch('loadPhone')
    }
  }
</script>

<style scoped>
  .icons {
    width: 40px;
    height: 40px;
  }
</style>
