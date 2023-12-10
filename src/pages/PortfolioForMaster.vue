<script setup lang="ts">
import { ref } from 'vue';

import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue";
import BackButton from "../components/BackButton.vue";
import PortfolioChangePhoto from "../components/PortfolioChangePhoto.vue";
import ContentInputs from "../components/ContentInputs.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import Sertificate from "../components/Sertificate.vue";
import AddPortfolioCard from "../components/AddPortfolioCard.vue"


import CustomSelect from '../components/CustomSelect.vue';

const selectSpecializationOptions = ref([
    { label: 'Мастер художественной росписи', value: '1' },
    { label: 'Тату мастер', value: '2' },
    // ... другие опции
]);

const selectMainSideOptions = ref([
    { label: 'Мастер художественной росписи', value: '1' },
    { label: 'Тату мастер', value: '2' },
    // ... другие опции
]);

const selectedOption = ref('');
const selectedMainSideOption = ref(''); // Изменено имя переменной


</script>

<template>
    <Header />
    <div class="page-padding-sides">
        <BackButton />
        <PortfolioChangePhoto />
        <ContentInputs class="portfolio-for-master__inp-position" />

        <div class="portfolio-for-master__types">
            <h2>
                Специализация
            </h2>

            <CustomSelect v-model="selectedOption" :options="selectSpecializationOptions" class="portfolio-for-master__input" />
        </div>

        <div class="portfolio-for-master__types">
            <h2>
                Укажите вашу сильную сторону
            </h2>

            <CustomSelect v-model="selectedMainSideOption" :options="selectMainSideOptions" class="portfolio-for-master__input" />
        </div>

        <div class="porfolio-for-clients__portfolio-wrapper">
            <h2>Портфолио</h2>

            <div class="porfolio-for-clients__portfolio-inner">
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <AddPortfolioCard />
            </div>
        </div>

        <div class="porfolio-for-clients__portfolio-wrapper">
            <h2>Докуметны</h2>

            <div class="porfolio-for-clients__portfolio-inner">
                <Sertificate />
                <Sertificate />
                <Sertificate />
                <AddPortfolioCard />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss">
.adding {
    display: none;
}

.portfolio-for-master__inp-position {
    width: 87.2rem;
    flex-direction: unset !important;
    flex-wrap: wrap;

    .content__inputs__change-password-wrapper {
        position: relative;

    }

    .inputs-icon__change-password-container {
        position: absolute;
    }
}

.portfolio-for-master__types {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
        color: var(--black);
        font-size: 1.8rem;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0018rem;
    }
}

.portfolio-for-master__input {
    

    .selected-value {
        position: relative;
        cursor: pointer;
        padding: 1.4rem;
        border-radius: 0.8rem;
        border: 0.1rem solid var(--gray);
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0016rem;
        width: 42.5rem;

        svg {
            width: 2rem;
            height: 2rem;
        }
    }

    .options {
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: var(--white);
        border-radius: 0.8rem;
        border: 0.1rem solid var(--gray);
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0016rem;
        padding: 1.4rem;
        position: absolute;
        width: 42.5rem;
    }

    .option {
        cursor: pointer;
    }
}
</style>