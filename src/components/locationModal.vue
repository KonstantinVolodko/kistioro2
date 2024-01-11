<script setup>
import { ref } from "vue";
import BackButton from "../components/BackButton.vue";
import AutocompleteInput from "../components/AutocompleteInput.vue";

async function fetchSuggestions(query) {
  return ["Подсказка 1", "Подсказка 2", "Подсказка 3"].filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
}
</script>

<template>
  <div class="location-modal__content">
    <div class="location-modal__title">
      <BackButton @click="$emit('close')"/>
      <h2>Где вы?</h2>
    </div>

    <div class="location-modal__input-container">
      <AutocompleteInput
        :fetchSuggestions="fetchSuggestions"
        placeholder="Начните вводить задачу..."
        class="autocomplete-input"
      />

      <button class="location-modal__continue-button">
        <svg>
            <use href="#arrow-right"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.location-modal__content {
  background: var(--white);
  height: 100%;
  position: relative;
  width: 40rem;
  padding: 2rem 1.6rem;
}

.location-modal__title {
    display: flex;
    
    h2 {
        margin-left: 7.7rem;
    }
}

.location-modal__continue-button {
    background: var(--darkGreen);
    border-radius: 50%;
    border: none;
    width: 3.9rem;
    height: 3.9rem;

    svg {
        width: 100%;
        height: 100%;
    }
}

.location-modal__input-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 4rem;

    div {
        width: 86%;
    }
}
</style>
