<script setup lang="ts">
import modalPattern from "../components/modalPattern.vue";
import InputChangeProfile from "../components/InputChangeProfile.vue";
</script>

<template>
  <modalPattern>
    <div class="share-order__content">
      <h2>Поделиться заказом</h2>

      <p>
        <span>Поделись</span> заказом с другом и
        <span>получи дополнительные звёзды</span> к своему рейтингу. Звёзды
        активирубтся после регистрации приглашённого друга
      </p>

      <InputChangeProfile type="text" label="Ссылка на заказ" />

      <div class="share-order__img">
        <img src="../assets/images/share-order-img.jpg" alt="#" />
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

.share-order__content {
  background: var(--white);
  height: fit-content;
  position: relative;
  margin: 0 auto;
  width: 38rem;
  padding: 2rem 2.4rem;
  border-radius: 1.2rem;
  margin-top: 20%;
  height: fit-content;

  h2 {
    color: var(--black);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0024rem;
    display: flex;
    justify-content: center;
  }

  p {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
    margin-top: 2.4rem;

    span {
      font-weight: 600;
    }
  }

  .inputGroup {
    margin-top: 3.2rem;
  }

  input {
    width: 100%;
  }
}

.share-order__img {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
