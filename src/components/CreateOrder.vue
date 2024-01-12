<script setup>
import { ref } from "vue";
import modalPattern from "../components/modalPattern.vue";
import AddPhotoModal from "../components/AddPhotoModal.vue";
import CreateOrderContent from "../components/CreateOrderContent.vue";
import LocationModal from "../components/locationModal.vue";
import MasterSearchModal from "../components/MasterSearchModal.vue";

const showAddPhoto = ref(false);

const toggleAddPhotoModal = () => {
  showAddPhoto.value = !showAddPhoto.value;
};

const showLocationModal = ref(false);

const toggleLocationModal = () => {
  showLocationModal.value = !showLocationModal.value;
};

const showMasterSearchModal = ref(false);

const toggleMasterSearchModal = () => {
  showMasterSearchModal.value = !showMasterSearchModal.value;
};
</script>

<template>
  <modalPattern class="create-order">
    <CreateOrderContent
      v-if="!showAddPhoto && !showLocationModal && !showMasterSearchModal"
      @toggleAddPhoto="toggleAddPhotoModal"
      @toggleLocation="toggleLocationModal"
      @toggleMasterSearch="toggleMasterSearchModal"
    />
    <AddPhotoModal v-if="showAddPhoto" @close="toggleAddPhotoModal" />
    <LocationModal v-if="showLocationModal" @close="toggleLocationModal" />
    <MasterSearchModal v-if="showMasterSearchModal" />
  </modalPattern>
</template>

<style lang="scss" scoped>
::v-deep .close-button {
  position: absolute;
  top: 2.5rem;
  right: 1.6rem;
  margin: 0;
  padding: 0;
  background: none;
  border: none;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
