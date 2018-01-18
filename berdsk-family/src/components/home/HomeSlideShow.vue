<template>
  <div style="height: 100% !important;">
    <v-carousel id="carousel-view"
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
  </div>

</template>

<script>
  export default {
    name: 'background-slide-show',
    data: function () {
      return {
        items: [
          {src: '../../static/img/home/1.jpg'},
          {src: '../../static/img/home/2.jpg'},
          {src: '../../static/img/home/3.jpg'},
          {src: '../../static/img/home/4.jpg'}
        ]
      }
    },
    computed: {}
  }
</script>

<style lang="stylus">
  #carousel-view
    height: 95vh !important
    width: 100% !important
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
    width: 100vw !important;

  .icon
    color: #9de27d !important

  .btn--icon
    width: 8px
</style>
