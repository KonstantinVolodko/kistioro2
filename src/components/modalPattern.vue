<script setup lang="ts">
import { ref, onMounted, watchEffect, onUnmounted } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isModalOpen = ref(props.modelValue);
const headerHeight = ref(0);
const windowWidth = ref(window.innerWidth);

const checkWindowSize = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 500) {
    animationClass.value = "modal-slide-up-enter-active";
  } else {
    animationClass.value = "modal-enter-active";
  }
};

onMounted(() => {
  const header = document.querySelector(".header") as HTMLElement; // Cast to HTMLElement
  if (header) {
    headerHeight.value = header.offsetHeight;
  }
  window.addEventListener("resize", checkWindowSize);
  checkWindowSize(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("resize", checkWindowSize);
});

watchEffect(() => {
  isModalOpen.value = props.modelValue;
});

const closeModal = () => {
  isModalOpen.value = false;
  emit("update:modelValue", false);
};

const animationClass = ref("modal-enter-active");
</script>

<template>
  <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
    <div :class="['modal-content', animationClass]" @click.stop>
      <slot></slot>
      <button class="close-button" @click="closeModal">
        <svg>
          <use href="#cross-icon"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/base.scss";
@import "../assets/styles/mixins.scss";
@import "../assets/styles/vars.scss";

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  z-index: 11111;

  @include breakpoint($sm-bp) {
    align-items: flex-end;
  }
}

.modal-content {
  height: 100%;
  position: relative;
  display: flex;

  @include breakpoint($sm-bp) {
    height: fit-content;
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.modal-slide-up-enter-active {
  animation: slideInFromBottom 0.5s ease;
}

.modal-enter-active {
  animation: slideInFromLeft 0.5s ease;
}

.modal-fade-enter-active {
  animation: fadeIn 0.5s ease;
}
</style>
