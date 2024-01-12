<script setup>
import { ref, defineEmits } from "vue";
import ServicesCards from "../components/ServicesCards.vue";
import GreenButton from "../components/GreenButton.vue";
import PortfolioMasterCard from "../components/PortfolioMasterCard.vue";
import ModalPattern from "../components/modalPattern.vue"; // Импортируйте ваш компонент modalPattern

const showModal = ref(false);
const currentImage = ref("");

const openModal = (imageSrc) => {
  currentImage.value = imageSrc;
  showModal.value = true;
};

const emits = defineEmits(["toggleProjectDetails"]);
</script>

<template>
  <div class="master-details-modal__content">
    <ServicesCards />
    <PortfolioMasterCard class="master-details-modal__master-card" />

    <div class="master-details-modal__position-container">
      <div class="master-details-modal__position-price">2000 - 4000 за м2</div>

      <div class="master-details-modal__time">16 мин</div>

      <div class="master-details-modal__position">7.4 км</div>
    </div>

    <ul>
      <li
        @click="
          openModal(
            'https://cdn.pixabay.com/photo/2023/12/12/13/28/waterfall-8445292_1280.jpg'
          )
        "
      >
        <img
          src="../assets/images/portfolioForClient/portfolio-item.jpg"
          alt="#"
        />
      </li>

      <li class="other-images" @click="$emit('toggleProjectDetails')">
        <div>
          <img
            src="../assets/images/portfolioForClient/portfolio-item.jpg"
            alt="#"
          />
          <p>999+</p>
        </div>
      </li>
    </ul>

    <div class="master-details__green-button-container">
      <GreenButton buttonText="Написать" class="master-details__green-button" />
    </div>
  </div>

  <ModalPattern v-model="showModal" class="sertificate-modal">
    <img :src="currentImage" alt="Просмотр изображения" />
  </ModalPattern>
</template>

<style lang="scss" scoped>
.master-details-modal__content {
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.master-details-modal__position-container {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1.5rem;
}

.master-details-modal__position-price {
  color: var(--black);
  font-size: 2.4rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0024rem;
}

.master-details-modal__time,
.master-details-modal__position {
  color: var(--opacity-gray);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.0016rem;
}

.master-details-modal__content {
  background: var(--white);
  height: 100%;
  position: relative;
  width: 40rem;
  padding: 2rem 1.6rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 2.4rem;

  li {
    width: 11.2rem;
    overflow: hidden;
    border-radius: 1.2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.master-details__green-button-container {
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
}

.other-images {
  position: relative;
  cursor: pointer;

  img {
    filter: blur(0.2rem) brightness(0.7);
  }

  p {
    position: absolute;
    z-index: 11;
    color: var(--white);
    font-family: Gilroy;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.0016rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

::v-deep .master-details-modal__master-card {

  .portfolio-master-card__img {
    width: 8rem;
    height: 8rem;
  }
}
</style>
