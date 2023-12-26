<script setup>
import { defineProps, defineEmits } from "vue";
import AutocompleteInput from "../components/AutocompleteInput.vue";
import GreenButton from "../components/GreenButton.vue";

const emits = defineEmits(["toggleAddPhoto"]);
async function fetchSuggestions(query) {
  return ["Подсказка 1", "Подсказка 2", "Подсказка 3"].filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
}
</script>

<template>
  <div class="create-order__content">
    <h2>Создать заказ</h2>
    <ul class="create-order__list-cards">
      <li>
        <button class="exclamation-button">
          <svg>
            <use href="#exclamation-icon"></use>
          </svg>
        </button>

        <div class="create-order-image">
          <img
            src="../assets/images/createOrderModal/createOrderListItem.jpg"
            alt="#"
          />
        </div>

        <p>Роспись стен</p>

        <div class="create-order-border-line"></div>
      </li>

      <li>
        <button class="exclamation-button">
          <svg>
            <use href="#exclamation-icon"></use>
          </svg>
        </button>

        <div class="create-order-image">
          <img
            src="../assets/images/createOrderModal/createOrderListItem.jpg"
            alt="#"
          />
        </div>

        <p>Роспись стен</p>

        <div class="create-order-border-line"></div>
      </li>

      <li>
        <button class="exclamation-button">
          <svg>
            <use href="#exclamation-icon"></use>
          </svg>
        </button>

        <div class="create-order-image">
          <img
            src="../assets/images/createOrderModal/createOrderListItem.jpg"
            alt="#"
          />
        </div>

        <p>Роспись стен</p>

        <div class="create-order-border-line"></div>
      </li>

      <li>
        <button class="exclamation-button">
          <svg>
            <use href="#exclamation-icon"></use>
          </svg>
        </button>

        <div class="create-order-image">
          <img
            src="../assets/images/createOrderModal/createOrderListItem.jpg"
            alt="#"
          />
        </div>

        <p>Роспись стен</p>

        <div class="create-order-border-line"></div>
      </li>

      <li>
        <button class="exclamation-button">
          <svg>
            <use href="#exclamation-icon"></use>
          </svg>
        </button>

        <div class="create-order-image">
          <img
            src="../assets/images/createOrderModal/createOrderListItem.jpg"
            alt="#"
          />
        </div>

        <p>Роспись стен</p>

        <div class="create-order-border-line"></div>
      </li>

      <li>
        <button class="exclamation-button">
          <svg>
            <use href="#exclamation-icon"></use>
          </svg>
        </button>

        <div class="create-order-image">
          <img
            src="../assets/images/createOrderModal/createOrderListItem.jpg"
            alt="#"
          />
        </div>

        <p>Роспись стен</p>

        <div class="create-order-border-line"></div>
      </li>
    </ul>

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
      <li>
        <svg>
          <use href="#point-icon"></use>
        </svg>
        <input type="text" placeholder="Где" />
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
      @click="showModal = true"
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

.create-order__list-cards {
  margin-top: 2rem;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  li {
    border-radius: 1rem;
    position: relative;
    width: 11.4rem;
    height: 10rem;
    border: 0.1rem solid var(--black);
    box-shadow: 0px 0px 0.4rem 0.2rem rgba(171, 171, 171, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.8rem 1rem 0rem 1rem;

    p {
      color: var(--black);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.0014rem;
    }
  }
}

.exclamation-button {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  padding: 0;
  fill: transparent;
  stroke: var(--black);

  svg {
    width: 100%;
    height: 100%;
  }
}

.create-order-image {
  border-radius: 50%;
  overflow: hidden;
  width: 6.5rem;
  height: 6.5rem;
  border: 0.1rem solid var(--black);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.create-order-border-line {
  height: 0.1rem;
  background: black;
  width: 40%;
  margin-top: 0.8rem;
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
