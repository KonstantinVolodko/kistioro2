<script setup lang="ts">
</script>

<template>
    <div class="page-404">
        <div class="page-404__image">
            <img src="../assets/images/404.png" alt="">
        </div>
        <div class="page-404__title">
            <p class="warning">Ошибка</p>
            <p class="title">404</p>
            <p class="subtitle">страница не найдена</p>
        </div>
        <div class="page-404__subtitle">
            <p>Проверьте подключение к интернету или, возможно, у нас неполадки с серверами, но мы их уже чиним!</p>
            <button class="header__button transparent-button">Перезагрузить страницу</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
}
.page-404__image {
    width: 23rem;
    height: 23rem;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.page-404__title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.3rem;
}
.warning, .subtitle{
    font-weight: 500;
    font-size: 1.6rem;
    text-align: center;
    color: #d5d5d5;
}
.title {
    font-weight: 500;
    font-size: 10rem;
    color: rgba(44, 44, 44, 0.2);
}
.page-404__subtitle {
    margin-top: 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.8rem;
    p {
        font-weight: 400;
        font-size: 1.6rem;
        text-align: center;
        color: var(--black);
    }
}
</style>