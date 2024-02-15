<script setup lang="ts">
import Header from "../components/Header.vue";

import { ref } from 'vue';

const items = ref([
    { label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.' },
    { label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.', content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.' },
]);

const openIndex = ref(-1);

const toggleItem = (index: number) => {
    openIndex.value = openIndex.value === index ? -1 : index;
};

const isOpen = (index: number) => openIndex.value === index;
</script>

<template>
    <Header />
    <div class="page-padding-sides">
        <div class="faq">
            <div class="faq__left-part">
                <div class="faq-container" v-for="(item, index) in items" :key="index">
                    <button class="faq-button-dropdown" :class="{ active: isOpen(index) }" @click="toggleItem(index)">
                        {{ item.label }}
                        <svg class="drowdown-arrow">
                            <use href="#drowdown-arrow"></use>
                        </svg>
                    </button>
                    <div class="faq-content-dropdown" v-if="isOpen(index)">
                        {{ item.content }}
                    </div>
                    <div class="hr"></div>
                </div>
            </div>
            <div class="faq__right-part">
                <div class="faq-img">
                    <img src="../assets/images/FAQ/bg.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.faq-button-dropdown.active {
    svg {
        transform: rotate(180deg);
    }
}
.faq-container {
    margin-top: 1.6rem;
    transition: all .3s;
}
.drowdown-arrow {
    width: 2.2rem;
    height: 2.2rem;
}
.hr {
    height: 0.1rem;
    background-color: #F1F1F1;
    width: 90%;
    margin-top: 1.6rem;
}
.page-padding-sides {
    padding-right: 0rem;
}
.faq {
    display: flex;
    justify-content: space-between;
}
.faq-img {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.faq__left-part {
    width: 50%;
    margin-top: 5.3rem;
}
.faq-button-dropdown {
    width: 90%;
    background: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--black);
    transition: all .2s;
}
.faq-content-dropdown {
    margin-top: 1.6rem;
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--black);
}
</style>