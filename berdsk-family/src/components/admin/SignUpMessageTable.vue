<template>
  <!--Message table-->
  <v-container v-model="loadSignUpMessages">
    <h2 class="primary--text">Новые заявки!</h2>
    <v-btn class="primary white--text"
           @click="archiveRequest"
    >
      <v-icon left>beenhere</v-icon>
      В архив
    </v-btn>

    <v-layout>
      <v-data-table
        :rows-per-page-text="'Заявок на странице'"
        :rows-per-page-items="[5, 10, 20, { text: 'Все', value: -1 }]"
        v-model="selected"
        select-all
        :headers="headers"
        :items="items"
        :pagination.sync="pagination"
        item-key="name"
        class="elevation-1"
      >
        <template slot="headers" slot-scope="props">
          <tr class="primary white--text">
            <th>
              <v-checkbox
                primary
                hide-details
                @click.native="toggleAll"
                :input-value="props.all"
                :indeterminate="props.indeterminate"
              ></v-checkbox>
            </th>
            <th v-for="header in props.headers" :key="header.text"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                @click="changeSort(header.value)"
            >
              <v-icon>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click="props.selected = !props.selected">
            <td>
              <v-checkbox
                primary
                hide-details
                :input-value="props.selected"
              ></v-checkbox>
            </td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.phone }}</td>
            <td class="text-xs-right">{{ props.item.date | admin_date}}</td>
            <td class="text-xs-right">{{ props.item.message }}</td>
          </tr>
        </template>
      </v-data-table>

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
          {text: 'Телефон', value: 'phone'},
          {text: 'Дата', value: 'date'},
          {text: 'Сообщение', value: 'message'}
        ],
        items: [],
        selected: []
      }
    },
    computed: {
      loadSignUpMessages: function () {
        let request = this.$store.getters.serviceSignUpMessages
        for (let val in request) {
          if (request[val].status !== 'closed') {
            let obj = {}
            obj.id = val
            obj.name = request[val].name
            obj.date = request[val].date
            obj.phone = request[val].phone
            obj.message = request[val].message
            this.items.push(obj)
          }
        }
      }
    },
    methods: {
      toggleAll: function () {
        if (this.selected.length) this.selected = []
        else this.selected = this.items.slice()
      },
      changeSort: function (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      archiveRequest: function () {
        let selectedItems = this.selected
        for (let item in selectedItems) {
          this.$store.dispatch('markAsRead', {id: selectedItems[item].id, status: 'closed'})
        }
      }
    }
  }
</script>

<style scoped>

</style>
