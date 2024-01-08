<script setup lang="ts">
import { ref } from 'vue';
// let inputData = {
//     value: 30,
//     min: 0,
//     max: 120,
// }
const props = defineProps({
    isDisabled: {
        type: Boolean,
        required: true,
    },
    minimum: {
        type: String,
        required: true
    },
    maximum: {
        type: String,
        required: true
    }
})
let value = ref(120);
</script>

<template>
    <div class="user-info__number-reviews">
        <p>{{ value }}</p>
        <svg>
            <use href="#star"></use>
        </svg>
    </div>
    <input type="range" :disabled="isDisabled" :min="minimum" v-model="value" :max="maximum" class="styled-range" />
    <div class="user-info__range-reviews">
        <div class="range-reviews__min">
            <div class="user-info__number-reviews">
                <p>{{ minimum }}</p>
                <svg>
                    <use href="#star"></use>
                </svg>
            </div>
            <svg>
                <use href="#statusUser"></use>
            </svg>
        </div>
        <div class="range-reviews__max">
            <div class="user-info__number-reviews">
                <p>{{ maximum }}</p>
                <svg>
                    <use href="#star"></use>
                </svg>
            </div>
            <svg>
                <use href="#statusUser"></use>
            </svg>
        </div>
    </div>
</template>

<style lang="scss" scoped>
input[type=range].styled-range {
    -webkit-appearance: none;
    width: 100%;
    margin: 15px 0;
}

/* Track */
input[type=range].styled-range::-webkit-slider-runnable-track {
    width: 100%;
    height: .4rem;
    cursor: pointer;
    background: #138889;
}

input[type=range].styled-range::-moz-range-track {
    width: 100%;
    height: .4rem;
    cursor: pointer;
    background: #138889;
}

/* Handle */
input[type=range].styled-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #138889;
    cursor: pointer;
    margin-top: -0.6rem;
}

input[type=range].styled-range::-moz-range-thumb {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background: #138889;
    cursor: pointer;
}

.user-info__number-reviews {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    svg {
        width: 1.3rem !important;
        height: 1.2rem !important;
        fill: #FFD74A;
    }

    p {
        color: --Black;
        leading-trim: both;
        text-edge: cap;
        font-family: Gilroy;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0014rem;
    }
}

.user-info__range-reviews {
    display: flex;
    justify-content: space-between;
}

.range-reviews__max,
.range-reviews__min {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    svg {
        width: 4rem;
        height: 4rem;
    }

    p {
        color: rgba(26, 26, 26, 0.40) !important;
        leading-trim: both;
        text-edge: cap;
        font-family: Gilroy;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}</style>