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
              <v-btn flat class="primary--text" v-on:click="onSaveChanges">Сохранить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>

      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'edit-phone',
    props: ['contacts'],
    data: function () {
      return {
        editDialog: false,
        editAddress: '',
        editPhone: '',
        editEmail: ''
      }
    },
    methods: {
      onSaveChanges:
        function () {
          let newAddress = this.editAddress.trim()
          let newPhone = this.editPhone.trim()
          let newEmail = this.editEmail.trim()
          if (newAddress === '' || newPhone === '' || newEmail === '') {
            return
          }
          this.editDialog = false
          this.$store.dispatch('editContacts', {
            address: newAddress,
            phone: newPhone,
            email: newEmail
          })
        }
    }
  }
</script>

<style scoped>

</style>
