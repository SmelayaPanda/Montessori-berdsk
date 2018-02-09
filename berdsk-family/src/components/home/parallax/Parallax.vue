<template>
  <div>
    <v-parallax src="../../../static/img/home/parallax.png" class="parallax_main"></v-parallax>

    <div id="cards_wrapper">

      <div class="hovered_cards_title"></div>

      <div class="hovered_cards">
        <hovered-cards
          :tape-padding="'padding-top: 12px'"
          :tape-text="'Дети от 0 до 3 лет'"
          :bg-style="`
          background-image: url(../../../../static/img/home/cards/0-3_3part.png);
          background-size: 65%;
          height: 262px;
          width: 360px;
          margin-left: -8px;
          margin-top: -5px;
          `"
        ></hovered-cards>
        <hovered-cards
          :tape-padding="'padding-top: 12px'"
          :tape-text="'Дети от 3 до 6 лет'"
          :bg-style="`
          background-image: url(../../../../static/img/home/cards/3-6_3part.png);
          background-size: 65%;
          height: 244px;
          width: 345px;
          margin-left: -5px;
          `"
        ></hovered-cards>
        <hovered-cards
          :tape-padding="'padding-top: 12px'"
          :tape-text="'Дети от 6 до 12 лет'"
          :bg-style="`
          background-image: url(../../../../static/img/home/cards/6-12_3part.png);
          background-size: 60%;
          height: 220px;
          width: 384px;
          margin-left: -1px;
          margin-top: 15px;
          `"
        ></hovered-cards>
      </div>
      <div class="hovered_cards mt-5">
        <hovered-cards
          :tape-padding="'padding-top: 12px'"
          :tape-text="'Особенные дети'"
          :bg-style="`
          background-image: url(../../../../static/img/home/cards/specialChild3part.png);
          background-size: 54%;
          height: 285px;
          width: 425px;
          margin-left: 0;
          margin-top: 3px;
          `"
        ></hovered-cards>
        <hovered-cards
          :tape-padding="'padding-top: 0'"
          :tape-text="'Школа для <p>дошкольников</p>'"
          :bg-style="`
          background-image: url(../../../../static/img/home/cards/preschool3part.png);
          background-size: 65%;
          height: 261px;
          width: 362px;
          margin-left: -10px;
          margin-top: -10px;
          `"
        ></hovered-cards>
        <hovered-cards
          :tape-padding="'padding-top: 0'"
          :tape-text="'Монтессори + <p>Английский</p>'"
          :bg-style="`
          background-image: url(../../../../static/img/home/cards/english3part.png);
          background-size: 65%;
          height: 216px;
          width: 357px;
          margin-left: -5px;
          margin-top: 5px;
          `"
        ></hovered-cards>
      </div>
    </div>
  </div>

</template>

<script>
  import HoveredCards from '../cards/HoveredCards'

  export default {
    name: 'parallax',
    components: {
      HoveredCards
    }
  }
</script>

<style scoped>

  .hovered_cards {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-content: center;
  }

  #cards_wrapper {
    position: absolute;
    top: 160px;
    width: 100vw;
    height: 300px;
    z-index: 7;
    margin-left: auto;
    margin-right: auto;
  }

  .hovered_cards_title {
    background-image: url("../../../../static/img/home/cards/cards_title.png");
    background-size: 80%;
    width: 540px;
    height: 113px;
    position: absolute;
    z-index: 22;
    left: -225px;
    margin-left: 50%;
    margin-top: -125px;
  }

  .parallax_main {
    height: 935px !important;
    background-color: #bced96;
  }
</style>
