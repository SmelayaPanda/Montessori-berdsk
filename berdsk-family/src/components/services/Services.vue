<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="this.isLoading">
      <app-loader></app-loader>
    </v-container>

    <!--All Services-->
    <div class="main_bg">
      <v-container v-if="!this.isLoading">
        <h1 class="primary--text app_page_title">
          Услуги
          <span class="secondary--text">.</span>
          Расписание
        </h1>

        <v-container class="all_services">
          <div class="ml-4">

            <!--Scedule-->
            <app-schedule></app-schedule>

            <h2 class="primary--text">Основные услуги</h2>
            <p class="secondary--text ml-4">
              Занятия для всех детей от 0 до 12 лет в Монтессори-пространстве
              с уникальными материалами:
            </p>

            <v-layout row wrap class="ml-4">
              <v-flex xs12 sm6>
                <add-service-main-coast></add-service-main-coast>
                <p class="coast_block" v-for="(servCoast,key) in loadServiceMainCoast">
                  <span class="lesson">
                    {{ servCoast.name }}
                    <span v-html="servCoast.coast" class="coast"></span>
                  </span>
                  <edit-service-main-coast :coast="{key: key, name: servCoast.name, coast: servCoast.coast}"></edit-service-main-coast>
                  <delete-service-main-coast :service="{key: key, name: servCoast.name}"></delete-service-main-coast>
                </p>
              </v-flex>
            </v-layout>

            <h2 class="primary--text mt-2">Специальные услуги</h2>
            <add-service-group></add-service-group>

            <!--Expansion panel-->
            <div v-for="(serviceGroup,id) in loadServiceGroups" :key="id">
              <h3 class="secondary--text ml-5">{{ serviceGroup }}
                <edit-service-group :group="{id: id, name: serviceGroup }"></edit-service-group>
                <add-service-sub-group :group="{id: id, name: serviceGroup }"></add-service-sub-group>
                <delete-service-group :group="{id: id, name: serviceGroup }"></delete-service-group>
              </h3>
              <v-layout row justify-center>
                <v-flex xs12 sm10>
                  <v-expansion-panel popout focusable class="mt-2">
                    <v-expansion-panel-content
                      class="exp_panel white--text mb-2 elevation-3"
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
                        <v-card-text class="grey lighten-3 mt-0 readable--text">
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
  import AppSchedule from './Schedule'
  import AddServiceGroup from './create/AddServiceGroup'
  import AddServiceSubGroup from './create/AddServiceSubGroup'
  import AddServiceMainCoast from './create/AddServiceMainCoast'
  import EditServiceGroup from './edit/EditServiceGroup'
  import EditServiceSubGroup from './edit/EditServiceSubGroup'
  import EditServiceMainCoast from './edit/EditServiceMainCoast'
  import DeleteServiceGroup from './delete/DeleteServiceGroup'
  import DeleteServiceSubGroup from './delete/DeleteServiceSubGroup'
  import DeleteServiceMainCoast from './delete/DeleteServiceMainCoast'
  import ServiceSignUp from './ServiceSignUp'

  export default {
    name: 'services',
    components: {
      AppSchedule,
      AddServiceGroup,
      AddServiceSubGroup,
      AddServiceMainCoast,
      EditServiceGroup,
      EditServiceSubGroup,
      EditServiceMainCoast,
      DeleteServiceGroup,
      DeleteServiceSubGroup,
      DeleteServiceMainCoast,
      ServiceSignUp
    },
    data: function () {
      return {
        services: {}
      }
    },
    computed: {
      loadServiceMainCoast:
        function () {
          return this.$store.getters.serviceMainCoast
        },
      loadServiceGroups:
        function () {
          return this.$store.getters.serviceGroups
        },
      loadServiceSubGroups:
        function () {
          return this.$store.getters.serviceSubGroups
        }
    }
  }
</script>

<style scoped>
  .all_services {
    margin-left: 90px;
  }

  @media only screen and (max-width: 960px) {
    .all_services {
      margin: -10px;
      padding: 0px;
    }
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

  @media only screen and (max-width: 960px) {
    .main_title {
      margin-left: 38%;
    }
  }

  .exp_panel {
    border-radius: 30px;
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    font-size: 15px;
  }

</style>

