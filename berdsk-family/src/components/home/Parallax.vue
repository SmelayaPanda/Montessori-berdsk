<template>
  <div>
    <div id="cards_wrapper">
      <div class="hovered_cards">
        <hovered-cards></hovered-cards>
        <hovered-cards></hovered-cards>
        <hovered-cards></hovered-cards>
      </div>
    </div>


    <div class="parallax primary">

      <div id="group" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">

          <div class="title">
            <img src="../../../static/img/parallax/parallax_3.png" alt="Base Layer">
          </div>
        </div>
        <div class="parallax__layer parallax__layer--back">

          <div class="title">
            <img src="../../../static/img/parallax/parallax_2.png" alt="Background Layer">
          </div>
        </div>

        <div class="parallax__layer parallax__layer--deep">
          <div class="title">
            <img src="../../../static/img/parallax/parallax_1.png" alt="Deep Background Layer">
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  import HoveredCards from './cards/HoveredCards'

  export default {
    name: 'parallax',
    components: {
      HoveredCards
    }
  }
</script>

<style scoped>
  .parallax {
    height: 1000px;
    /* fallback for older browsers */
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-perspective: 300px;
    perspective: 300px;
  }

  .parallax__group {
    position: relative;
    height: 700px;
    /* fallback for older browsers */
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .parallax__layer--base {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 4;
  }

  .parallax__layer--back {
    -webkit-transform: translateZ(-300px) scale(2);
    transform: translateZ(-300px) scale(2);
    z-index: 3;
  }

  .parallax__layer--deep {
    -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);
    z-index: 2;
  }

  .parallax__group {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }

  #group {
    z-index: 2;
    /* slide under group 3 and 5 */
  }

  .hovered_cards {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-content: center;
  }

  #cards_wrapper {
    position: absolute;
    top: 180px;
    width: 100vw;
    height: 300px;
    z-index: 7;
    margin-left: auto;
    margin-right: auto;
  }
</style>
