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
                <address style="font-style: normal; font-weight: bold">Адрес: {{ loadContacts.address }}</address>
                <span>
                    <p>  Телефон:
                      <a :href="'tel://' + loadContacts.phone.replace(/[ -]/g,'')">
                        {{ loadContacts.phone }}
                      </a>
                    </p>
                  <p>Электронная почта:
                    <a :href="'mailto:' + loadContacts.email + '?Subject=Привет монтессори!&body=Спасибо!'" target="_blank">
                      {{ loadContacts.email }}
                    </a>
                  </p>

                  <edit-contacts :contacts="loadContacts"></edit-contacts>

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
  import EditContacts from './edit/EditContacts'
  import DoubleGisMap from './DoubleGisMap'

  export default {
    name: 'contacts',
    data: function () {
      return {}
    },
    components: {
      DoubleGisMap,
      EditContacts
    },
    methods: {},
    created: function () {
      this.$store.dispatch('loadContacts')
    },
    computed: {
      loadContacts:
        function () {
          return this.$store.getters.contacts
        }
    }
  }
</script>

<style scoped>
  .icons {
    width: 40px;
    height: 40px;
  }
</style>
