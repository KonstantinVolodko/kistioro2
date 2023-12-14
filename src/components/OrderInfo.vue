<script setup lang="ts">
import OrderItem from "../components/OrderItem.vue";
import OrderDate from "../components/OrderDate.vue";
import OrdersStatus from "../components/OrdersStatus.vue";

let data = [{
        id: 0,
        svgpath: "#paint-wall",
        text: "Расписать стену 3х3 м2",
    },
    {
        svgpath: "#paint-wall",
        text: "3122",
    }
]
</script>

<template>
    <div class="order-wrapper">
        <div class="hr"></div>
        <div class="order-container">
            <OrderItem svg-path="#paint-wall" text="Расписать стену 3х3 м2" />
            <OrderDate date="28.11.23" time="14:00"/>
            <OrdersStatus />
        </div>
        <div class="hr"></div>
        <div class="order-container">
            <OrderItem svg-path="#paint-wall" text="Декор комнаты 20 м2" />
            <OrderDate date="28.11.23" time="14:00"/>
            <OrdersStatus />
        </div>
        <div class="hr"></div>
        <div class="order-container">
            <OrderItem svg-path="#paint-wall" text="Картина, 24 см2" />
            <OrderDate date="28.11.23" time="14:00"/>
            <OrdersStatus />
        </div>
        <div class="hr"></div>
        <div class="order-container">
            <OrderItem svg-path="#paint-wall" text="Картина, 24 см2" />
            <OrderDate date="28.11.23" time="14:00"/>
            <OrdersStatus />
        </div>
        <div class="hr"></div>
        <div class="order-container">
            <OrderItem svg-path="#paint-wall" text="Картина, 24 см2" />
            <OrderDate date="28.11.23" time="14:00"/>
            <OrdersStatus />
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    }
</style>