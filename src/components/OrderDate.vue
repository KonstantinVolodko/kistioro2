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
    // export default {
    //     data() {
    //         return {
    //             date: '19.12.23',
    //             time: '19:23',
    //         }
    //     },
    // }
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