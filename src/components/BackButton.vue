<script setup lang="ts">
</script>

<template>
    <button class="back-button">
        <svg>
            <use href="#leftArrow"></use>
        </svg>

        <span>Назад</span>
    </button>
</template>

<style lang="scss">
.back-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: transparent;
    border: none;

    svg {
        width: 2rem;
        height: 2rem;
        fill: transparent;
    }

    span {
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.8rem;
    }
}
</style>