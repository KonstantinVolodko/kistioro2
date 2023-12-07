<script setup>

</script>

<template>
    <div class="portfilio-item">
        <div>
            <img src="../assets/images/portfolioForClient/portfolio-item.jpg" alt="#">
        </div>

        <p>Роспись стены 4x4 м2</p>
    </div>
</template>

<style lang="scss" scoped>
.portfilio-item {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    div {
        width: 23.3rem;
        border-radius: 0.8rem;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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