<script setup lang="ts">
import { ref } from "vue";

interface Photo {
  file: File;
  url: string;
}

const photos = ref<Photo[]>([]);
const fileInputRef = ref<HTMLInputElement | null>(null);

const fileInputClick = () => {
  fileInputRef.value?.click();
};

const dragOver = (event: DragEvent) => {
  event.preventDefault();
};

const dragLeave = (event: DragEvent) => {
  event.preventDefault();
};

const processFiles = (files: File[]) => {
  files.forEach((file) => {
    if (!file.type.startsWith("image/")) {
      return;
    }
    // Create a URL for the file
    const url = URL.createObjectURL(file);
    photos.value.push({ file, url });
  });
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  if (event.dataTransfer?.files) {
    const files = Array.from(event.dataTransfer.files);
    processFiles(files);
  }
};

const handleFiles = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files) {
    processFiles(Array.from(files));
  }
};


</script>

<template>
  <div class="upload-container">
    <div
      class="upload-area"
      @dragover.prevent="dragOver"
      @dragleave.prevent="dragLeave"
      @drop.prevent="handleDrop"
      @click="fileInputClick"
    >
      Перетащите сюда фотографии, либо выберете сами
    </div>
    <input
      type="file"
      ref="fileInputRef"
      multiple
      @change="handleFiles"
      style="display: none"
    />
    <div class="gallery">
      <div
        class="image"
        v-for="(photo, index) in photos"
        :key="index"
        :style="{ backgroundImage: 'url(' + photo.url + ')' }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upload-container {
  border-radius: 0.8rem;
  border: 0.1rem dashed var(--gray);
  height: 10rem;
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.upload-area {
  text-align: center;
  color: var(--gray);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.0016rem;
  width: 24rem;
}

.gallery {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 0.4rem;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
}

.image {
  width: 9.3rem;
  height: 100%;
  background-size: cover;
  border-radius: 0.5rem;
}
</style>
