<script setup lang="ts">
import { ref } from 'vue';
import InputChangeProfile from "../components/InputChangeProfile.vue";



const showPasswordFields = ref(false);
const showPass = ref(false); // Add this line
const toggleShowPass = () => { // Add this function
    showPass.value = !showPass.value;
};

const togglePasswordFields = () => {
    showPasswordFields.value = !showPasswordFields.value;
};
</script>

<template>
<div class="content__inputs">
            <InputChangeProfile label="Имя" type="text" />
            <InputChangeProfile label="Почта" type="text" />
            <div class="inputs-icon__change-password">
                <InputChangeProfile label="Пароль" type="password" />
                <svg @click="toggleShowPass" v-show="!showPass" class="change-password__svg-hidden">
                    <use href="#visible-password-hidden"></use>
                </svg>
                <svg @click="toggleShowPass" v-show="showPass" class="change-password__svg-show">
                    <use href="#visible-password-hidden"></use>
                </svg>
            </div>
            <div class="content__inputs__change-password-wrapper">
                <button class="inputs-text__change-button" @click="togglePasswordFields">
                    <span>Сменить пароль</span>
                    <div>
                        <svg>
                            <use href="#down-arrow"></use>
                        </svg>
                    </div>
                </button>
                <div class="inputs-icon__change-password-container">
                    <div class="inputs-icon__change-password" v-if="showPasswordFields">
                        <InputChangeProfile label="Новый пароль" type="password" />
                        <svg @click="showPass = !showPass" v-show="!showPass" class="change-password__svg-hidden">
                            <use href="#visible-password-hidden"></use>
                        </svg>
                        <svg @click="showPass = showPass" v-show="showPass" class="change-password__svg-show">
                            <use href="#visible-password-hidden"></use>
                        </svg>
                    </div>
                    <div class="inputs-icon__change-password" v-if="showPasswordFields">
                        <InputChangeProfile label="Повторите пароль" type="password" />
                        <svg @click="showPass = !showPass" v-show="!showPass" class="change-password__svg-hidden">
                            <use href="#visible-password-hidden"></use>
                        </svg>
                        <svg @click="showPass = showPass" v-show="showPass" class="change-password__svg-show">
                            <use href="#visible-password-hidden"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.content__inputs {
    margin-top: 3.4rem;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
}

.inputs-text__change-button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 42.5rem;

    span {
        color: var(--black);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0018rem;
    }

    div {
        border-radius: 50%;
        background: var(--gray);
        width: 2.4rem;
        height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 1.6rem;
            height: 1.6rem;
        }
    }
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

.inputs-icon__change-password-container {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
    margin-top: 2.2rem;
}
</style>