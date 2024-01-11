<script setup>
import { ref, watchEffect, defineEmits, onMounted } from "vue";
import BackButton from "../components/BackButton.vue";
import GreenButton from "../components/GreenButton.vue";
import thumbsGallery from "../components/thumbsGallery.vue"

const showProjectDetails = ref(false);

const toggleShowProjectDetails = () => {
  showProjectDetails.value = !showProjectDetails.value;
};

</script>

<template>
  <div class="project-details__modal-content">
    <BackButton @click="$emit('close')"/>

    <!-- <div class="project-details__gallery-container">
      <img :src="selectedImage" class="main-image"/>

      <swiper :slides-per-view="3" class="thumbnails-slider">
        <swiper-slide v-for="(image, index) in images" :key="index" @click="selectImage(image)">
          <img :src="image" class="thumbnail"/>
        </swiper-slide>
      </swiper>
    </div> -->

    <thumbsGallery class="project-details__gallery-container" />

    <div class="project-details__text-content">
      <p class="project-details__text-content-title">Название работы</p>
      <p class="project-details__text-content-description">
        Описание работы lorem ipsum dolor sit amet consectetur adipiscing elit
        Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
        sapien fringilla, mattis ligula
      </p>

      <div class="project-details__text-content-time">
        <p>Срок выполнения</p>
        <div></div>
        <p>4 дня</p>
      </div>

      <div class="project-details__text-content-price">
        <p>Гонорар</p>
        <div></div>
        <p>25 000 ₽</p>
      </div>
    </div>

    <div class="project-details__green-button-container">
      <GreenButton
        buttonText="Написать"
        class="master-details__green-button"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .portfolio-master-card {
  margin-top: 2.4rem;
}
::v-deep .portfolio-master-card__img {
  width: 8rem;
  height: 8rem;
}

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

.project-details__gallery-container {

  .swiper-slide {
    width: 100%;
    height: 20rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.project-details__text-content {
  margin-top: 2rem;
}

.project-details__text-content-title {
  color: var(--black);
  font-size: 2rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.002rem;
}

.project-details__text-content-description {
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  margin-top: 1.2rem;
  padding-bottom: 1.6rem;
  border-bottom: 0.1rem solid var(--opacity-gray);
}
.project-details__text-content-time,
.project-details__text-content-price {
  margin-top: 2rem;
  display: flex;
  gap: 0.8rem;

  div {
    border-bottom: 0.1rem dashed var(--opacity-gray);
  }

  p {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    width: max-content;
  }
}
.project-details__text-content-time {
  div {
    width: 17rem;
  }
}
.project-details__text-content-price {
  div {
    width: 22rem;
  }
}
</style>
