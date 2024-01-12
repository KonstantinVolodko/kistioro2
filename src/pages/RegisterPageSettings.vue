<script setup lang="ts">

import BackButton from "../components/BackButton.vue"
import GreenButton from "../components/GreenButton.vue";
import InputChangeProfile from "../components/InputChangeProfile.vue";
import CustomInput from "../components/CustomInput.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import Sertificate from "../components/Sertificate.vue";
</script>

<template>
    <div class="register-page">
        <div class="register-page__bacground-left">
            <img src="../assets/images/RegisterPage/RegisterImage.jpg" alt="">
        </div>
        <div class="register-page__right-part">
            <router-link :to="'RegisterPage'">
                <BackButton class="back-button" />
            </router-link>
            <img class="avatar" src="../assets/images/RegisterPage/ava.png" alt="">
            <InputChangeProfile type="text" label="Имя"/>
            <p>Услуги</p>
            <div class="right-part__range-input">
                <CustomInput type="text" label="От"/>
                <CustomInput type="text" label="До"/>
            </div>
            <InputChangeProfile type="text" label="О себе"/>
            <div class="right-part__portfolio-item">
                <PortfolioItem />
            </div>
            <div class="right-part__sertificate-item">
                <Sertificate />
            </div>
            <router-link :to="'/'">
                <GreenButton buttonText="Далее" />
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    cursor: pointer;
}
.back-button {
    position: absolute;
    top: 2.8rem;
    left: 3.2rem;
}
.register-page {
    display: flex;
    height: 100%;
}
.register-page__bacground-left {
    width: 78.5rem;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
    }
}
.green-button {
    margin-top: 2rem;
}
.register-page__right-part {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
    gap: 2.2rem;
}
.register-page__right-part p {
    color: var(--black);
    text-align: center;
    leading-trim: both;

    text-edge: cap;
    font-family: Gilroy;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.0018rem;
}
.right-part__range-input {
    display: flex;
    gap: 1.6rem;
}
</style>