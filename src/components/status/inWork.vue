<script setup lang="ts">

</script>

<template>
    <div>
        <svg>
            <use href="#inWorkOclock"></use>
        </svg>
        <p>В работе</p>
    </div>
</template>

<style lang="scss" scoped>
    div {
        display: flex;
        gap: 0.6rem;
        p {
            color: var(--black);
            leading-trim: both;
            text-edge: cap;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.0016rem;
        }
        svg {
                max-width: 1.8rem;
                height: 1.8rem;
        }
    }
</style>