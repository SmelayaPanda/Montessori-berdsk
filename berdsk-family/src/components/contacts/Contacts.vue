<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="loading">
      <app-loader></app-loader>
    </v-container>

    <div class="main_bg">
      <v-container v-if="!loading">
        <h1 class="primary--text contacts mt-1">Контакты</h1>

        <v-layout row wrap class="mt-3">
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
                    <span class="primary--text">Мы рядом!</span>
                  </v-flex>
                  <span>Искитим, Посёлок Новый, Посёлок Геологов, Академгородок</span><br>
                  <address style="font-style: normal; font-weight: bold">Адрес:
                    <span class="primary--text">{{ loadContacts.address }}</span>
                  </address>
                  <span>  Телефон:
                    <a :href="'tel://' + loadContacts.phone.replace(/[ -]/g,'')">
                      {{ loadContacts.phone }}
                    </a>
                  </span>
                  <p>Электронная почта:
                    <a :href="'mailto:' + loadContacts.email + '?Subject=Привет монтессори!&body=Спасибо!'"
                       target="_blank">
                      {{ loadContacts.email }}
                    </a>
                  </p>
                  <edit-contacts :contacts="loadContacts"></edit-contacts>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-container class="pt-0">
                  <v-layout row wrap>
                    <v-spacer></v-spacer>
                    <v-flex>
                      <v-btn fab class="primary" onclick="window.open('https://vk.com/club153200073', '_blank')">
                        <img class="icons" src="@/assets/img/icons/vk.png" alt="">
                      </v-btn>
                      <v-btn fab class="primary"
                             onclick="window.open('https://www.instagram.com/montessori_prostranstvo/', '_blank')">
                        <img class="icons" src="@/assets/img/icons/instagram.png" alt="">
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

  .contacts {
    margin-left: 90px;
  }

  .full_contact_card {
    border-radius: 30px;
  }
</style>
