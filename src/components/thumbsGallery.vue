<script setup lang="ts">
import { ref, onMounted } from "vue";
import SwiperCore from "swiper/core"; // Импортируйте всю библиотеку

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Регистрируйте модули, которые вы хотите использовать
SwiperCore.use(["Navigation", "Pagination"]);

const images = ref<string[]>([
  "https://cdn.pixabay.com/photo/2023/07/04/10/30/dragon-fly-8105990_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/11/02/15/58/flower-8360946_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/22/09/46/cotton-top-tamarin-8463471_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/24/15/03/bougainvillea-8467373_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/25/10/27/dog-8468288_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/12/13/28/waterfall-8445292_1280.jpg",
  // ... more images
]);
const selectedImage = ref<string>("");

const selectImage = (image: string) => {
  selectedImage.value = image;
};

onMounted(() => {
  if (images.value.length > 0) {
    selectedImage.value = images.value[0]; // Set the first image as the default
  }
});

const showProjectDetails = ref(false);

const toggleShowProjectDetails = () => {
  showProjectDetails.value = !showProjectDetails.value;
};

const renderBullet = (index: number, className: string) => {
  return '<span class="' + className + '">' + (index + 1) + "</span>";
};
</script>

<template>
  <div class="thumbs-gallery">
    <transition name="fade" mode="out-in">
      <img :src="selectedImage" class="thumbs-image" :key="selectedImage" />
    </transition>

    <swiper
      :slides-per-view="3"
      :slides-per-group="3"
      class="thumbnails-slider"
      :navigation="{
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      }"
      :space-between="12"
      :pagination="{
        clickable: true,
        el: '.custom-pagination',
        renderBullet: renderBullet,
      }"
    >
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        @click="selectImage(image)"
      >
        <img :src="image" class="thumbnail" />
      </swiper-slide>
    </swiper>

    <div class="navigation-container">
      <button class="custom-swiper-button-prev">
        <svg>
          <use href="#swiper-arrow"></use>
        </svg>
      </button>
      <div class="custom-pagination"></div>
      <button class="custom-swiper-button-next">
        <svg>
          <use href="#swiper-arrow"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/vars.scss";


.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-leave-active {
  transform: translateX(-100%);
  opacity: 0;
}

.thumbs-gallery {
  margin-top: 2.2rem;

  
}

.thumbnails-slider {
  margin-top: 2.6rem;

  .swiper-slide {
    border-radius: 1.2rem;
    overflow: hidden;
    height: 8rem;
    cursor: pointer;
  }
}

.thumbs-gallery {
  .thumbs-image {
    width: 100%;
    height: 26rem;
    border-radius: 1.2rem;

    @include breakpoint($sm-bp) {
      height: 20rem;
    }
  }
}

.swiper-slide {
  width: 100%;
  height: 20rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navigation-container {
  margin-top: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  button {
    width: 2.8rem;
    height: 2.8rem;
    border: none;
    filter: drop-shadow(0px 0px 0.8rem rgba(90, 90, 90, 0.05));
    background: none;
    border-radius: 50%;
    padding: 0.4rem;

    &.swiper-button-disabled {
    }

    svg {
      width: 2rem;
      height: 2rem;
      fill: transparent;
    }
  }
}

.custom-swiper-button-next {
  rotate: 180deg;
}

.custom-pagination {
  width: fit-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  ::v-deep .swiper-pagination-bullet {
    background: none;
    margin: 0;
    height: 100%;
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    opacity: 1;
  }

  ::v-deep .swiper-pagination-bullet-active {
    color: var(--green);
    font-weight: 700;
  }
}
</style>
