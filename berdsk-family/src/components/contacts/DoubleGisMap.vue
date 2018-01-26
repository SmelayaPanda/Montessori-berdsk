<template>
  <v-container fluid style="padding: 0;">
    <v-layout row wrap>
      <v-flex>
        <v-container id="map" style="height: 450px"></v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import DG from '2gis-maps'

  export default {
    name: 'double-gis-map',
    data: function () {
      return {
        y: 83.060181,
        x: 54.749928
      }
    },
    components: {
      DG
    },
    mounted: function () {
      // 'map' - element #id
      this.map = DG.map('map', {
        'center': [this.x, this.y],
        'zoom': 15
      })
      DG.marker([this.x, this.y]).addTo(this.map).bindPopup('Детский центр Монтессори здесь!')
    }
  }
</script>

<style scoped>

</style>
