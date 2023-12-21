<script setup lang="ts">
defineProps({
        time: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <p>{{ date }} в {{ time }}</p>
</template>

<style lang="scss" scoped>
    p {
        color: (--black);
        font-family: Gilroy;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0016rem;
        width: 28.9rem;
    }
</style>