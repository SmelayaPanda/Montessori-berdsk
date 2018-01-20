<template>
  <div class="about_bg">
    <v-container>

      <!--Loading circular-->
      <app-loader v-if="loading"></app-loader>


      <!--Meetups-->
      <div v-if="!loading">
        <v-container class="mt-1">
          <h1 class="primary--text meetups_title">Новости</h1>
        </v-container>

        <v-container v-show="this.$store.getters.isAdmin">
          <v-btn fab class="primary white--text" to="meetup/new">
            <v-icon>add</v-icon>
          </v-btn>
        </v-container>

        <v-layout row wrap
                  v-for="meetup in pageMeetups"
                  :key="meetup.id"
                  class="mb-2">
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-card class="primary news_card">
              <div @click="viewMeetup(meetup.id)">
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs5 sm4 md3>
                      <v-card-media
                        :src="meetup.imageUrl"
                        height="140px">
                        <!-- with "contain" image wouldn't cut-->
                      </v-card-media>
                    </v-flex>

                    <v-flex xs7 sm8 md9 class="ml-3">
                      <v-card-title primary-title>
                        <div class="secondary--text">
                          <!-- "--text" works for all colors
                        without "--text" will changed background color-->
                          <h2 class="white--text">{{ meetup.title | snippet }}</h2>
                          <!-- | date means add filter registered as DateFilter -->
                          <p class="mb-1" style="font-size: 10px;">
                            Добавлено {{ meetup.date | date }}
                          </p>
                        </div>
                      </v-card-title>
                    </v-flex>
                  </v-layout>
                </v-container>
              </div>
            </v-card>
          </v-flex>
        </v-layout>

        <!--Pagination-->
        <template>
          <div class="text-xs-center">
            <v-pagination
              total-visible="5"
              :length="pageCount"
              v-model="page"
            ></v-pagination>
          </div>
        </template>
      </div>
    </v-container>
  </div>

</template>

<script>
  export default {
    name: 'meetups',
    data: function () {
      return {
        page: 1
      }
    },
    methods: {
      viewMeetup:
        function (meetupId) {
          this.$router.push('/meetups/' + meetupId)
        }
    },
    computed: {
      pageMeetups:
        function () {
          return this.$store.getters.loadedMeetups.slice((this.page - 1) * 5, this.page * 5)
        },
      pageCount:
        function () {
          return 1 + this.$store.getters.loadedMeetups.length / 5
        },
      loading:
        function () {
          return this.$store.getters.loading
        }
    }
  }
</script>

<style scoped>
  .about_bg {
    background: url("../../../static/img/common_background.png") repeat;
    background-size: 100%;
    position: relative;
    z-index: 1;
  }

  .card {
    border-radius: 30px !important;
    transition: all 0.5s;
  }

  .news_card:hover {
    box-shadow: 5px 5px 38.8px 1.2px rgba(181, 181, 181, 0.9), 5px 5px 38.8px 1.2px rgba(181, 181, 181, 0.9);
    cursor: pointer;
  }

  .card__media {
    margin-left: 20px;
    width: 140px;
    height: 140px;
    border-radius: 140px !important;
    border: 2px solid white !important;
  }

  .meetups_title {
    margin-left: 90px;
  }
</style>
