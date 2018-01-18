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
          v-if="isAuthenticatedUser"
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
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <!--
          Icon: just give name of icon from https://material.io/icons/
          and replace space with underscore!
          -->
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

        <!--Logout-->
        <v-btn
          flat
          v-if="isAuthenticatedUser"
          v-on:click="onLogout"
        >
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <!--Main-->
    <main>
      <router-view></router-view>
    </main>


    <!--Admin panel content-->
    <v-layout row wrap>
      <v-flex class="ml-5">
        <p>
          Перейти на основной сайт:
          <v-btn @click="goHome">Главная</v-btn>
        </p>
      </v-flex>
    </v-layout>

    <v-container v-if="isAdmin">
      <h2>Hello, Administrator!</h2>
      <p>Для редактирования сайта у Вас появился дополнительный функционал (видный только Вам).</p>
    </v-container>
    <v-container v-else>
      <p>Hello, for administrator rights, please contact:</p>
      <p>Alexey Azarov</p>
      <p>8 (999) 467 78 57</p>
      <p>smelayapandagm@gmail.com</p>
    </v-container>

    <v-container>

      <v-data-table
        v-bind:headers="headers"
        :items="loadSignUpMessages"
        hide-actions
        class="elevation-5"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.email }}</td>
          <td class="text-xs-right">{{ props.item.phone }}</td>
          <td class="text-xs-right">{{ props.item.message }}</td>
          <td class="text-xs-right">{{ props.item.data }}</td>
        </template>
        <template slot="no-data">
          <v-alert :value="true" color="error" icon="warning">
            Sorry, nothing to display here :(
          </v-alert>
        </template>
      </v-data-table>
    </v-container>


  </v-app>
</template>

<script>
  export default {
    data: function () {
      return {
        sideNav: false,
        mainTitle: 'Admin Panel',
        headers: [
          {
            text: 'Имя',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {text: 'Почта', value: 'Почта'},
          {text: 'Телефон', value: 'Телефон'},
          {text: 'Сообщение', value: 'Сообщение'},
          {text: 'Дата', value: 'Дата'}
        ]
      }
    },
    computed: {
      isAuthenticatedUser:
        function () {
          return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
      isAdmin: function () {
        return this.$store.getters.isAdmin
      },
      menuItems:
        function () {
          let menuItems = []
          if (!this.isAuthenticatedUser) {
            menuItems = [
              {icon: 'account_circle', title: 'Sign up', link: '/signup'},
              {icon: 'lock_open', title: 'Sign in', link: '/signin'}
            ]
          }
          return menuItems
        },
      loadSignUpMessages: function () {
        return this.$store.getters.serviceSignUpMessages
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
