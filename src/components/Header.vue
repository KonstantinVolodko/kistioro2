<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';

const header = ref(null);
const headerStyle = reactive({
  top: '0px'
});

let prevScrollPosition = window.pageYOffset;

onMounted(() => {
  // Задайте отступ для страницы, равный высоте шапки
  document.body.style.marginTop = `${header.value.offsetHeight}px`;

  const updateHeaderPosition = () => {
    const currentScrollPosition = window.pageYOffset;
    if (header.value) {
      headerStyle.top = prevScrollPosition > currentScrollPosition ? "0" : `-${header.value.offsetHeight}px`;
      prevScrollPosition = currentScrollPosition;
    }
  };

  window.addEventListener('scroll', updateHeaderPosition);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderPosition);
});
</script>

<template>
  <header class="header" ref="header" :style="headerStyle">
    <div class="header__logo">
      <img src="../assets/images/header/header-logo.jpg" alt="#" />
    </div>

    <ul>
      <li>
        <a href="#">Карта</a>
      </li>
      <li>
        <a href="#">Профиль</a>
      </li>
    </ul>

    <button class="header__button transparent-button">Стать мастером</button>
  </header>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 1111;
    width: 100%;
    transition: top 0.3s;
}
</style>
