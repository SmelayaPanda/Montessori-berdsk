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
              <v-flex xs12>
                <h3 class="white--text text-xs-center">{{ meetup.title }}</h3>
              </v-flex>
              <!--Edit meetup details dialog-->
              <template v-if="this.isAdmin">
                <v-spacer></v-spacer>
                <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
                <app-edit-meetup-image-dialog :meetup="meetup"></app-edit-meetup-image-dialog>
                <app-delete-meetup :meetup="meetup"></app-delete-meetup>
              </template>
            </v-card-title>
            <v-card-media
              class="pb-0 card_image"
              :src="meetup.imageUrl"
              alt="Новости Монтессори Бердск"
            >
            </v-card-media>

            <!--Full description-->
            <v-card-text>
              <div>
                <b class="white--text">
                  <p class="mb-1 add_time">Добавлено</p>
                  <p>
                    <v-icon class="primary--text" style="margin: 10px">access_time</v-icon>
                    {{ meetup.date | date }}
                  </p>
                </b>
                <v-container row wrap class="news_descr">
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
  import AppEditMeetupDetailsDialog from './edit/EditMeetupDetailsDialog'
  import AppEditMeetupImageDialog from './edit/EditMeetupImageDialog'

  export default {
    name: 'meetup',
    props: ['id'], // dynamic parameters from router/index.js meetups/:id
    components: {
      AppDeleteMeetup,
      AppEditMeetupDetailsDialog,
      AppEditMeetupImageDialog
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
    height: 400px;
  }

  .full_card {
    border-radius: 30px;
  }

  .meetup_container {
    width: 70vw;
  }

  .card_image {
    height: 450px !important;
  }

  @media only screen and (max-width: 960px) {
    .meetup_image {
      border: 2px solid white;
      border-radius: 0 !important;
      position: absolute;
    }

    .meetup_container {
      width: 90vw;
      padding: 10px;
    }

    .card__text {
      padding: 0 !important;
    }

    .add_time {
      font-size: 10px;
      margin: 10px;
      margin-bottom: 0 !important;
    }

    .news_descr {
      padding: 5px;
    }

    .card_image {
      height: 200px !important;
    }
  }

</style>
