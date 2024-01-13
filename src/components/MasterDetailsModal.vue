<script setup lang="ts">
import { ref, watchEffect, defineEmits, onMounted } from "vue";

import projectDetails from "../components/projectDetails.vue";
import masterInfoModal from "../components/masterInfoModal.vue";
import modalPattern from "../components/modalPattern.vue";
import BackButton from "../components/BackButton.vue";


const showProjectDetails = ref(false);

const toggleShowProjectDetails = () => {
  showProjectDetails.value = !showProjectDetails.value;
};
</script>

<template>
  <modalPattern>
    <masterInfoModal
      v-if="!showProjectDetails"
      @toggleProjectDetails="toggleShowProjectDetails"
    />

    <projectDetails v-if="showProjectDetails" @close="toggleShowProjectDetails"/>
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
