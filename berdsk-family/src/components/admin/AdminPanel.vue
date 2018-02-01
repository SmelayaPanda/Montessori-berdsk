<template>
  <!--Theme light (dark)-->
  <v-app light>

    <!--Navigation drawer-->
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list>
        <!--:key="item.title for dynamic assigning-->
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
        <!--Logout-->
        <v-list-tile
          v-if="this.isAuthenticatedUser"
          v-on:click="onLogout"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <!--Toolbar-->
    <v-toolbar dark class="light-blue accent-4">
      <v-toolbar-title>
        <router-link to="/admin" class="title">
          {{ mainTitle }}
        </router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon
        v-on:click="sideNav = !sideNav"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <!--Go Home-->
        <v-btn flat v-on:click="goHome">
          <v-icon left dark>home</v-icon>
          Главная
        </v-btn>


        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

        <!--Logout-->
        <v-btn
          flat
          v-if="this.isAuthenticatedUser"
          v-on:click="onLogout"
        >
          <v-icon left dark>exit_to_app</v-icon>
          Выйти
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <!--Admin panel content-->
    <div v-if="this.isAdmin">
      <v-container class="mt-0">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-title>Привет, Администратор!</v-card-title>
              <v-card-text>Для редактирования сайта у Вас появился дополнительный функционал (видный только Вам).
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>


      <!--Message table-->
      <v-container v-model="loadSignUpMessages">
        <v-layout row wrap>
          <template>
            <v-data-table
              :rows-per-page-items="[10, 20, 50, { text: 'Все', value: -1 }]"
              :headers="headers"
              :items="items"
              class="elevation-1"
              :pagination.sync="pagination"
            >
              <template slot="items" slot-scope="props">
                <v-tooltip bottom>
                  <span slot="activator">
                    {{ props.header.text }}
                  </span>
                  <span>
                    {{ props.header.text }}
                  </span>
                </v-tooltip>
              </template>

              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>

                <td class="text-xs-center primary pt-2"
                    v-if="props.item.email.trim() === 'montessoriberdsk@gmail.com'">
                  Call
                  <v-icon>call</v-icon>
                </td>
                <td v-else class="text-xs-right secondary">{{ props.item.email }}</td>

                <td class="text-xs-left">{{ props.item.date | admin_date }}</td>
                <td class="text-xs-left">{{ props.item.phone }}</td>
                <td class="text-xs-left">{{ props.item.message }}</td>
              </template>
            </v-data-table>

            <small class="mt-2 ml-2">
              Call
              <v-icon>call</v-icon>
              - поступила просьба связаться с человеком по номеру телефона!
            </small>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              Не удалось загрузить данные :(
            </v-alert>
          </template>

        </v-layout>
      </v-container>
    </div>


    <!--No admin case-->
    <v-container v-else>
      <v-card>

        <!--Alert message-->
        <v-layout row v-if="error">
          <v-flex xs12>
            <!--My component from shared/Alert registered in main.js
            :text it is a property of Alert.vue-->
            <app-alert
              v-on:dismissed="onDismissed"
              :text="error.message"
            ></app-alert>
          </v-flex>
        </v-layout>

        <v-card-title>Для получения прав администратора обратитесь к:</v-card-title>
        <v-card-text>
          <p>Алексей Азаров</p>
          <p>8 (999) 467 78 57</p>
          <p>smelayapandagm@gmail.com</p>
        </v-card-text>

      </v-card>

    </v-container>


    <!--Main-->
    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>
  export default {
    data: function () {
      return {
        sideNav: false,
        mainTitle: 'Admin Panel',
        pagination: {
          sortBy: 'date',
          descending: true
        },
        headers: [
          {
            text: 'Имя',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          {text: 'Почта', value: 'email'},
          {text: 'Дата', value: 'date'},
          {text: 'Телефон', value: 'phone'},
          {text: 'Сообщение', value: 'maessage'}
        ],
        items: []
      }
    },
    computed: {
      menuItems:
        function () {
          let menuItems = []
          if (!this.isAuthenticatedUser) {
            menuItems = [
              {icon: 'account_circle', title: 'Регистрация', link: '/signup'},
              {icon: 'lock_open', title: 'Войти', link: '/signin'}
            ]
          }
          return menuItems
        },
      loadSignUpMessages: function () {
        this.items = this.$store.getters.serviceSignUpMessages
      },
      error:
        function () {
          return this.$store.getters.error
        }
    },
    methods: {
      onLogout:
        function () {
          this.$store.dispatch('logout')
        },
      goHome:
        function () {
          this.$router.push('/')
          window.location.reload()
        },
      onDismissed:
        function () {
          this.$store.dispatch('clearError') // action
        }
    }
  }
</script>

<style scoped>
  .title {
    cursor: pointer;
    color: white;
    text-decoration: none
  }
</style>
