<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="loading">
      <app-loader></app-loader>
    </v-container>

    <div class="main_bg">
      <v-container v-if="!loading">
        <h1 class="primary--text app_page_title">Контакты</h1>

        <v-layout row wrap class="mt-2">
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-card class="full_contact_card elevation-15">
              <v-container>
                <v-layout>
                  <v-flex xs12>
                    <span class="headline primary--text" align="center">
                      <p>«Монтессори-пространство» </p>
                         <p>в Бердске.</p>
                      <p>Детский развивающий центр.</p>
                      <!--2Gis map-->
                      <double-gis-map></double-gis-map>
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-card-title class="pt-0">
                <div class="ml-3 secondary--text">
                  <v-flex>
                    <span class="secondary--text"><b>Мы рядом!</b></span>
                  </v-flex>
                  <span class="pb-5">Искитим, Посёлок Новый, Посёлок Геологов, Академгородок</span>
                  <address style="font-style: normal; font-weight: bold; margin-top: 5px">Адрес:
                    <span class="secondary--text"><b>{{ loadContacts.address }}</b></span>
                  </address>
                  <span class="secondary--text">  Телефон:
                    <a :href="'tel://' + loadContacts.phone.replace(/[ -]/g,'')">
                      <span class="secondary--text"><b>{{ loadContacts.phone }}</b></span>
                    </a>
                  </span>
                  <p>Электронная почта:
                    <a :href="'mailto:' + loadContacts.email + '?Subject=Привет монтессори!&body=Спасибо!'"
                       target="_blank">
                      <span class="secondary--text"><b>{{ loadContacts.email }}</b></span>
                    </a>
                  </p>
                  <edit-contacts :contacts="loadContacts"></edit-contacts>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-container class="pt-0 pr-1 pl-1">
                  <v-layout row wrap>
                    <v-spacer></v-spacer>
                    <v-flex>
                      <v-btn fab class="primary" onclick="window.open('https://ok.ru/group/55127112876047', '_blank')">
                        <img class="icons" src="@/assets/img/icons/od.png" alt="Однокласники Монтессори Бердск"
                        style="height: 37px; width: 37px;">
                      </v-btn>
                      <v-btn fab class="primary" onclick="window.open('https://vk.com/club153200073', '_blank')">
                        <img class="icons" src="@/assets/img/icons/vk.png" alt="Вконтакте Монтессори Бердск">
                      </v-btn>
                      <v-btn fab class="primary"
                             onclick="window.open('https://www.instagram.com/montessori_prostranstvo/', '_blank')">
                        <img class="icons" src="@/assets/img/icons/instagram.png" alt="Instagram Монтессори Бердск">
                      </v-btn>
                      <v-btn fab class="primary"
                             onclick="window.open('http://www.montessori-material.ru/', '_blank')">
                        <img class="icons" src="@/assets/img/icons/partner.png" alt="Партнеры Монтессори Бердск"
                        style="padding-bottom: 5px">
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
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
        },
      loading:
        function () {
          return this.$store.getters.loading
        }
    }
  }
</script>

<style scoped>
  .icons {
    width: 40px;
    height: 40px;
  }

  .full_contact_card {
    border-radius: 30px;
  }
</style>
