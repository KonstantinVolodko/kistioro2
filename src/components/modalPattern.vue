<script setup>
import { ref, onMounted, watchEffect } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const isModalOpen = ref(props.modelValue);
const headerHeight = ref(0);

onMounted(() => {
  const header = document.querySelector('.header');
  if (header) {
    headerHeight.value = header.offsetHeight;
  }
});

watchEffect(() => {
  isModalOpen.value = props.modelValue;
});

const closeModal = () => {
  isModalOpen.value = false;
  emit('update:modelValue', false);
};

const animationClass = ref('modal-enter-active');

const toggleAnimation = () => {
  animationClass.value = animationClass.value === 'modal-enter-active' ? 'modal-fade-enter-active' : 'modal-enter-active';
};
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
}

.modal-content {
  height: 100%;
  position: relative;
  display: flex;
}

.close-button {
    position: absolute;
    top: 2.5rem;
    left: 36.6rem;
    margin: 0;
    padding: 0;
    background: none;
    border: none;

    svg {
        width: 2.4rem;
        height: 2.4rem;
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

.modal-enter-active {
  animation: slideInFromLeft 0.5s ease;
}

.modal-fade-enter-active {
  animation: fadeIn 0.5s ease;
}

</style>
