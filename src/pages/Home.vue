<script setup lang="ts">
import { ref } from 'vue';
import Header from "../components/Header.vue";
import Map from "../components/Map.vue";
import GreenButton from "../components/GreenButton.vue";
import CreateOrder from "../components/CreateOrder.vue";
import { defineComponent } from "vue";
import Preloader from "../components/Preloader.vue"; // Предполагается, что Preloader находится в папке components

const showModal = ref(false);
</script>

<template>
  <Header />
  <div class="map-container">
    <Map />
    <GreenButton
      buttonText="Создать заказ"
      @click="showModal = true"
      class="button-position"
    />
  </div>
  <CreateOrder v-model="showModal">
  </CreateOrder>

  <Preloader />
  
</template>

<style lang="scss">
@import "../assets/styles/base.scss";

.map-container {
  position: relative;
  z-index: 1;
}

.button-position {
  position: absolute;
  bottom: 7rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1111;
}


</style>
