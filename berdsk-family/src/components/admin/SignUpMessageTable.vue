<template>
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
                v-if="props.item.email.trim() === this.appMail">
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
</template>

<script>
  export default {
    name: 'sign-up-message-table',
    data: function () {
      return {
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
      loadSignUpMessages: function () {
        this.items = this.$store.getters.serviceSignUpMessages
      }
    }
  }
</script>

<style scoped>

</style>
