<template>
  <div class="footer_wrapper  hidden-sm-and-down">
    <v-layout row wrap>

      <!--Block 1-->
      <v-flex xs2 sm2 class="footer_block">
        <div class="about_us_footer">
          <router-link to="/about">
            <div class="mb-1">О нас</div>
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
          <div class="mb-1">Услуги</div>
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
          <div class="mb-1 pl-4">Контакты</div>
        </router-link>
        <p class="tel_text">
          <img class="tel_icon"
               src="@/assets/img/footer/tel.png"
               height="15" width="15"
               alt="телефон детского центра в Бердске"/>
          <a style="font-weight: normal"
             :href="'tel://' + loadContacts.phone.replace(/[ -]/g,'')">
            {{ loadContacts.phone }}
          </a>
        </p>

        <img class="letter_icon"
             src="@/assets/img/footer/letter.png"
             height="14" width="18"
             alt="почта детского центра в Бердске"/>
        <a style="font-size: 12px; font-weight: normal"
           :href="'mailto:' + loadContacts.email + '?Subject=Привет монтессори!&body=Спасибо!'"
           target="_blank">
          {{ loadContacts.email }}
        </a>
      </v-flex>

      <!--Block 4-->
      <v-flex xs2 sm2 class="pr-2">
        <div class="mb-1">Адрес:
          <router-link to="/contacts">
            <span class="pg_text">{{ loadContacts.address.split(',')[0] + ', ' }}</span>
            <p class="pg_text">
              {{ loadContacts.address.split(',')[1] }} ,
              {{ loadContacts.address.split(',')[2] }}
              {{ loadContacts.address.split(',')[3] }}
            </p>
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
                 src="@/assets/img/footer/vk.png"
                 height="22%" width="22%"
                 alt="Вконтакте Монтессори Бердск"
            />
            <img class="instagram_icon"
                 onclick="window.open('https://www.instagram.com/montessori_prostranstvo/', '_blank')"
                 src="@/assets/img/footer/inst.png"
                 height="17%" width="17%"
                 alt="Instagram Монтессори Бердск"
            />
          </div>
        </div>
      </v-flex>
    </v-layout>

    <div class="footer_line">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.66in" height="0.010in">
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

  .about_us_footer {
    padding-left: 20px;
  }

  .pg_text {
    font-size: 12px;
    font-weight: normal;
  }

  .footer_block {
    margin-left: 11.5%;
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
    margin-right: 10px;
  }

  .soc_news {
    position: relative;
    border: 1px solid white;
    border-radius: 20px;
    height: 100px;
    width: 130px;
    text-align: center;
    line-height: 0;
    opacity: 0.9;
    margin-left: 10px;
  }

  .soc_news_text {
    padding-top: 10px;
  }

  .instagram_icon {
    transition: all 0.5s;
  }

  .vk_icon {
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
    opacity: 0.65;
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

  .tel_icon {
    vertical-align: middle;
    margin-right: 5px;
  }

  .letter_icon {
    vertical-align: middle;
    margin-right: 5px;
  }

  .tel_text {
    font-size: 12px;
    font-weight: normal !important;
    line-height: 0 !important;
    margin-bottom: 0px;
  }


</style>

