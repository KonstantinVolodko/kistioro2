<script setup lang="ts">
import modalPattern from "../components/modalPattern.vue";
import InputChangeProfile from "../components/InputChangeProfile.vue";
import GreenButton from "../components/GreenButton.vue";
</script>

<template>
  <modalPattern>
    <div class="add-case-modal__content">
      <h2>Добавить работу</h2>

      <div class="add-case-modal__field">
        <svg>
          <use href="#plus-icon"></use>
        </svg>
      </div>

      <InputChangeProfile type="text" label="Придумайте название" />

      <div class="add-case-modal__button-container">
        <GreenButton class="add-case-modal__button" buttonText="Опубликовать" />
      </div>
    </div>
  </modalPattern>
</template>

<style lang="scss">
@import "../assets/styles/mixins.scss";
@import "../assets/styles/vars.scss";

::v-deep .modal-content {
  @include breakpoint($sm-bp) {
    height: 100%;
  }
}

.add-case-modal__content {
  background: var(--white);
  height: fit-content;
  position: relative;
  margin: 0 auto;
  width: 33rem;
  padding: 1.6rem;
  border-radius: 1.2rem;
  margin-top: 20%;
  height: fit-content;

  h2 {
    color: var(--black);
    font-size: 1.8rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.00018rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inputGroup {
    margin-top: 2.3rem;

  }

  input {
    width: 100%;
  }
}

.add-case-modal__field {
  cursor: pointer;
  border-radius: 0.8rem;
  border: 0.1rem dashed #d2d2d2;
  width: 100%;
  height: 17rem;
  position: relative;
  margin-top: 1.2rem;

  svg {
    width: 4.5rem;
    height: 4.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}

.add-case-modal__button-container {
    margin-top: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
    }
}
</style>
