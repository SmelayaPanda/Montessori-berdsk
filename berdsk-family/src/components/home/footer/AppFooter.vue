<template>
  <div class="footer_wrapper">
    <v-layout row wrap>
      <v-flex xs2 sm2 class="footer_block">
        <div class="block_wrapper">

          <div>О нас</div>
          <div class="pg_text">О центре</div>
          <div class="pg_text">Расположение</div>
          <div class="pg_text">Материалы</div>
        </div>

      </v-flex>
      <v-flex xs2 sm2>
        <div>Услуги</div>
        <div class="pg_text">Возрастные группы</div>
        <div class="pg_text">Стоимость</div>
      </v-flex>
      <v-flex xs2 sm2 class="footer_contacts">
        <div>Контакты</div>
        <div class="pg_text">8 923 1111 6666</div>
        <div class="pg_text">detiM2017@gmail.com</div>
      </v-flex>
      <v-flex xs2 sm2>
        <div>Адрес: <p class="pg_text">ул. Красная Сибирь, 124</p></div>
        <div class="pg_text">8 923 1111 6666</div>
      </v-flex>
      <v-flex xs2 sm2>
        <div class="soc_news">
          <!--Scale it-->
          Следите за новостями
          <div class="rectangle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3.958in" height="2.042in">
              <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                    d="M26.000,1.000 L258.000,1.000 C271.807,1.000 283.000,12.193 283.000,26.000 L283.000,120.000 C283.000,133.807 271.807,145.000 258.000,145.000 L26.000,145.000 C12.193,145.000 1.000,133.807 1.000,120.000 L1.000,26.000 C1.000,12.193 12.193,1.000 26.000,1.000 Z"/>
            </svg>
          </div>

        </div>
      </v-flex>
    </v-layout>

    <div class="footer_line">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.66in" height="0.005in">
        <path fill-rule="evenodd"
              stroke="rgb(255, 255, 255)"
              stroke-width="1px"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              offset="20%"
              fill="rgb(255, 255, 255)"
              d="M1122.500,1.500 L1122.500,0.500 L1918.500,0.500 L1918.500,1.500 L1122.500,1.500 ZM0.500,0.500 L796.500,0.500 L796.500,1.500 L0.500,1.500 L0.500,0.500 Z"></path>
      </svg>
    </div>

    <div class="panda_oliviacolin">
      <p class="ml-2 pl-1 mb-3">panda</p>
      <p class="ml-3 pl-2">&</p>
      <p class="ml-1">oliviacolin</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'app-footer'
  }
</script>

<style scoped>
  .app_footer {
    background-color: rgb(37, 37, 37);
    z-index: 30;
    color: white;
    display: flex;
    justify-content: space-evenly;
  }

  .pg_text {
    font-size: 12px;
    font-weight: normal;
  }

  .footer_block {
    margin-left: 8%;
  }

  .footer_wrapper {
    margin-top: 30px;
    padding-top: 20px;
    height: 180px;
  }

  .footer_line {
    position: absolute;
    top: 130px;
    margin-left: 130px;
  }

  .panda_oliviacolin {
    position: absolute;
    top: 120px;
    line-height: 0;
    font-size: 10px;
    font-weight: bold;
  }

  .footer_contacts {
    text-align: center;
    margin-right: 50px;
  }

  .rectangle {
    position: absolute;
    top: 12px;
    right: 10px;
  }
</style>

