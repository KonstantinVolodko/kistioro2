<script setup lang="ts">
    import Header from "../components/Header.vue";
    import Map from "../components/Map.vue";
    import GreenButton from "../components/GreenButton.vue"

    const handleClick = () => {
        // Обработка клика на кнопке
    }
</script>

<template>
    <Header />
    <div class="map-container">
        <Map />
        <GreenButton buttonText="Создать заказ" @click="handleClick" class="button-position"/>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/base.scss';

.map-container {
    position: relative;
    z-index: 1;
}

.button-position {
    position: absolute;
    bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1111;
}

</style>