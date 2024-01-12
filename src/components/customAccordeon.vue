<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  props: {
    textButton: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const checkboxes = ref([
      { label: 'Мастер малярных и штукатурных работ', checked: false },
      { label: 'Художник широкого профиля', checked: false },
      // Добавьте дополнительные чекбоксы по необходимости
    ]);

    return { isOpen, checkboxes };
  }
});
</script>

<template>
    <div>
        <button @click="isOpen = !isOpen">
            {{ textButton }}
            <svg>
                <use href="#filter-arrow"></use>
            </svg>
        </button>
        <div class="accordeon-item" v-if="isOpen">
            <div v-for="(item, index) in checkboxes" :key="index">
                <input type="checkbox" v-model="item.checked">
                <label>
                    {{ item.label }}
                </label>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
button {
    width: 100%;
    display: flex;
    background-color: transparent;
    border: none;
    justify-content: space-between;
    align-items: center;
    color: var(--Black);
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

svg {
    width: 2.2rem;
    height: 2.2rem;
    fill: transparent;
}

.accordeon-item {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
.accordeon-item div {
    display: flex;
    gap: .7rem;
}
label {
    color: #000;
    leading-trim: both;
    text-edge: cap;
    font-family: Gilroy;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.032rem;
}</style>