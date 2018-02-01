<template>
  <div>
    <!--Schedule-->
    <v-flex xs10 class="hidden-xs-only">
      <h2 class="text-sm-center primary--text mb-3 ml-4">Мы открыты для Вас</h2>
      <v-flex xs12 sm12 class="ml-4">
        <div class="secondary--text text-sm-center">
          <p class="pl-3 mb-4">Понедельник- Пятница:
            <span class="schedule_time">с 9°° до 13°°</span>
            <span>и</span>
            <span class="schedule_time">с 16°° до 20°°</span>
          </p>
          <p>Суббота:
            <span class="schedule_time">с 9°° до 13°°</span>
          </p>
          <p>Воскресенье:
            <span style="font-weight: bold;">выходной</span>
          </p>
        </div>
      </v-flex>
    </v-flex>

    <!--Schedule mobile-->
    <div class="hidden-sm-and-up">
      <h2 class="primary--text">Мы открыты для Вас</h2>
      <v-flex xs12 sm12 class="ml-4">
        <div class="secondary--text text-sm-center">
          <p class="mb-4">Понедельник- Пятница: <br>
            <span class="schedule_time" style="line-height: 30px">с 9°° до 13°°</span>
            <span>и</span>
            <span class="schedule_time">с 16°° до 20°°</span>
          </p>
          <p>Суббота:
            <span class="schedule_time">с 9°° до 13°°</span>
          </p>
          <p>Воскресенье:
            <span style="font-weight: bold;">выходной</span>
          </p>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'schedule'
  }
</script>

<style scoped>
  .schedule_time {
    border-radius: 5px;
    padding: 8px;
    background-color: #bced96;
    color: white;
  }
</style>
