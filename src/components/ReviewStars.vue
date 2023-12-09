<script setup>

</script>

<template>
    <div>
        <svg>
            <use href="#review-star"></use>
        </svg>

        <span>
            4.9
        </span>
    </div>
</template>

<style lang="scss" scoped>
    div {
        display: flex;
        gap: 0.4rem;
        align-items: center;

        svg {
            width: 1.3rem;
            height: 1.2rem;
        }

        span {
            color: var(--black);
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 0.0014rem;
        }
    }
</style>