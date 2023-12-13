<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    buttonText: {
        type: String,
        default: 'Кнопка'
    }
});

const emit = defineEmits(['click']);

const emitClick = () => {
    emit('click');
}
</script>

<template>
    <button @click="emitClick" class="green-button">
        {{ buttonText }}
    </button>
</template>

<style lang="scss">
.green-button {
    border-radius: 0.8rem;
    background: var(--darkGreen);
    padding: 1.8rem 2.4rem;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0016rem;
    border: none;
}
</style>