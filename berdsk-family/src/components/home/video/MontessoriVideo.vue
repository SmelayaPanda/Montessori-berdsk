<template>
  <div class="primary">
    <v-container class="video_container">
      <v-layout>
        <iframe width="800" height="600"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                style="border: 8px solid #faaf94; border-radius: 5px"
                src="https://www.youtube.com/embed/CeIDckbfb58">
        </iframe>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'montessori-video'
  }
</script>

<style scoped>
  .video_container {
    width: 820px;
    height: 640px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0;
  }
</style>
