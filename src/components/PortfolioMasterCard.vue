<script setup lang="ts">
import ReviewStars from "./ReviewStars.vue";
</script>

<template>
  <div class="portfolio-master-card">
    <div class="portfolio-master-card__img">
      <img src="../assets/images/portfolioForClient/masterPhoto.jpg" alt="#" />
    </div>

    <div class="portfolio-master-card__text-container">
      <div class="portfolio-master-card__title">
        <h2>Алина</h2>
        <ReviewStars />
      </div>

      <div class="portfolio-master-card__subtitle">
        Мастер художественной росписи
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
.portfolio-master-card {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.portfolio-master-card__img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.portfolio-master-card__text-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.portfolio-master-card__title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  @include breakpoint($xl-bp) {
    justify-content: center;
  }
  h2 {
    color: var(--black);
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0.002rem;
  }
}

.portfolio-master-card__subtitle {
  color: var(--black);
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.0014rem;
  @include breakpoint($xl-bp) {
    text-align: center;
  }
}
</style>
