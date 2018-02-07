<template>
  <div class="primary video_wrapper">
    <v-parallax src="../../../static/img/home/parallax.png" class="parallax_2"></v-parallax>
    <img src="@/assets/img/video/video_title.png"
         height="102" width="531"
         class="video_title"
    />

    <v-container class="video_container">
      <v-layout>
        <img src="@/assets/img/video/corners1.png" height="107" width="112" class="corner1"/>
        <img src="@/assets/img/video/corners1.png" height="107" width="112" class="corner2"/>
        <img src="@/assets/img/video/corners2.png" height="111" width="111" class="corner3"/>
        <img src="@/assets/img/video/corners2.png" height="111" width="111" class="corner4"/>
        <img src="@/assets/img/video/play_btn.png"
             height="62" width="62"
             ref="playBtn"
             @click="playVideo"
             class="play_video"
        />
        <v-flex class="video_box">
          <video ref="video"
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
    height: 680px;
    padding: 0;
    display: table;
    margin: 0 auto;
    z-index: 10;
  }

  .play_video {
    position: absolute;
    opacity: 0.8;
    transition: all 0.5s;
    margin-left: 380px;
    margin-top: 300px;
    z-index: 50;
  }

  .play_video:hover {
    cursor: pointer;
    opacity: 1;
  }

  .parallax_2 {
    position: absolute;
    height: 782px !important;
    width: 100vw;
    z-index: 1;
  }

  .video_box {
    margin-top: 20px;
    z-index: 49;
  }

  .video_title {
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    display: block;
    transform: scale(0.85);
    z-index: 1000 !important;
    position: relative;
  }

  .corner1, .corner2, .corner3, .corner4 {
    position: absolute;
    transform: scale(0.85);
    z-index: 50;
  }

  .corner1 {
    margin-top: -9px;
    margin-left: -36px;
  }

  .corner2 {
    margin-top: 548px;
    margin-left: -30px;
    transform: scale(0.85) rotate(-90deg);
  }

  .corner3 {
    margin-top: -14px;
    margin-left: 719px;
  }

  .corner4 {
    margin-top: 541px;
    margin-left: 721px;
    transform: scale(0.85) rotate(90deg);
  }
</style>
