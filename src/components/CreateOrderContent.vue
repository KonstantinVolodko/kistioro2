<script setup>
import { defineProps, defineEmits } from "vue";
import AutocompleteInput from "../components/AutocompleteInput.vue";
import GreenButton from "../components/GreenButton.vue";
import ServicesCards from "../components/ServicesCards.vue";

const emits = defineEmits([
  "toggleAddPhoto",
  "toggleLocation",
  "toggleMasterSearch",
]);
async function fetchSuggestions(query) {
  return ["Подсказка 1", "Подсказка 2", "Подсказка 3"].filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
}
</script>

<template>
  <div class="create-order__content">
    <h2>Создать заказ</h2>

    <ServicesCards />

    <ul class="create-order__input-container">
      <li>
        <svg>
          <use href="#brush-icon"></use>
        </svg>
        <AutocompleteInput
          :fetchSuggestions="fetchSuggestions"
          placeholder="Начните вводить задачу..."
          class="autocomplete-input"
        />
        <button class="camera-button" @click="$emit('toggleAddPhoto')">
          <svg>
            <use href="#camera-icon"></use>
          </svg>
        </button>
      </li>
      <li @click="$emit('toggleLocation')">
        <svg>
          <use href="#point-icon"></use>
        </svg>
        <div class="create-order__location-inp">Где</div>
      </li>
      <li>
        <svg>
          <use href="#ruble-icon"></use>
        </svg>
        <input type="text" placeholder="Предложите цену" />
      </li>
      <li>
        <svg>
          <use href="#text-field-icon"></use>
        </svg>
        <input type="text" placeholder="Описание" />
      </li>
    </ul>

    <GreenButton
      buttonText="Предложить цену"
      @click="$emit('toggleMasterSearch')"
      class="create-order__green-button"
    />
  </div>
</template>

<style lang="scss" scoped>
.create-order__content {
  background: var(--white);
  height: 100%;
  position: relative;
  width: 40rem;
  padding: 2rem 1.6rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
}

h2 {
  color: var(--black);
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.0024rem;
}

.modal-content {
  padding: 2.8rem 1.6rem 2rem 1.6rem;
  background: var(--white);
  height: 100%;
  position: relative;
}
.create-order__input-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 4.2rem;

  li {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    svg {
      width: 2.1rem;
      height: 2.1rem;
      fill: transparent;
    }

    input {
      width: 100%;
      color: rgba(44, 44, 44, 0.6);
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.0016rem;
      padding: 0.8rem 0rem 1rem 0rem;
      border: none;
      outline: none;
      border-bottom: 0.1rem solid rgba(44, 44, 44, 0.2);
      cursor: pointer;
    }

    .create-order__location-inp {
      width: 100%;
      color: rgba(44, 44, 44, 0.6);
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: 0.0016rem;
      padding: 0.8rem 0rem 1rem 0rem;
      border: none;
      outline: none;
      border-bottom: 0.1rem solid rgba(44, 44, 44, 0.2);
      cursor: pointer;
    }

    &:first-child {
      button {
        background: var(--darkGreen);
        border: none;
        width: 3.7rem;
        height: 3.7rem;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;

        svg {
          width: 80%;
          height: 80%;
        }
      }
    }

    .autocomplete-input {
      width: 28rem;
    }
  }
}

.create-order__green-button {
  display: flex;
  margin: 2.4rem auto 0rem auto;
}
</style>
