<template>
  <v-container>
    <v-container class="mt-3 ml-0">
      <h1 class="primary--text">Контакты</h1>

      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-media
              class="primary--text"
              height="600px"
              src="/static/doc-images/cards/docks.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline" align="center">
                      <p>«Монтессори-пространство» </p>
                         <p>в Бердске.</p>
                      <p>Детский развивающий центр.</p>
                      <double-gis-map></double-gis-map>
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div>
                <span class="grey--text">Мы рядом</span><br>
                <span>Искитим, Посёлок Новый, Посёлок Геологов, Академгородок</span><br>
                <address>Адрес: ул. Красная Сибирь, 124</address>
                <span>
                    <p>  Телефон:
                      <a href="tel://8-913-460-8270">+7 913 460 82 70</a>
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
  import DoubleGisMap from './DoubleGisMap'

  export default {
    name: 'contacts',
    components: {
      DoubleGisMap
    }
  }
</script>

<style scoped>
  .icons {
    width: 40px;
    height: 40px;
  }
</style>
