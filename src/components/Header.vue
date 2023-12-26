<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';

// const header = ref(null);
// const headerStyle = reactive({
//   top: '0px'
// });

// onMounted(() => {
//   const updateHeaderPosition = () => {
//     const currentScrollPosition = window.pageYOffset;
//     if (header.value) {
//       if (prevScrollPosition > currentScrollPosition) {
//         headerStyle.top = "0";
//       } else {
//         headerStyle.top = `-${header.value.offsetHeight}px`;
//       }
//       prevScrollPosition = currentScrollPosition;
//     }
//   };

//   let prevScrollPosition = window.pageYOffset;
//   window.addEventListener('scroll', updateHeaderPosition);
// });

// onUnmounted(() => {
//   window.removeEventListener('scroll', updateHeaderPosition);
// });
</script>

<template>
  <header class="header">
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
}
</style>
