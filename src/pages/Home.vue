<script setup lang="ts">
import { ref } from 'vue';
import Header from "../components/Header.vue";
import Map from "../components/Map.vue";
import GreenButton from "../components/GreenButton.vue";
import CreateOrder from "../components/CreateOrder.vue";
import { defineComponent } from "vue";
import Preloader from "../components/Preloader.vue";
import MasterDetailsModal from "../components/MasterDetailsModal.vue";
import modalPattern from '../components/modalPattern.vue';

const showModal = ref(false);

const showMasterModal = ref(false);
const selectedMaster = ref(null);

const handleMarkerClick = (master) => {
  selectedMaster.value = master;
  showMasterModal.value = true;
};
</script>

<template>
  <Header />
  <div class="map-container">
    <Map @marker-clicked="handleMarkerClick" />
    <GreenButton
      buttonText="Создать заказ"
      @click="showModal = true"
      class="button-position"
    />
  </div>
  <CreateOrder v-model="showModal">
  </CreateOrder>
  <modalPattern v-model="showMasterModal">
    <MasterDetailsModal :master="selectedMaster" />
  </modalPattern>
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
