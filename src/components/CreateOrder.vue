<script setup>
import { ref } from "vue";
import modalPattern from "../components/modalPattern.vue";
import AddPhotoModal from "../components/AddPhotoModal.vue";
import CreateOrderContent from "../components/CreateOrderContent.vue";

const showModal = ref(true);
const showAddPhoto = ref(false);

const toggleAddPhotoModal = () => {
  showAddPhoto.value = !showAddPhoto.value;
};
</script>

<template>
  <modalPattern v-model="showModal" class="create-order">
    <CreateOrderContent v-if="!showAddPhoto" @toggleAddPhoto="toggleAddPhotoModal" />
    <AddPhotoModal v-if="showAddPhoto" @close="toggleAddPhotoModal" />
  </modalPattern>
</template>

<style lang="scss" scoped>

</style>
