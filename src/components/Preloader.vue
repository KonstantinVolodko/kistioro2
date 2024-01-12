<script setup>
import { ref } from "vue";

const isLoading = ref(true);
const progress = ref(0);

const totalLoadingTime = 2000;
const startTime = Date.now();

const simulateLoading = () => {
  let interval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    progress.value = (elapsedTime / totalLoadingTime) * 2000;

    if (progress.value >= 2000) {
      clearInterval(interval);
      isLoading.value = false;
      progress.value = 2000;
    }
  }, 2000);
};

simulateLoading();
</script>

<template>
  <div v-if="isLoading" class="preloader">
    <div class="preloader-wrapper">
      <div class="preloader-logo">
        <img src="../assets/images/header/header-logo.jpg" alt="#" />
      </div>
      <p>Лучшие мастера у вас в кармане!</p>
      <svg class="spinner" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>

      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  z-index: 11111;
}

.spinner {
  animation: rotate 2s linear infinite;
  width: 5rem;
  height: 5rem;
  margin-top: 4rem;

  & .path {
    stroke: var(--darkGreen);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.preloader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32.8rem;
}

p {
  color: var(--black);
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  width: 18rem;
  margin-top: 2rem;
}

.preloader-logo {
  width: 18rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: #ECECEC;
  border-radius: 2rem;
  margin-top: 4rem;
}

.progress {
  height: 100%;
  background-color: var(--darkGreen);
  width: 0%;
  transition: width 0.2s ease-out;
}
</style>
