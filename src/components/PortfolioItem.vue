<script setup lang="ts">

</script>

<template>
    <div class="portfilio-item">
        <div>
            <img src="../assets/images/portfolioForClient/portfolio-item.jpg" alt="#">
        </div>

        <p>Роспись стены 4x4 м2</p>
    </div>
</template>

<style lang="scss">
.portfilio-item {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    div {
        width: 23.3rem;
        border-radius: 0.8rem;
        overflow: hidden;
        position: relative;

        &.--dashed {
            border: 0.2rem dashed var(--gray);
            border-radius: 1rem;
            height: 100%;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        svg {
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    p {
        color: #000;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0016rem;
    }
}
</style>