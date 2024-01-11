<script setup>
import { ref, watchEffect, defineEmits, onMounted } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import "swiper/css/navigation";

const images = ref([
  "https://cdn.pixabay.com/photo/2023/07/04/10/30/dragon-fly-8105990_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/11/02/15/58/flower-8360946_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/22/09/46/cotton-top-tamarin-8463471_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/24/15/03/bougainvillea-8467373_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/25/10/27/dog-8468288_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/12/12/13/28/waterfall-8445292_1280.jpg",
  // ... more images
]);
const selectedImage = ref('');

const selectImage = (image) => {
  selectedImage.value = image;
};

onMounted(() => {
  if (images.value.length > 0) {
    selectedImage.value = images.value[0]; // Устанавливаем первое изображение по умолчанию
  }
});

const showProjectDetails = ref(false);

const toggleShowProjectDetails = () => {
  showProjectDetails.value = !showProjectDetails.value;
};
</script>

<template>
  <div>
    <img :src="selectedImage" class="main-image" />

    <swiper :slides-per-view="3" class="thumbnails-slider">
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        @click="selectImage(image)"
      >
        <img :src="image" class="thumbnail" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
    width: 100%;
    height: 20rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
