<script setup lang="ts">

import ServicesCards from "../components/ServicesCards.vue"
import AutocompleteInput from "../components/AutocompleteInput.vue";
import GreenButton from "../components/GreenButton.vue";

async function fetchSuggestions(query: string) {
  return ["Подсказка 1", "Подсказка 2", "Подсказка 3"].filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
}
</script>

<template>
    <div class="register-page">
        <div class="register-page__bacground-left">
            <img src="../assets/images/RegisterPage/RegisterImage.jpg" alt="">
        </div>
        <div class="register-page__right-part">
            <div class="right-part__logo-image">
                <img src="../assets/images/header/header-logo.jpg" alt="">
            </div>
            <p class="right-part__text-master">Мастера</p>
            <p>Выберете категорию, <br> в которой хотите получать заказы</p>
            <div class="right-part__change-category">
                <ServicesCards />
                <AutocompleteInput
                    :fetchSuggestions="fetchSuggestions"
                    placeholder="Категория"
                    class="autocomplete-input"
                />
            </div>
            <router-link :to="'RegisterPageSettings'">
                <GreenButton buttonText="Далее" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
.register-page {
    display: flex;
    height: 100%;
    @include breakpoint($xl-bp) {
        height: 100vh;
        justify-content: center;
        padding: 2rem;
    }
}
.register-page__bacground-left {
    width: 78.5rem;
    height: 100vh;
    overflow: hidden;
    object-fit: cover;
    @include breakpoint($xl-bp) {
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
::v-deep .green-button {
  padding: 1.8rem 2.4rem !important;
  color: var(--white) !important;
  width: 100%;
}
.register-page__right-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    @include breakpoint($xl-bp) {
        width: 100%;
        gap: 1rem;
    }
    @include breakpoint($sm-bp) {
        align-items: stretch;
    }
    p {
        color: rgba(44, 44, 44, 0.60);
        text-align: center;
        font-family: Gilroy;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0016rem;
    }
}
.right-part__text-master {
    margin-bottom: 1.2rem;
    color: var(--black) !important;
        leading-trim: both;
        text-edge: cap;
        font-family: Gilroy;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.8rem; /* 155.556% */
}
.right-part__logo-image {
    margin-bottom: 2.4rem;
    width: 20rem;
    height: 5.4rem;
    overflow: hidden;
    object-fit: cover;
    @include breakpoint($sm-bp) {
        display: flex;
        margin: 0 auto;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
.create-order__list-cards {
    justify-content: center;
}
.right-part__change-category {
    width: 54%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    @include breakpoint($xl-bp) {
        width: 100%;
    }
}
.green-button {
    margin-top: 2rem;
}
</style>