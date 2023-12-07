<script setup>

</script>

<template>
    <div class="portfilio-item">
        <div>
            <img src="../assets/images/portfolioForClient/sertificate-img.jpg" alt="#">
            <svg>
                <use href="#loopa-icon"></use>
            </svg>
        </div>

        <p>Диплом дизайнера</p>
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
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        svg {
            position: absolute;
            width: 2.4rem;
            height: 2.4rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            fill: transparent;
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