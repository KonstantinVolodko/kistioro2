<script setup lang="ts">
import OrderItem from "../components/OrderItem.vue";
import OrderDate from "../components/OrderDate.vue";
import statusInWork from "../components/status/inWork.vue";
let data = [{
        id: 0,
        svgpath: "#paint-wall",
        text: "Расписать стену 3х3 м2",
        status: "Выполнено",
        date: "28.11.23",
        time: "14:00"
    },
    {
        id: 1,
        svgpath: "#paint-wall",
        text: "Декор комнаты 20 м2",
        status: "В работе",
        date: "28.11.23",
        time: "14:00"
    },
    {
        id: 2,
        svgpath: "#paint-wall",
        text: "Декор комнаты 20",
        status: "Не выполнено",
        date: "28.11.23",
        time: "14:00"
    },
    {
        id: 2,
        svgpath: "#paint-wall",
        text: "Декор комнаты 20",
        date: "28.11.23",
        time: "14:00"
    },
]

</script>

<template>
    <div class="hr"></div>
    <div v-for="item in data" class="order-wrapper">
        <div class="order-container">
            <OrderItem :text="item.text" :svg-path="item.svgpath" />
            <OrderDate :date="item.date" :time="item.time"/>
            <statusInWork />
        </div>
        <div class="hr"></div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/base.scss';
@import '../assets/styles/vars.scss';
@import '../assets/styles/mixins.scss';
    .wrapper {
        margin-top: 1.2rem;
    }
    .hr {
        width: 100%;
        height: 0.1rem;
        background: rgba(44, 44, 44, 0.20);
        margin: 1.65rem 0rem;
    }
    .order-container {
        display: flex;
        justify-content: space-between;
        p {
            @include breakpoint($sm-bp) {
                display: none;
            }
        }
    }
</style>