<script setup lang="ts">

defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>

    <div>
        <svg>
            <use href="#statusUser"></use>
        </svg>
        <p>{{ text }}</p>
    </div>

</template>

<style lang="scss" scoped>
    div {
        display: flex;
        align-items: center;
        gap: .8rem;
    }
    svg {
        max-width: 4rem;
        height: 4rem;
    }
    p {
        color: var(--Black);
        text-align: center;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
</style>