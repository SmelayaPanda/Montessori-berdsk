<template>
  <div class="footer_wrapper">
    <v-layout row wrap>

      <!--Block 1-->
      <v-flex xs2 sm2 class="footer_block">
        <div class="block_wrapper">
          <router-link to="/about">
            <div>О нас</div>
          </router-link>
          <router-link to="/about">
            <div class="pg_text">О центре</div>
          </router-link>
          <router-link to="/contacts">
            <div class="pg_text">Расположение</div>
          </router-link>
          <div class="pg_text">Материалы</div>
        </div>
      </v-flex>

      <!--Block 2-->
      <v-flex xs2 sm2>
        <router-link to="/services">
          <div>Услуги</div>
        </router-link>
        <router-link to="/services">
          <div class="pg_text">Возрастные группы</div>
        </router-link>
        <router-link to="/services">
          <div class="pg_text">Стоимость</div>
        </router-link>
      </v-flex>

      <!--Block 3-->
      <v-flex xs2 sm2 class="footer_contacts">
        <router-link to="/contacts">
          <div>Контакты</div>
        </router-link>
        <a style="font-size: 12px; font-weight: normal"
           :href="'tel://' + loadContacts.phone.replace(/[ -]/g,'')">
          {{ loadContacts.phone }}
        </a>
        <a style="font-size: 12px; font-weight: normal"
           :href="'mailto:' + loadContacts.email + '?Subject=Привет монтессори!&body=Спасибо!'"
           target="_blank">
          {{ loadContacts.email }}
        </a>
      </v-flex>

      <!--Block 4-->
      <v-flex xs2 sm2>
        <div>Адрес:
          <router-link to="/contacts">
            <p class="pg_text">{{ loadContacts.address }}</p>
          </router-link>
        </div>
      </v-flex>

      <!--Block 5-->
      <v-flex xs2 sm2>
        <div class="soc_news">
          <div class="soc_news_text">
            <router-link to="/meetups">
              <p class="mt-2"><b>Следите за</b></p>
              <p><b>новостями</b></p>
            </router-link>

            <img class="vk_icon"
                 onclick="window.open('https://vk.com/club153200073', '_blank')"
                 src="../../../../static/img/home/footer/vk.png" height="22%" width="22%"/>
            <img class="instagram_icon"
                 onclick="window.open('https://www.instagram.com/montessori_prostranstvo/', '_blank')"
                 src="../../../../static/img/home/footer/instagram.png" height="17%" width="17%"/></div>
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
      <p class="panda">panda</p>
      <p class="and_logo">&</p>
      <p class="oliviacolin">oliviacolin</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'app-footer',
    computed: {
      loadContacts:
        function () {
          return this.$store.getters.contacts
        }
    }
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
    height: 200px;
    color: white !important;
  }

  .application a {
    color: white !important;
    text-decoration: none;
    transition: all 0.5s;
  }

  .application a:hover {
    color: white !important;
    text-decoration: underline;
  }

  .footer_line {
    position: absolute;
    top: 140px;
    margin-left: 130px;
  }

  .footer_contacts {
    text-align: center;
    margin-right: 50px;
  }

  .soc_news {
    position: relative;
    border: 1px solid white;
    border-radius: 20px;
    height: 100px;
    width: 180px;
    text-align: center;
    line-height: 0;
    opacity: 0.9;
  }

  .soc_news_text {
    padding-top: 10px;
  }

  .instagram_icon {
    filter: invert(1);
    transition: all 0.5s;
  }

  .vk_icon {
    filter: invert(1);
    margin-right: 10px;
    transition: all 0.5s;
  }

  .vk_icon:hover {
    cursor: pointer;
    opacity: 1;
  }

  .instagram_icon:hover {
    cursor: pointer;
    opacity: 1;
  }

  /* Logo Panda + OliviaColin */

  .panda_oliviacolin {
    position: absolute;
    top: 145px;
    line-height: 0;
    font-size: 10px;
    font-weight: bold;
  }

  .panda {
    margin-left: 8px;
    margin-bottom: 10px;
  }

  .and_logo {
    margin-left: 22px;
    margin-bottom: 10px;
  }

  .oliviacolin {
  }
</style>

