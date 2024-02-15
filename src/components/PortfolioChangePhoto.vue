<script setup lang="ts">

</script>

<template>
    <div class="portfolio-master-card">
        <div class="portfolio-master-card__img">
            <img src="../assets/images/portfolioForClient/masterPhoto.jpg" alt="#">
        </div>
        <div class="portfolio-photo__change-img">
            <input id="change-img__file" type="file" class="change-img__file" multiple>
            <label class="change-img__true-file" for="change-img__file">
                <span>
                    <svg class="change-file">
                        <use href="#change-file"></use>
                    </svg>
                </span>
                <span>
                    Загрузить новое фото
                </span>
            </label>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
.portfolio-master-card {
    display: flex;
    gap: 1.6rem;
    margin-top: 1.6rem;
}

.portfolio-master-card__img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.portfolio-photo__change-img {
    display: flex;
    align-items: center;
    @include breakpoint($sm-bp) {
        display: none;
    }
}
.change-file {
    width: 2rem;
    height: 2rem;
}
.change-img__file {
    display: none;
}
.change-img__true-file {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
}
.change-img__true-file span:last-child {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: Gilroy;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.8rem; /* 175% */
    text-decoration-line: underline;
}
</style>