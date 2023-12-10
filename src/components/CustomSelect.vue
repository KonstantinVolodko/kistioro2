<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';

interface Option {
  label: string;
  value: string;
}

const props = defineProps({
    options: {
        type: Array as PropType<Option[]>,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:modelValue']);

const selectedValue = ref(props.modelValue);
const dropdownOpen = ref(false);

const setSelectedFirstOption = () => {
  if (props.options.length && selectedValue.value === '') {
    const firstOptionValue = props.options[0].value;
    selectedValue.value = firstOptionValue;
    emit('update:modelValue', firstOptionValue);
  }
};

onMounted(setSelectedFirstOption);

const selectedLabel = computed(() => {
    const selectedOption = props.options.find(option => option.value === selectedValue.value);
    return selectedOption ? selectedOption.label : '';
});

watch(() => props.modelValue, (newValue) => {
    if (newValue !== selectedValue.value) {
        selectedValue.value = newValue;
    }
});

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option, event) => {
    event.stopPropagation(); // Остановка всплытия события
    selectedValue.value = option.value;
    emit('update:modelValue', option.value);
    dropdownOpen.value = false;
};

</script>

<template>
    <div class="custom-select" @click="toggleDropdown">
        <button class="selected-value">
            {{ selectedLabel }}
            <svg class="icon"> <!-- SVG иконка -->
                <use href="#down-arrow"></use>
            </svg>
        </button>
        <div v-if="dropdownOpen" class="options">
            <div v-for="option in options" :key="option.value" @click="event => selectOption(option, event)" class="option">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>