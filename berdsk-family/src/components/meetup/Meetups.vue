<template>
  <v-container>
    <v-container class="mt-3">
      <h1 class="primary--text">Новости</h1>
    </v-container>

    <v-container v-show="this.$store.getters.isAdmin">
      <v-btn to="meetup/new">Создать новость</v-btn>
    </v-container>

    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="primary">
          <v-container fluid>
            <v-layout row>
              <!--5/12 of the container length for extra small devices-->
              <!--4/12 of the container length for small devices-->
              <!--3/12 of the container length for medium devices-->
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="140px">
                  <!-- with "contain" image wouldn't cut-->
                </v-card-media>
              </v-flex>

              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <!-- "--text" works for all colors
                  without "--text" will changed background color-->
                    <h2 class="white--text">{{ meetup.title }}</h2>
                    <!-- | date means add filter registered as DateFilter -->
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat light :to="'/meetups/' + meetup.id">
                    <v-icon left>arrow_forward</v-icon>
                    просмотр
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'meetups',
    computed: {
      meetups:
        function () {
          return this.$store.getters.loadedMeetups
        }
    }
  }
</script>

<style scoped>
  .card {
    border-radius: 30px !important;
  }

  .card__media {
    border-radius: 15px !important;
  }

</style>
