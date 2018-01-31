<template>
  <div>
    <!--Loading circular-->
    <v-container v-if="loading">
      <app-loader></app-loader>
    </v-container>

    <div class="main_bg">
      <v-container fluid v-if="!loading">
        <h1 class="primary--text app_page_title">Материалы</h1>

        <v-container v-show="this.$store.getters.isAdmin">
          <v-btn fab class="primary white--text" to="materials/new">
            <v-icon>add</v-icon>
          </v-btn>
        </v-container>

        <v-layout class="pt-1">
          <v-flex xs12 sm12 lg10 offset-lg1>
            <v-layout row wrap justify-center>
              <v-flex xs12 sm5
                      v-for="material in loadMaterials"
                      :key="material.id"
                      class="m-2 img_container"
              >
                <edit-material-description :material="material"></edit-material-description>
                <delete-material :material="material"></delete-material>
                <div class="image_border"></div>
                <div :style="`background-image: url( ${material.imageUrl} );
                              background-size: cover;
                              height: 360px;
                              width: auto;
                              border-radius: 36px;
                              `"
                >
                </div>
                <div class="img_overlay">
                  <div class="img_text">
                    <h3> {{ material.title | long_snippet }} </h3>
                    <hr class="primary" style="margin: 10px">
                    <p style="font-weight: normal"> {{ material.description | long_snippet }} </p>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  import AddMaterial from './create/AddMaterial'
  import DeleteMaterial from './delete/DeleteMaterial'
  import EditMaterialDescription from './edit/EditMaterialDescription'

  export default {
    components: {
      AddMaterial,
      DeleteMaterial,
      EditMaterialDescription
    },
    data: function () {
      return {}
    },
    computed: {
      loadMaterials:
        function () {
          return this.$store.getters.materials
        },
      loading:
        function () {
          return this.$store.getters.loading
        }
    }
  }
</script>


<style scoped>

  .img_container {
    position: relative;
    width: 50%;
    border: 9px solid #faaf94;
    border-radius: 45px;
    box-shadow: 2px 2px #dbdbdb;
    z-index: 5;
  }

  .img_overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #faaf94;
    border-radius: 35px;
  }

  .img_container:hover .img_overlay {
    opacity: 0.95;
  }

  .img_text {
    color: white;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    margin: 0;
    padding: 0;
    width: 350px;
  }
</style>
