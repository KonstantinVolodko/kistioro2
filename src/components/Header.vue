<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive } from 'vue';

let header = ref<HTMLElement | null>(null); // Add type annotation
const headerStyle = reactive({
  top: '0px'
});

let prevScrollPosition = window.pageYOffset;

const updateHeaderPosition = () => { // Define the function before using it
  const currentScrollPosition = window.pageYOffset;
  if (header.value) {
    // Removed the line that sets document.body.style.marginTop
    headerStyle.top = prevScrollPosition > currentScrollPosition ? "0" : `-${header.value.offsetHeight}px`;
    prevScrollPosition = currentScrollPosition;
  }
};

onMounted(() => {
  header = ref<HTMLElement | null>(document.querySelector('.header')); // Update the header ref

  // Removed the line that sets document.body.style.marginTop initially

  window.addEventListener('scroll', updateHeaderPosition);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderPosition);
});
</script>

<template>
  <header class="header" ref="header" :style="headerStyle">
    <router-link :to="'/'">
      <div class="header__logo">
      <img src="../assets/images/header/header-logo.jpg" alt="#" />
    </div>
      </router-link>

    <ul>
      <router-link :to="'/'">
        <li>
          <a href="#">Карта</a>
        </li>
      </router-link>
      <router-link :to="'historyOfOrders'">
        <li>
          <a href="#">Профиль</a>
        </li>
      </router-link>
    </ul>

    <router-link :to="'RegisterPage'">
      <button class="header__button transparent-button">Стать мастером</button>
      </router-link>
  </header>
</template>

<style lang="scss" scoped>
.header {
    position: sticky;
    z-index: 1111;
    width: 100%;
    transition: top 0.3s;
}
li a {
  transition: all .2s;
}
li a:hover {
  color: var(--darkGreen);
}
</style>
