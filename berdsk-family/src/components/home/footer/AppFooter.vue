<template>
   <v-container >
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <!--<v-footer>-->

          <div dark class="pa-3" style="position: absolute">
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
          </div>
          <!--</v-footer>-->

        </v-flex>
     </v-layout>
   </v-container>
</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>

<style scoped>

</style>
