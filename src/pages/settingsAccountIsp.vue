<script setup lang="ts">

import Header from "../components/Header.vue";
import BackButton from "../components/BackButton.vue";
import PortfolioChangePhoto from "../components/PortfolioChangePhoto.vue";
import statusUser from "../components/status/statusUser.vue";
import InputChangeProfile from "../components/InputChangeProfile.vue";
import reviewsRange from "../components/range/reviewsRange.vue";
import ContentInputs from "../components/ContentInputs.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import Sertificate from "../components/Sertificate.vue";
import Footer from "../components/Footer.vue";

</script>

<template>
    <Header />
    <div class="page-padding-sides">
        <BackButton />
        <div class="change-photo__status-user">
            <PortfolioChangePhoto />
            <statusUser text="Новичок на сайте" />
        </div>
        <div class="user-info">
            <reviewsRange isDisabled="false" minimum="60" maximum="240" />
        </div>
        <div class="input__info">
            <ContentInputs />
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
                <PortfolioItem />
            </div>
        </div>

        <div class="porfolio-for-clients__portfolio-wrapper">
            <h2>Докуметны</h2>

            <div class="porfolio-for-clients__portfolio-inner">
                <Sertificate />
                <Sertificate />
                <Sertificate />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
.portfilio-item {
    cursor: pointer;
}
Header {
    position: relative !important;
}

.change-photo__status-user {
    display: flex;
    gap: 4.1rem;
    align-items: center;
}

.portfolio-master-card {
    margin-top: 0rem;
}

.change-photo__status-user {
    margin-top: 2.4rem;
}

.back-button {
    margin-top: 2.4rem;
}

.user-info {
    width: 25%;
}

.input__info {
    margin-top: 7.2rem;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
    row-gap: 1.6rem;
}</style>