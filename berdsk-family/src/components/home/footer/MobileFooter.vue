<template>
  <div class="footer_wrapper app_footer">
    <v-layout row wrap class="hidden-md-and-up">
      <v-flex xs12 style="margin-left: 10%">
        <router-link to="/contacts">
          <div class="mb-1 pl-4">Контакты</div>
        </router-link>
        <img src="@/assets/img/footer/tel.png"
             height="15" width="15"
             alt="телефон детского центра в Бердске"/>
        <a style="font-weight: normal"
           :href="'tel://' + loadContacts.phone.replace(/[ -]/g,'')">
          {{ loadContacts.phone }}
        </a>
        <br>
        <img src="@/assets/img/footer/letter.png"
             height="14" width="18"
             alt="почта детского центра в Бердске"/>
        <a style="font-size: 12px; font-weight: normal"
           :href="'mailto:' + loadContacts.email + '?Subject=Привет монтессори!&body=Спасибо!'"
           target="_blank">
          {{ loadContacts.email }}
        </a>
        <br>
        <div class="mb-1">Адрес:
          <router-link to="/contacts">
            {{ loadContacts.address }}
          </router-link>
        </div>

      </v-flex>

      <!--Line 2-->
      <v-container style="width: 100vw" class="pt-0">
        <v-layout row wrap>
          <v-flex xs6>
            <router-link to="/about">
              <img class="vk_icon"
                   style="margin-left: 40%"
                   onclick="window.open('https://vk.com/club153200073', '_blank')"
                   src="@/assets/img/footer/vk.png"
                   height="24px" width="36px"
                   alt="Вконтакте Монтессори Бердск"
              />
            </router-link>
          </v-flex>

          <v-flex xs6>
            <router-link to="/about">
              <img style="margin-left: 33%"
                   class="instagram_icon"
                   onclick="window.open('https://www.instagram.com/montessori_prostranstvo/', '_blank')"
                   src="@/assets/img/footer/inst.png"
                   height="29px" width="29px"
                   alt="Instagram Монтессори Бердск"
              />
            </router-link>
          </v-flex>
        </v-layout>

        <div id="rehigh_logo_wrap" onclick="window.open('https://rehigh.pro/', '_blank')">
          <img id="rehigh_logo" src="@/assets/img/logo/reHIGH_string_pink.purple.svg" alt="re:HIGH Studio">
          <p id="created_by">created by</p>
        </div>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'mobile-footer',
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

  .footer_wrapper {
    padding-top: 20px;
    height: 260px;
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

  #rehigh_logo_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #rehigh_logo_wrap:hover,
  #rehigh_logo_wrap:active {
    cursor: pointer;
  }

  #rehigh_logo {
    height: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  #created_by {
    position: absolute;
    margin-top: 30px;
    font-weight: normal;
    font-size: 12px;
  }
</style>
