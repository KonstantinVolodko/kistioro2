<script setup>
import Header from "../components/Header.vue";
import BackButton from "../components/BackButton.vue";
import PortfolioChangePhoto from "../components/PortfolioChangePhoto.vue";
import InputChangeProfile from "../components/InputChangeProfile.vue";
import NotActiveButton from "../components/NotActiveButton.vue";

</script>

<template>
    <Header />
    <div class="page-padding__center-content">
        <BackButton />
        <PortfolioChangePhoto />
        <div class="content__inputs">
            <InputChangeProfile label="Имя" type="text" />
            <InputChangeProfile label="Почта" type="text" />
            <div class="inputs-icon__change-password">
                <InputChangeProfile label="Пароль" type="password" />
                <svg @click="showPass = !showPass" v-show="!showPass" class="change-password__svg-hidden">
                        <use href="#visible-password-hidden"></use>
                </svg>
                <svg @click="showPass = showPass" v-show="showPass" class="change-password__svg-show">
                        <use href="#visible-password-hidden"></use>
                </svg>
            </div>
            <p class="inputs-text__change-password">Сменить пароль</p>
            <div class="inputs-icon__change-password">
                <InputChangeProfile label="Новый пароль" type="password" />
                <svg @click="showPass = !showPass" v-show="!showPass" class="change-password__svg-hidden">
                        <use href="#visible-password-hidden"></use>
                </svg>
                <svg @click="showPass = showPass" v-show="showPass" class="change-password__svg-show">
                        <use href="#visible-password-hidden"></use>
                </svg>
            </div>
            <div class="inputs-icon__change-password">
                <InputChangeProfile label="Повторите пароль" type="password" />
                <svg @click="showPass = !showPass" v-show="!showPass" class="change-password__svg-hidden">
                        <use href="#visible-password-hidden"></use>
                </svg>
                <svg @click="showPass = showPass" v-show="showPass" class="change-password__svg-show">
                        <use href="#visible-password-hidden"></use>
                </svg>
            </div>
            <NotActiveButton text="Изменить пароль"></NotActiveButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .page-padding__center-content {
        margin-top: 3.8rem;
        margin-left: 36.4rem;
        width: max-content;
    }
    .content__inputs {
        margin-top: 3.4rem;
        display: flex;
        flex-direction: column;
        gap: 2.2rem;
    }
    .inputs-text__change-password {
        color: var(--Black, #2C2C2C);
        leading-trim: both;
        text-edge: cap;
        font-family: Gilroy;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0018rem;
    }
    .inputs-icon__change-password {
        display: flex;
        position: relative;
        max-width: max-content;
    }
    .change-password__svg-hidden {
        width: 1.5rem;
        height: 0.7rem;
        position: absolute;
        top: 50%;
        right: 3%;
        cursor: pointer;
    }
    .change-password__svg-show {
        width: 1.65rem;
        height: 1.32rem;
    }
</style>