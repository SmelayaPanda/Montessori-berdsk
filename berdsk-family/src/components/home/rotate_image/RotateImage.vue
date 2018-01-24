<template>
  <div>
    <img v-model="rotate"
         id="rt_image"
         src="../../../../static/img/home/flower.png" height="200px" width="200px" />
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'rotate-image',
    data: function () {
      return {}
    },
    computed: {
      rotate: function () {
        $(window).scroll(function () {
          let theta = $(window).scrollTop() / 100 % Math.PI
          $('#rt_image').css({transform: 'rotate(' + theta + 'rad)'})
        })
      }
    }
  }
</script>

<style scoped>
  div > img {
    position: absolute;
    margin-left: 50%;
    left: -100px;
    margin-top: 205px;
  }
</style>
