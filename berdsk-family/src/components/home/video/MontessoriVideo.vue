<template>
  <div class="primary video_wrapper">
    <v-parallax src="../../../static/img/home/parallax.png" class="parallax_2"></v-parallax>

    <v-container class="video_container">
      <v-layout>
        <img src="@/assets/img/video/playVideo.png"
             height="62" width="62"
             ref="playBtn"
             @click="playVideo"
             class="play_video"
        />
        <v-flex class="video_box elevation-7">
          <video
            ref="video"
            width="800" height="600"
            :poster="require('@/assets/img/video/videoposter.jpg')"
          >
            <source src="@/assets/img/video/Метод_Монтессори__что_это_такое_.mp4"
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            Элемент video не поддерживается вашим браузером.
            <a href="@/assets/img/video/Метод_Монтессори__что_это_такое_.mp4">Скачайте видео</a>.

          </video>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'montessori-video',
    methods: {
      playVideo: function () {
        this.$refs.video.play()
        this.$refs.video.setAttribute('controls', 'controls')
        this.$refs.playBtn.style.display = 'none'
      }
    }
  }
</script>

<style scoped>
  .video_wrapper {

  }

  .video_container {
    width: 800px;
    height: 700px;
    padding: 0;
    display: table;
    margin: 0 auto;
    z-index: 10;
  }

  .play_video {
    position: absolute;
    opacity: 0.8;
    transition: all 0.5s;
    margin-left: 384px;
    margin-top: 300px;
    z-index: 50;
  }

  .play_video:hover {
    cursor: pointer;
    opacity: 1;
  }

  .parallax_2 {
    position: absolute;
    height: 700px !important;
    width: 100vw;
    z-index: 1;
  }

  .video_box {
    margin-top: 40px;
    z-index: 49;
    background: #eee;
    border: 8px solid transparent;
    -moz-border-image: -moz-linear-gradient(left, #faaf94 0%, #bced96 100%);
    -webkit-border-image: -webkit-linear-gradient(left, #faaf94 0%, #c3eda5 100%);
    border-image: linear-gradient(to right, #faaf94 0%, #bced96 100%);
    border-image-slice: 1;
  }
</style>
