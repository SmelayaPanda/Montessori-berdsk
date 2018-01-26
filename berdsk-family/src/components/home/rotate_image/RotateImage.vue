<template>
  <div>
    <img v-model="rotate"
         id="rt_image_1"
         src="../../../../static/img/home/rotate_circles/1circle.png" height="70px" width="70px"/>
    <img v-model="rotate"
         id="rt_image_2"
         src="../../../../static/img/home/rotate_circles/2circle.png" height="107px" width="107px"/>
    <img v-model="rotate"
         id="rt_image_3"
         src="../../../../static/img/home/rotate_circles/3circle.png" height="170px" width="170px"/>
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
          let theta1 = $(window).scrollTop() / Math.PI * 0.05
          let theta2 = $(window).scrollTop() / Math.PI * 0.04
          let theta3 = $(window).scrollTop() / Math.PI * 0.03
          $('#rt_image_1').css({transform: 'rotate(' + theta1 + 'rad)'})
          $('#rt_image_2').css({transform: 'rotate(-' + theta2 + 'rad)'})
          $('#rt_image_3').css({transform: 'rotate(' + theta3 + 'rad)'})
        })
      }
    }
  }
</script>

<style scoped>
  #rt_image_1,
  #rt_image_2,
  #rt_image_3 {
    position: absolute;
    margin-left: 50%;
    transition: all 1.5s;
  }
  #rt_image_1 {
    left: -130px;
    margin-top: 253px;
    opacity: 0.8;
  }

  #rt_image_2 {
    left: -148px;
    margin-top: 235px;
    opacity: 0.8;
  }

  #rt_image_3 {
    left: -180px;
    margin-top: 203px;
    opacity: 0.65;
  }
</style>
