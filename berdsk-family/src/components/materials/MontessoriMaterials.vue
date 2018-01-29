<template>
  <div>

    <!-- Images used to open the lightbox -->
    <v-container class="row">
      <v-layout row wrap>
        <v-flex xs4 class="column" v-for="img in images" :key="img.num">
          <img :src="imagePath(img.name)" @click="openModal(img.num)" class="hover-shadow" width="300px" height="200px">
        </v-flex>
      </v-layout>
    </v-container>

    <!-- The Modal/Lightbox -->
    <div ref="myModal" class="modal">
      <span class="close cursor" @click="closeModal">&times;</span>
      <div class="modal-content">

        <div ref="mySlides">
          <div class="numbertext">1 / 4</div>
          <img src="@/assets/img/about_us_main/svo.jpg" style="width:100%">
        </div>

        <!-- Next/previous controls -->
        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        <a class="next" @click="plusSlides(1)">&#10095;</a>

        <!-- Caption text -->
        <div class="caption-container">
          <p ref="caption"></p>
        </div>

        <!-- Thumbnail image controls -->
        <div class="column">
          <img ref="demo" src="img1.jpg" @click="currentSlide(1)" alt="Nature">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Lightbox from 'vue-image-lightbox'

  export default {
    components: {
      Lightbox
    },
    data: function () {
      return {
        slideIndex: 1,
        images: [
          {name: 'svo', num: 1},
          {name: 'razvivaushSreda', num: 2},
          {name: 'RolVzroslogo', num: 3},
          {name: 'UvazhenieLichnosti', num: 4},
          {name: 'VpitivUm', num: 5},
          {name: 'svo', num: 6}
        ]
      }
    },
    methods: {
      openModal: function (num) {
        this.$refs.myModal.style.display = 'block'
        this.showSlides(num)
      },
      closeModal: function () {
        this.$refs.myModal.style.display = 'none'
      },
      plusSlides: function (n) {
        this.showSlides(this.slideIndex += n)
      },
      currentSlide: function (n) {
        this.showSlides(this.slideIndex = n)
      },
      showSlides: function (n) {
        let i
        let slides = this.$refs.mySlides
        let dots = this.$refs.demo
        let captionText = this.$refs.caption
        if (n > slides.length) {
          this.slideIndex = 1
        }
        if (n < 1) {
          this.slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none'
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '')
        }
        slides[this.slideIndex - 1].style.display = 'block'
        dots[this.slideIndex - 1].className += ' active'
        captionText.innerHTML = dots[this.slideIndex - 1].alt
      },
      imagePath: function (itemSrc) {
        return require('@/assets/img/about_us_main/' + itemSrc + '.jpg')
      }
    }
  }
</script>


<style scoped>
  .row > .column {
    padding: 0 8px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Create four equal columns that floats next to eachother */
  .column {
    float: left;
    width: 25%;
  }

  /* The Modal (background) */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
  }

  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 90%;
    max-width: 1200px;
  }

  /* The Close Button */
  .close {
    color: white;
    position: absolute;
    top: 100px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }

  /* Hide the slides by default */
  .mySlides {
    display: none;
  }

  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  /* Caption text */
  .caption-container {
    text-align: center;
    background-color: black;
    padding: 2px 16px;
    color: white;
  }

  img.demo {
    opacity: 0.6;
  }

  .active,
  .demo:hover {
    opacity: 1;
  }

  img.hover-shadow {
    transition: 0.3s
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
  }
</style>
