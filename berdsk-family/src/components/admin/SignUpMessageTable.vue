<template>
  <!--Message table-->
  <v-container v-model="loadSignUpMessages">

    <v-btn class="primary white--text"
           @click="archiveRequest"
    >
      <v-icon left>beenhere</v-icon>
      Обработано
    </v-btn>

    <v-layout>
      <v-data-table
        v-model="selected"
        select-all
        :headers="headers"
        :items="items"
        :pagination.sync="pagination"
        item-key="name"
        class="elevation-1"
      >
        <template slot="headers" slot-scope="props">
          <tr>
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
            <td class="text-xs-right">{{ props.item.date }}</td>
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
          {text: 'Дата', value: 'date'},
          {text: 'Телефон', value: 'phone'},
          {text: 'Сообщение', value: 'message'}
        ],
        items: [],
        selected: []
      }
    },
    computed: {
      loadSignUpMessages: function () {
        this.items = this.$store.getters.serviceSignUpMessages
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
        console.log(this.selected)
      }
    }
  }
</script>

<style scoped>

</style>
