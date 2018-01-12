<template>
  <v-carousel id="carousel-view"
              style="height: 100vh;"
              hide-controls
              interval="5000"
              dark
  >
    <v-carousel-item
      v-for="item in items"
      :key="item.src"
      :src="item.src"
      transition="fade"
      reverseTransition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'background-slide-show',
    data: function () {
      return {
        items: [
          {src: '../../static/main_1.jpeg'},
          {src: '../../static/main_2.jpeg'},
          {src: '../../static/main_3.jpeg'},
          {src: '../../static/main_4.jpeg'}
        ]
      }
    },
    computed: {}
  }
</script>

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: 1.75s ease-in-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0

  .carousel__controls
    background: none

  .carousel__item
    background-position-y: 0 !important;

  .icon
    color: #9de27d !important

  .btn--icon
    width: 8px
</style>
