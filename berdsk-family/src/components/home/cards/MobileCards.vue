<template>
  <div>

    <img src="../../../assets/img/mobile/aboutMobile.png" height="100%" width="100%"/>
    <v-parallax src="../../../static/img/home/parallax.png" class="parallax_main">
      <v-container>
        <v-layout class="pl-2 ml-5 mt-5">
          <v-flex xs12>
            <img src="@/assets/img/mobile/cardTitle.png" height="47" width="210"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="@/assets/img/mobile/card1.png" height="162" width="320"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="@/assets/img/mobile/card2.png" height="160" width="320"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="@/assets/img/mobile/card3.png" height="163" width="320"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="@/assets/img/mobile/card4.png" height="165" width="300"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="@/assets/img/mobile/card5.png" height="157" width="320"/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="@/assets/img/mobile/card6.png" height="170" width="320"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>

  </div>
</template>

<script>
  export default {
    name: 'mobile-cards'
  }
</script>

<style scoped>
  .parallax_main {
    height: 1100px !important;
    background-color: #bced96;
    background-size: 30%;
  }
</style>
