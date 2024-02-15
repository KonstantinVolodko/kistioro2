<script setup lang="ts">
import { ref } from 'vue';
import ModalPattern from '../components/modalPattern.vue'; // Импортируйте ваш компонент modalPattern

const showModal = ref(false);
const currentImage = ref('');

const openModal = (imageSrc: string) => {
    currentImage.value = imageSrc;
    showModal.value = true;
};
</script>

<template>
    <div class="portfolio-item" @click="openModal('https://cdn.pixabay.com/photo/2023/12/12/13/28/waterfall-8445292_1280.jpg')">
        <div>
            <img src="../assets/images/portfolioForClient/sertificate-img.jpg" alt="Диплом дизайнера">
            <svg>
                <use href="#loopa-icon"></use>
            </svg>
        </div>

        <p>Диплом дизайнера</p>
    </div>

    <ModalPattern v-model="showModal" class="sertificate-modal">
        <img :src="currentImage" alt="Просмотр изображения">
    </ModalPattern>
</template>

<style lang="scss">
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
.portfolio-item {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    cursor: pointer;

    div {
        width: 23.3rem;
        border-radius: 0.8rem;
        overflow: hidden;
        position: relative;
        @include breakpoint($sm-bp) {
            width: 14.3rem;
        }

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

.sertificate-modal {
    .modal-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}
</style>