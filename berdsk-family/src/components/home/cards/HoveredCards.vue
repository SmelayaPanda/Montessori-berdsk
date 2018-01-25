<template>
  <div style="margin-left: 50px; margin-right: 50px" @mouseover="upHere = true" @mouseleave="upHere = false">
    <div class="hovereffect">
      <p class="card_bg"
         v-model="changeBg"
         :style="'background-color:' + cardBackground"></p>

      <div class="overlay">
        <h2 :style="tapePadding" v-html="tapeText"></h2>
        <a class="lenta" href="#">
          <v-container>
            <v-layout row wrap>
              <v-flex xs10>
                <div class="card_img" :style="this.bgStyle"></div>
              </v-flex>
            </v-layout>
          </v-container>
        </a>
      </div>
      <!--More info-->
      <div>
        <router-link to="/services">
          <transition name="fade">
            <div class="more_btn white--text" v-show="upHere">
              <transition name="fade">
                <div class="in_card_border" v-show="upHere"></div>
              </transition>
              Подробнее
            </div>
          </transition>
        </router-link>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'hovered-cards',
    props: ['bgStyle', 'tapeText', 'tapePadding'],
    data: function () {
      return {
        upHere: false,
        cardBackground: '#E0FFCF'
      }
    },
    computed: {
      changeBg: function () {
        this.cardBackground = this.upHere === true ? 'white' : '#E0FFCF'
      }
    }
  }
</script>

<style scoped>

  .card_bg {
    border-radius: 40px;
    width: 260px;
    height: 330px;
    z-index: 1;
    transition: all 0.5s;
  }

  .card_bg:hover {
    /*background-color: white;*/
  }

  .hovereffect {
    width: 100%;
    height: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    text-align: center;
    cursor: default;
  }

  .hovereffect .overlay {
    width: 260px;
    height: 100%;
    position: absolute;
    overflow: hidden;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .hovereffect img {
    display: block;
    position: relative;
  }

  .hovereffect h2 {
    color: white;
    text-align: center;
    position: relative;
    font-size: 17px;
    height: 50px;
    /*padding: 10px;*/
    background: rgba(250, 175, 148, 1);
    -webkit-transform: translateY(130px);
    -ms-transform: translateY(130px);
    transform: translateY(130px);
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    z-index: 10;
  }

  .hovereffect:hover h2 {
    -webkit-transform: translateY(35px);
    -ms-transform: translateY(35px);
    transform: translateY(35px);
  }

  .hovereffect a.lenta {
    font-size: 12px;
    display: inline-block;
    text-decoration: none;
    color: #faaf94;
    background-color: transparent;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    font-weight: normal;
    margin: 12px 0 0 0;
  }

  .hovereffect:hover a.lenta {
    opacity: 1;
    transform: translateY(10px);
  }

  .hovereffect a.lenta:hover {
    box-shadow: 0 0 5px white;
  }

  .card_img {
  }

  .more_btn {
    z-index: 50;
    font-size: 11px;
    margin: 0;
    padding: 0;
    top: 272px;
    left: 69px;
    width: 120px;
    height: 28px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-image: linear-gradient(90deg, rgb(255, 171, 148) 23%, rgb(166, 238, 153) 100%);
    box-shadow: 0px 0px 38.8px 1.2px rgba(255, 255, 255, 0.5);
    transition: all 1s;
  }

  .more_btn:hover {
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: all 1s;
    box-shadow: 0 0 60px 2px rgba(255, 255, 255, .7), 0 0 30px rgba(255, 255, 255, .7);
  }

  .in_card_border {
    position: absolute;
    border: 2px solid #faaf94;
    border-radius: 30px;
    width: 240px;
    height: 311px;
    z-index: 10000;
    top: -263px;
    left: -59px;
    transition: all 1s;
  }

  .in_card_border {
    transition: all 1s;
  }
</style>
