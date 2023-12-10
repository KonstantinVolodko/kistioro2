<script setup lang="ts">

</script>

<template>
    <div class="review-inner">
        <div class="review-inner__person">
            <div class="review-inner__preson-img">
                <img src="../assets/images/review/review-person.jpg" alt="#">
            </div>

            <div class="review-inner__person-info">
                <div class="review-inner__person-title">
                    <h3>
                        Дмитрий
                    </h3>

                    <p>18.08.2023</p>
                </div>
                <p>Заказ “Роспись стены 4х4 м2”</p>
            </div>
        </div>

        <div class="review-inner__stars-wrapper">
            <svg>
                <use href="#review-star"></use>
            </svg>
            <svg>
                <use href="#review-star"></use>
            </svg>
            <svg>
                <use href="#review-star"></use>
            </svg>
            <svg>
                <use href="#review-star"></use>
            </svg>
            <svg>
                <use href="#review-star"></use>
            </svg>
        </div>

        <div class="review-inner__review-text">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
                tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.review-inner {
    border-radius: 1.2rem;
    border: 0.1rem solid var(--gray);
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 38.4rem;
}

.review-inner__person {
    display: flex;
    gap: 1.2rem;
    align-items: center;
}

.review-inner__preson-img {
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

.review-inner__person-info {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    p {
        color: rgba(44, 44, 44, 0.60);
        font-size: 1.4rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0014rem;
    }
}

.review-inner__person-title {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    h3 {
        color: var(--black);
        font-size: 1.8rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.0018rem;
    }
}

.review-inner__stars-wrapper {
    display: flex;
    gap: 0.4rem;

    svg {
        width: 1.5rem;
        height: 1.4rem;
    }
}

.review-inner__review-text {
    p {
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: normal;
    }
}
</style>