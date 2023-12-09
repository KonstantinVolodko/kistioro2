<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true
        },
    })
</script>

<template>
    <button class="not-active-button">
        <span>{{ text }}</span>
    </button>
</template>

<style lang="scss">
.not-active-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    border-radius: 0.8rem;
    background: rgba(44, 44, 44, 0.05);
    border: none;
    width: max-content;
    padding: 1.8rem 2.4rem;
    margin: 0 auto;
    svg {
        width: 2rem;
        height: 2rem;
        fill: transparent;
    }

    span {
        color: var(--gray);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.8rem;
    }
}
</style>