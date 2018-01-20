<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="loading">
      <app-loader></app-loader>
    </v-container>

    <div class="main_bg">
      <v-container v-if="!loading">
        <!--Loading circular-->
        <app-loader v-if="this.$store.getters.loading"></app-loader>

        <!--All Services-->
        <v-container class="mt-1 all_services" v-if="!this.$store.getters.loading">
          <h1 class="primary--text mb-2">Услуги</h1>

          <div class="ml-4">
            <h2 class="primary--text mt-1">Основные</h2>
            <p class="secondary--text ml-4">
              Занятия для всех детей от 0 до 12 лет в Монтессори пространстве
              с уникальными материалами:
            </p>

            <v-layout row wrap class="ml-4">
              <v-flex xs10 sm6>
                <p class="coast_block">
              <span class="lesson">
                &nbsp1 занятие (час):
                <span v-html="'&nbsp350 p&nbsp'" class="coast"></span>
              </span>
                </p>
                <p class="coast_block">
              <span class="lesson">
                4 занятия (час):
                <span class="coast">1200 р</span>
              </span>
                </p>
                <p class="coast_block">
              <span class="lesson">
                8 занятий (час):
                <span class="coast">2100 р</span>
              </span>
                </p>
              </v-flex>
            </v-layout>
            <!--</v-container>-->


            <h2 class="primary--text mt-2">Специальные</h2>
            <add-service-group></add-service-group>

            <!--Expansion panel-->
            <div v-for="(serviceGroup,id) in loadServiceGroups" :key="id">
              <h3 class="secondary--text ml-5">{{ serviceGroup }}
                <edit-service-group :group="{id: id, name: serviceGroup }"></edit-service-group>
                <add-service-sub-group :group="{id: id, name: serviceGroup }"></add-service-sub-group>
                <delete-service-group :group="{id: id, name: serviceGroup }"></delete-service-group>
              </h3>
              <v-layout row justify-center>
                <v-flex xs10>
                  <v-expansion-panel popout focusable class="mt-2">
                    <v-expansion-panel-content
                      style="border-radius: 30px; background-color: #bced96"
                      class=" white--text mb-2"
                      :title="subG.title"
                      :coast="subG.coast"
                      :schedule="subG.schedule"
                      :description="subG.description"
                      :key="subId"
                      v-for="(subG, subId) in loadServiceSubGroups" v-if="subG.parentId === id"
                    >
                      <div hidden>{{ subG.id = subId }}</div>
                      <div slot="header">{{ subG.title }}
                        <edit-service-sub-group :subGroup="subG"></edit-service-sub-group>
                        <delete-service-sub-group :subGroup="subG"></delete-service-sub-group>
                      </div>
                      <v-card>
                        <v-card-text class="grey lighten-3 mt-0 secondary--text">
                          <v-container>
                            <p style="font-weight: normal" v-html="subG.description"></p>
                            <v-icon class="primary--text">bookmark</v-icon>
                            <span>{{ subG.coast }}</span>
                            <v-spacer></v-spacer>
                            <v-icon class="primary--text">access_time</v-icon>
                            {{ subG.schedule }}
                          </v-container>
                          <service-sign-up :sign-group="{ group: serviceGroup, service: subG.title }"></service-sign-up>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-layout>
            </div>
          </div>


        </v-container>
      </v-container>
    </div>
  </div>

</template>

<script>
  import AddServiceGroup from './create/AddServiceGroup'
  import AddServiceSubGroup from './create/AddServiceSubGroup'
  import EditServiceGroup from './edit/EditServiceGroup'
  import EditServiceSubGroup from './edit/EditServiceSubGroup'
  import DeleteServiceGroup from './delete/DeleteServiceGroup'
  import DeleteServiceSubGroup from './delete/DeleteServiceSubGroup'
  import ServiceSignUp from './ServiceSignUp'

  export default {
    name: 'services',
    components: {
      AddServiceGroup,
      AddServiceSubGroup,
      EditServiceGroup,
      EditServiceSubGroup,
      DeleteServiceGroup,
      DeleteServiceSubGroup,
      ServiceSignUp
    },
    data: function () {
      return {
        services: {}
      }
    },
    computed: {
      loadServiceGroups:
        function () {
          return this.$store.getters.serviceGroups
        },
      loadServiceSubGroups:
        function () {
          return this.$store.getters.serviceSubGroups
        },
      loading:
        function () {
          return this.$store.getters.loading
        }
    }
  }
</script>

<style scoped>
  .all_services {
    margin-left: 90px;
  }

  .lesson {
    border: 2px solid #faaf94;
    border-radius: 21px;
    width: 80%;
    padding: 10px 0 10px 20px;
    color: #faaf94;
  }

  .coast {
    border-top: 2px solid #faaf94;
    border-bottom: 2px solid #faaf94;
    border-left: 2px solid #faaf94;
    border-radius: 21px;
    padding: 10px;
    margin-left: 10px;
    background-color: #bced96;
    color: white;
  }

  .coast_block {
    padding-top: 16px;
  }

  .card__text {
    border-bottom-right-radius: 22px;
    border-bottom-left-radius: 22px;
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }

  .card__text {
    background-color: white !important;
  }
</style>

