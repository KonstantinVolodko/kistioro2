<script setup lang="ts">

import Header from "../components/Header.vue";
import BackButton from "../components/BackButton.vue";
import PortfolioChangePhoto from "../components/PortfolioChangePhoto.vue";
import ContentInputs from "../components/ContentInputs.vue";
import NotActiveButton from "../components/NotActiveButton.vue";

</script>

<template>
    <Header />
    <div class="page-padding__center-content">
        <BackButton />
        <PortfolioChangePhoto />
        <ContentInputs />
        <NotActiveButton text="Изменить пароль"></NotActiveButton>
    </div>
</template>

<style lang="scss" scoped>

</style>