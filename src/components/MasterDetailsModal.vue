<script setup>
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
  
</style>
