<script setup lang="ts">
import Header from "../components/Header.vue";
import customAccordeon from "../components/customAccordeon.vue";
import customCard from "../components/customCard.vue";


</script>

<template>
    <Header />
    <div class="page-padding-sides">
        <div class="order-feed">
            <div class="order-feed__filter">
            <p>Фильтр</p>
            <customAccordeon textButton="Роспись стен" />
            <customAccordeon textButton="Бьюти" />
            <customAccordeon textButton="Тату" />
            <customAccordeon textButton="Дизайн" />
            <customAccordeon textButton="Граффити" />
            <customAccordeon textButton="Кастом" />
        </div>
        <div class="order-feed__item">
            <div class="item__card">
                <customCard />
                <customCard />
                <customCard />
                <customCard />
                <customCard />
                <customCard />
                <customCard />
                <customCard />
            </div>
        </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
.modal-overlay {
    display: flex;
    justify-content: center;
  }

::v-deep .close-button {
    position: absolute;
    top: 8rem;
    right: 1.4rem;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
  
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
::v-deep .card-profile {
    flex: 0;
}
.order-feed {
    display: flex;
    margin-top: 12rem;
    gap: 2rem;
}
.item__card {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 2rem;
    width: auto;
}
.order-feed__filter {
    width: 30%;
    padding: 2rem 1.6rem;
    border-radius: 1.6rem;
    background: #FFF;
    box-shadow: 0px 0px 20px 4px rgba(188, 188, 188, 0.25);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: max-content;
    @include breakpoint($sm-bp) {
        display: none;
    }
    p {
        color: var(--Black);
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        margin-bottom: 2rem;
    }
}
.order-feed__item {
    display: flex;
    flex-wrap: wrap;
    width: 65%;
}
</style>