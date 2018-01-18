<template>
  <v-container>
    <!--Loading circular-->
    <app-loader v-if="this.$store.getters.loading"></app-loader>

    <!--All Services-->
    <v-container class="mt-1 ml-3" v-if="!this.$store.getters.loading">
      <h1 class="primary--text mb-2">Услуги</h1>

      <h1 class="primary--text mt1">Основные</h1>
      <p class="secondary--text">
        Занятия для всех детей от 0 до 12 лет в Монтессори пространстве
        с уникальными материалами:
      </p>

      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <ul class="secondary--text ml-3">
              <li>
                1 занятие (час):
                <v-chip color="primary" text-color="white">
                  350 р
                </v-chip>
              </li>
              <li>
                4 занятия (час):
                <v-chip color="primary" text-color="white">1200 р</v-chip>
              </li>
              <li>
                8 занятий (час):
                <v-chip color="primary" text-color="white">2100 р</v-chip>
              </li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>


      <h1 class="primary--text mt-2">Специальные</h1>
      <add-service-group></add-service-group>

      <!--Expansion panel-->
      <div v-for="(serviceGroup,id) in loadServiceGroups" :key="id">
        <h1 class="secondary--text ml-5">{{ serviceGroup }}
          <edit-service-group :group="{id: id, name: serviceGroup }"></edit-service-group>
          <add-service-sub-group :group="{id: id, name: serviceGroup }"></add-service-sub-group>
          <delete-service-group :group="{id: id, name: serviceGroup }"></delete-service-group>
        </h1>

        <v-layout row justify-center>
          <v-flex xs10>
            <v-expansion-panel popout focusable class="mt-2">
              <v-expansion-panel-content
                style="border-radius: 10px"
                class="primary mb-2"
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
                  <v-card-text class="grey lighten-3 mt-0">
                    <v-container>
                      <p v-html="subG.description"></p>
                      <v-icon>bookmark</v-icon>
                      {{ subG.coast }}
                      <v-spacer></v-spacer>
                      <v-icon>access_time</v-icon>
                      {{ subG.schedule }}
                    </v-container>
                    <service-sign-up :sign-group="{ group: serviceGroup, service: subG.title }"></service-sign-up>
                    <!--<v-btn class="primary&#45;&#45;text">-->
                    <!--Записаться-->
                    <!--<v-icon class="ml-2">done</v-icon>-->
                    <!--</v-btn>-->
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-layout>
      </div>


    </v-container>
  </v-container>
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
        }
    }
  }
</script>

<style scoped>
</style>
