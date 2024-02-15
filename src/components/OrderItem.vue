<script setup lang="ts">
    defineProps({
        svgPath: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="order-item__container">
        <svg class="container__svg">
            <use :href="svgPath"></use>
        </svg>
        <p class="container__name">
            {{ text }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
.order-item__container {
    display: flex;
    gap: 0.6rem;
    width: 33rem;
    @include breakpoint($sm-bp) {
        width: max-content;
    }
}
.container__svg {
    width: 2rem;
    height: 2rem;
}
.container__name {
    color: (--black);
    leading-trim: both;
    text-edge: cap;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
}
</style>