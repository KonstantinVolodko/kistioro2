<script setup lang="ts">
import GreenButton from '../components/GreenButton.vue'
import { ref } from "vue";
const showModal = ref(false);
import shareOrderModal from "../components/shareOrderModal.vue";

</script>

<template>
    <div class="card-profile">
        <div class="card-profile__info">
            <div class="info__ava">
                <img src="../assets/images/OrderFeed/ava.png" alt="">
            </div>
            <p class="info__name">Николай</p>
            <div class="info__reviews">
                <svg>
                    <use href="#orderInfo-star"></use>
                </svg>
                <p>4.9</p>
                <p>(12)</p>
            </div>
            <p>1 мин</p>
        </div>
        <div class="card-profile__feedback">
            <div class="feedback__title">
                <p>Декор комнаты</p>
                <svg @click="showModal = true">
                    <use href="#orderInfo-share"></use>
                </svg>
            </div>
            <p class="feedback__adress">Конюшенная площадь, 2B</p>
            <div class="feedback__coast">
                <p>2 500 ₽</p>
                <p>≈800м</p>
            </div>
            <div class="feedback__btn">
                <router-link :to="'PortfolioForClient/:rid'">
                    <button class="header__button transparent-button">Подробнее</button>
                </router-link>
                <GreenButton buttonText="Откликнуться" />
            </div>
        </div>
    </div>

    <shareOrderModal v-model="showModal"></shareOrderModal>
</template>

<style lang="scss" scoped>
.modal-overlay {
    display: flex;
    justify-content: center;
  }

::v-deep .close-button {
    position: absolute;
    top: 8rem;
    right: 1.4rem;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
    .card-profile {
        display: flex;
        padding: 1.6rem;
        align-items: flex-start;
        gap: 1.6rem;
        flex: 1 0 0;
        border-radius: 1.2rem;
        background: #FFF;
        height: max-content;

        /* Shadow (interface) */
        box-shadow: 0px 0px 8px 2px rgba(188, 188, 188, 0.25);
    }
    .card-profile__info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.1rem;
    }
    .info__ava {
        width: 5.4rem;
        height: 5.4rem;
        overflow: hidden;
        object-fit: cover;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info__name {
        color: var(--black);
        font-family: Gilroy;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0014rem;
    }
    .info__reviews {
        display: flex;
        justify-content: center;
        gap: 0.4rem;
        svg {
            width: 1.3rem;
            height: 1.2rem;
        }
    }
    .card-profile__feedback {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
}
.feedback__title {
    display: flex;
    justify-content: space-between;
    p {
        color: var(--Black);
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0018rem;
    }
    svg {
        cursor: pointer;
        fill: transparent;
        width: 2.4rem;
        height: 2.4rem;
        transition: all .3s;
    }
    svg:hover {
        fill: aqua;
    }
}
.feedback__adress {
    color: rgba(44, 44, 44, 0.60);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0014rem;
}
.feedback__btn {
    display: flex;
    gap: 1.2rem;
}
.feedback__coast {
    display: flex;
    gap: 1rem;
    p:first-child {
        color: var(--darkGreen);
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.0016rem;
    }
    p:last-child {
        color: #B1B1B1;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0016rem;
    }
}
</style>