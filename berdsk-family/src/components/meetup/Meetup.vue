<template>
  <div class="main_bg">

    <v-container class="meetup_container">
      <!--Loading circular-->
      <v-layout row wrap v-if="loading">
        <v-flex xs12 class="text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :width="2"
            :size="70"
          >
          </v-progress-circular>
        </v-flex>
      </v-layout>

      <!--Meetup-->
      <v-layout row wrap v-else="!loading" class="mt-3">
        <v-btn fab flat class="primary" to="/meetups">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-flex xs12>
          <v-card class="secondary white--text full_card">
            <v-card-title>
              <!--Title-->
              <v-flex>
                <h3 class="white--text text-xs-center">{{ meetup.title }}</h3>
              </v-flex>
              <!--Edit meetup details dialog-->
              <template v-if="this.$store.getters.isAdmin">
                <v-spacer></v-spacer>
                <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
                <app-edit-meetup-image-dialog :meetup="meetup"></app-edit-meetup-image-dialog>
                <app-delete-meetup :meetup="meetup"></app-delete-meetup>
              </template>
            </v-card-title>

            <!--Image-->
            <div style="display: flex; justify-content: center">
              <img class="meetup_image ml-0"
                   :src="meetup.imageUrl"
                   height="400px"
                   alt="Новости Монтессори Бердск"
              />
            </div>

            <!--Full description-->
            <v-card-text>
              <div>
                <b class="white--text">
                  <p class="mb-1" style="font-size: 10px;">Добавлено</p>
                  <p>
                    <v-icon class="primary--text">access_time</v-icon>
                    {{ meetup.date | date }}
                  </p>
                </b>
                <v-container row wrap>
                  <v-flex xs12 class="ml-2">
                    <p v-html="meetup.description"></p>
                  </v-flex>
                </v-container>
              </div>
            </v-card-text>


          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import AppDeleteMeetup from './delete/DeleteMeetup'

  export default {
    name: 'meetup',
    props: ['id'], // dynamic parameters from router/index.js meetups/:id
    components: {
      AppDeleteMeetup
    },
    computed: {
      meetup:
        function () {
          return this.$store.getters.loadedMeetup(this.id)
        },
      userIsAuthenticated:
        function () {
          return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
      userIsCreator:
        function () {
          if (!this.userIsAuthenticated) {
            return false
          }
          return this.$store.getters.user.id === this.meetup.creatorId
        },
      loading:
        function () {
          return this.$store.getters.loading
        }
    }
  }
</script>

<style scoped>
  .meetup_image {
    border: 2px solid white;
    border-radius: 30px !important;
  }

  .full_card {
    border-radius: 30px;
  }

  .meetup_container {
    width: 70vw;
  }
</style>
