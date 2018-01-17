<template>
  <v-dialog width="400px" persistent v-model="editDialog" v-show="this.$store.getters.isAdmin">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <!--Title-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title><h3 class="secondary--text">Редактировать контакты</h3></v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>

            <!--Address-->
            <v-card-text>
              <v-text-field
                name="address"
                label="Адрес"
                id="address"
                v-model="editAddress"
                required
              >
              </v-text-field>
            </v-card-text>

            <!--Phone-->
            <v-card-text>
              <v-text-field
                name="phone"
                label="Телефон"
                id="phone"
                v-model="editPhone"
                required
              >
              </v-text-field>
            </v-card-text>

            <!--Mail-->
            <v-card-text>
              <v-text-field
                name="email"
                label="Почта"
                id="email"
                v-model="editEmail"
                required
              >
              </v-text-field>
            </v-card-text>

          </v-flex>
        </v-layout>

        <!--Close & Save Buttons-->
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat class="secondary--text" v-on:click="editDialog = false">Закрыть</v-btn>
              <v-btn flat class="primary--text" v-on:click="onSaveChanges" :disabled="checkValid">Сохранить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>

      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'edit-contacts',
    props: ['contacts'],
    data: function () {
      return {
        editDialog: false,
        editAddress: this.contacts.address,
        editPhone: this.contacts.phone,
        editEmail: this.contacts.email
      }
    },
    methods: {
      onSaveChanges:
        function () {
          this.editDialog = false
          this.$store.dispatch('editContacts', {
            address: this.editAddress,
            phone: this.editPhone,
            email: this.editEmail
          })
        }
    },
    computed: {
      checkValid: function () {
        return this.editAddress === '' || this.editPhone === '' || this.newEmail === ''
      }
    }
  }
</script>

<style scoped>

</style>
