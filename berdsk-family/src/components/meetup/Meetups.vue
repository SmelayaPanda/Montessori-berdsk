<template>
  <v-container>
    <v-container class="mt-3">
      <h1 class="primary--text">Новости</h1>
    </v-container>

    <v-container v-show="this.$store.getters.isAdmin">
      <v-btn to="meetup/new">Создать новость</v-btn>
    </v-container>

    <v-layout row wrap v-for="meetup in pageMeetups" :key="meetup.id" class="mb-2">
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
  </v-container>

</template>

<script>
  export default {
    name: 'meetups',
    data: function () {
      return {
        page: 1
      }
    },
    computed: {
      pageMeetups:
        function () {
          return this.$store.getters.loadedMeetups.slice((this.page - 1) * 5, this.page * 5)
        },
      pageCount:
        function () {
          return 1 + parseInt(this.$store.getters.loadedMeetups.length) / 5
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
