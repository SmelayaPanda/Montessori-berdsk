<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div id="map" style="width:500px; height:400px"></div>
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
        map: false,
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
      DG.marker([this.x, this.y]).addTo(this.map).bindPopup('Монтессори здесь!')
    }
  }
</script>

<style scoped>

</style>
