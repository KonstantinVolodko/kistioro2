<script setup>

</script>

<template>
    <div class="portfolio-master-card">
        <div class="portfolio-master-card__img">
            <img src="../assets/images/portfolioForClient/masterPhoto.jpg" alt="#">
        </div>

        <div class="portfolio-master-card__text-container">
            <div class="portfolio-master-card__title">
                <h2>Алина</h2>
                <div>
                    <svg>
                        <use href="#review-star"></use>
                    </svg>

                    <span>
                        4.9
                    </span>
                </div>
            </div>

            <div class="portfolio-master-card__subtitle">
                Мастер художественной росписи
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.portfolio-master-card {
    display: flex;
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

    h2 {
        color: var(--black);
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 0.002rem;
    }

    div {
        display: flex;
        gap: 0.4rem;
        align-items: center;

        svg {
            width: 1.3rem;
            height: 1.2rem;
        }

        span {
            color: var(--black);
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 0.0014rem;
        }
    }
}
</style>