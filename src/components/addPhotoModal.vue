<script setup lang="ts">
import { ref } from 'vue';
import BackButton from "../components/BackButton.vue";
import addPhotoField from "../components/addPhotoField.vue";

const photos = ref([]);

const processFiles = (files) => {
  // Логика обработки файлов
};
</script>

<template>
  <div class="addPhotoModal-content">
    <div class="addPhotoModal-content__title">
      <BackButton @click="$emit('close')" />
      <h2>Добавить фото</h2>
    </div>

    <div class="addPhotoModal-content__size">
      <p>Размер:</p>
      <ul>
        <li>4х4</li>
        <li>м2</li>
      </ul>
    </div>

    <div class="addPhotoModal-content__disclaimer">
      <p>
        Задайте параметры и загрузите фото или изображения желаемого результата
        (не более 10 шт.)
      </p>
    </div>

    <addPhotoField :photos="photos" @fileAdded="processFiles" />
  </div>

  
</template>

<style lang="scss" scoped>
.addPhotoModal-content {
  background: var(--white);
  height: 100%;
  position: relative;
  width: 40rem;
  padding: 2rem 1.6rem;
}

.addPhotoModal-content__title {
  display: flex;
  align-items: center;

  h2 {
    margin-left: 3.4rem;
    color: var(--black);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0024rem;
  }
}

.addPhotoModal-content__size {
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  p {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
  }

  ul {
    display: flex;
    gap: 0.8rem;

    li {
      padding: 0.6rem 1.2rem;
      color: var(--black);
      font-size: 1.6rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.0016rem;
      border-radius: 100px;
      background: #fff;
      box-shadow: 0px 0px 0.4rem 0.1rem rgba(188, 188, 188, 0.25);
    }
  }
}

.addPhotoModal-content__disclaimer {
    margin-top: 1.6rem;
  p {
    color: rgba(44, 44, 44, 0.6);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
  }
}
</style>
