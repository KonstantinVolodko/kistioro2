<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import BackButton from "../components/BackButton.vue";
import PortfolioMasterCard from "../components/PortfolioMasterCard.vue";
import PortfolioItem from "../components/PortfolioItem.vue";
import Sertificate from "../components/Sertificate.vue";
import AddPortfolioCard from "../components/AddPortfolioCard.vue";
import ReviewStars from "../components/ReviewStars.vue";
import ReviewItem from "../components/ReviewItem.vue"
</script>

<template>
    <Header />
    <div class="page-padding-sides">
        <BackButton />

        <PortfolioMasterCard />

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

        <div class="porfolio-for-clients__portfolio-wrapper">
            <h2>Отзывы
                <ReviewStars />
            </h2>

            <div class="review-wrapper">
                <ReviewItem />
            </div>

            <button></button>
        </div>
    </div>

    <Footer />
</template>

<style lang="scss" scoped>
@import '../assets/styles/base.scss';

h2 {
    color: var(--black);
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.002rem;
    display: flex;
    gap: 0.8rem;
}

.porfolio-for-clients__portfolio-wrapper {
    margin-top: 2rem;
}

.porfolio-for-clients__portfolio-inner {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
}
</style>