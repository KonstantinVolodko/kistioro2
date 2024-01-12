<script setup>
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
.add-case-modal__content {
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
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.0016rem;
    margin-top: 2.4rem;
  }

  .inputGroup {
    margin-top: 3.2rem;
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
