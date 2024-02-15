<script setup lang="ts">
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

        <PortfolioMasterCard text="Мастер художественной росписи"/>

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
                <ReviewItem />
                <ReviewItem />
            </div>

            <div class="review__show-more-container">
                <button class="review__show-more">Показать всё
                    <svg>
                        <use href="#down-arrow"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style lang="scss">
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';

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
    margin-top: 2.8rem;
}

.porfolio-for-clients__portfolio-inner {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
}

.review-wrapper {
    display: flex;
    gap: 2.8rem;
    margin-top: 1.6rem;
    @include breakpoint($sm-bp) {
        flex-wrap: wrap;
    }
}

.review__show-more-container {
    display: flex;
    justify-content: center;
}

.review__show-more {
    margin-top: 1.8rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
    border: none;
    background: none;

    svg {
        width: 1.8rem;
        height: 1.8rem;
    }
}

.portfolio-master-card {
    margin-top: 2.4rem;
}

</style>