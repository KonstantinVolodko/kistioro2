<script setup>
import BackButton from "../components/BackButton.vue";
import GreenButton from "../components/GreenButton.vue";
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const galleryTopRef = ref(null);
const galleryThumbsRef = ref(null);

onMounted(() => {
  Swiper.use([]);

  const galleryTop = new Swiper(galleryTopRef.value, {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    loopedSlides: 4,
  });

  const galleryThumbs = new Swiper(galleryThumbsRef.value, {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: "auto",
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
  });

  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
});
</script>

<template>
  <div class="project-details__modal-content">
    <BackButton />

    <div class="project-details__green-button-container">
      <GreenButton
        buttonText="Написать"
        @click="showModal = true"
        class="master-details__green-button"
      />
    </div>

    <div class="swiper-container gallery-top" ref="galleryTopRef">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><div class="swiper-slide-container">Slide 2</div></div>
        <div class="swiper-slide"><div class="swiper-slide-container">Slide 2</div></div>
        <div class="swiper-slide"><div class="swiper-slide-container">Slide 2</div></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="swiper-container gallery-thumbs" ref="galleryThumbsRef">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><div class="swiper-slide-container">Slide 2</div></div>
        <div class="swiper-slide"><div class="swiper-slide-container">Slide 2</div></div>
        <div class="swiper-slide"><div class="swiper-slide-container">Slide 2</div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-details__modal-content {
  background: var(--white);
  height: 100%;
  position: relative;
  width: 40rem;
  padding: 2rem 1.6rem;
}

.project-details__green-button-container {
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
}
</style>
