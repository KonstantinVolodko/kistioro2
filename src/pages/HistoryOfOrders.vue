<script setup lang="ts">
    import PortfolioMasterCard from "@/components/PortfolioMasterCard.vue";
    import OrderInfo from "@/components/OrderInfo.vue";
    import inWork from "@/components/inWork.vue";
    import Header from "../components/Header.vue";
</script>

<template>
    <Header />
    <div class="page-padding__center-content">
        <div class="page-padding-sides__profile-container">
            <PortfolioMasterCard text="Пользователь"/>
            <div class="profile-container__parametrs">
                <div class="parametrs__settings-circly">
                    <svg class="settings-circly__svg">
                        <use href="#setting-param"></use>
                    </svg>
                </div>
                <div class="parametrs__settings-circly">
                    <svg class="parametrs__info">
                        <use href="#info-param"></use>
                    </svg>
                </div>
            </div>
        </div>
        <h3 class="history-orders">История заказов</h3>
        <div class="center-content__orders">
            <div class="orders__title">
                <p>Заказ</p>
                <p>Дата</p>
                <p>Статус</p>
            </div>
            <OrderInfo />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-padding-sides__profile-container {
    display: flex;
    justify-content: space-between;
}
.profile-container__parametrs {
    display: flex;
    gap: 2.6rem;
}
.parametrs__settings-circly {
    margin-top: 1.6rem;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    background: #FFF;
    filter: drop-shadow(0px 0px 8px rgba(175, 175, 175, 0.25));
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.settings-circly__svg {
    width: 2.6rem;
    height: 2.6rem;
    flex-shrink: 0;
}
.parametrs__info {
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
}
.history-orders {
    color: var(--Black);
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.002rem;
    text-align: center;
    margin-top: 1.5rem;
}
.center-content__orders {
    margin-top: 2.8rem;
    display: flex;
    flex-direction: column;
}
.orders__title {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.orders__title p {
    color: rgba(44, 44, 44, 0.50);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
}
</style>