<template>
    <div style="margin-left: 50px; margin-right: 50px">
      <div class="hovereffect">
        <p class="card_bg"></p>

        <div class="overlay">
          <h2>От 0 до 3 лет</h2>
          <a class="lenta" href="#">

            <v-container>
              <v-layout row wrap>
                <v-flex xs10>
                  <img class="card_img" src="../../../../static/img/home/cards/bottle.png" height="80px" width="40px"/>
                  <p>Младенцы и дети до трех лет требуют максимального внимание к с</p>
                </v-flex>
              </v-layout>
            </v-container>

          </a>
        </div>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'hovered-cards'
  }
</script>

<style scoped>

  .card_bg {
    border-radius: 30px;
    background-color: rgb(224, 255, 207);
    width: 240px;
    height: 300px;
    z-index: 1;
    transition: all 0.5s;
  }

  .card_bg:hover {
    background-color: white;
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
    width: 240px;
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
    padding: 10px;
    background: rgba(250, 175, 148, 1);
    -webkit-transform: translateY(75px);
    -ms-transform: translateY(75px);
    transform: translateY(100px);
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    z-index: 10;
  }

  .hovereffect:hover h2 {
    -webkit-transform: translateY(15px);
    -ms-transform: translateY(15px);
    transform: translateY(25px);
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
    transform: translateY(30px);
  }

  .hovereffect a.lenta:hover {
    box-shadow: 0 0 5px white;
  }

  .card_img {
  }
</style>
