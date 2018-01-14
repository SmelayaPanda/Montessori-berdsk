<template>
  <v-container>
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
    <v-layout row wrap v-else="!loading" class="mt-5">
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <!--Title-->
            <h3 class="primary--text">{{ meetup.title }}</h3>
            <!--Edit meetup details dialog-->
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <!--:meetup - props from EditMeetupDetailsDialog.vue-->
              <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
              <app-edit-meetup-image-dialog :meetup="meetup"></app-edit-meetup-image-dialog>
            </template>
          </v-card-title>

          <!--Image-->
          <v-card-media
            :src="meetup.imageUrl"
            height="400px">
          </v-card-media>

          <!--Full description-->
          <v-card-text>
            <div>
              <b class="secondary--text">
                <p>{{ meetup.location }}</p>
                <p>
                  <v-icon>alarm_on</v-icon>
                  {{ meetup.date | date }}
                </p>
              </b>
              <p>{{ meetup.description }}</p>
            </div>
          </v-card-text>


        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'meetup',
    props: ['id'], // dynamic parameters from router/index.js meetups/:id
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

</style>
