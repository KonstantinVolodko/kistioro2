<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import PortfolioMasterCard from "../components/PortfolioMasterCard.vue";

export default {
  components: {
    PortfolioMasterCard,
  },
  setup() {
    const totalMinutes = 15;
    const totalTimeInSeconds = totalMinutes * 60;
    const timeLeft = ref(totalTimeInSeconds);
    const lineLength = ref(100);

    const formattedTime = computed(() => {
      const minutes = Math.floor(timeLeft.value / 60);
      const seconds = timeLeft.value % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    });

    const timer = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
        lineLength.value = (timeLeft.value / totalTimeInSeconds) * 100;
      } else {
        clearInterval(timer);
      }
    }, 1000);

    onMounted(() => {
      // Действия при монтировании компонента
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return { formattedTime, lineLength };
  },
};
</script>

<template>
  <div class="master-search-modal__content">
    <h2>Поиск исполнителя...</h2>

    <ul>
      <li>
        <div>
          <svg>
            <use href="#paint-wall"></use>
          </svg>

          <p>Расписать стену 4x4 м2</p>
        </div>

        <button>
          <svg>
            <use href="#change-file"></use>
          </svg>
        </button>
      </li>

      <li>
        <svg>
          <use href="#point-icon"></use>
        </svg>

        <p>ул. дорога на Туруханские Остр... 26к2</p>
      </li>

      <li>
        <svg>
          <use href="#ruble-icon"></use>
        </svg>

        <p><span>15 000 ₽,</span> онлайн перевод</p>
      </li>
    </ul>

    <div class="master-search-modal__price-container">
      <div>
        <button>-100</button>

        <p>15 000 ₽</p>

        <button class="--active">+100</button>
      </div>

      <div>
        <button>Изменить цену</button>
      </div>
    </div>

    <div class="master-search-modal__master-cards">
      <h2>Заявки</h2>

      <ul>
        <li>
          <div class="master-search-modal__timer-container">
            <div class="master-search-modal__timer-line">
              <div :style="{ width: lineLength + '%' }"></div>
            </div>

            <div class="master-search-modal__timer-time">
              Предложение действительно до {{ formattedTime }}
            </div>
          </div>

          <PortfolioMasterCard class="master-search-modal__master-card" />

          <div class="master-search-modal__master-card-price">
            <ul>
              <li>
                <img
                  src="../assets/images/portfolioForClient/portfolio-item.jpg"
                  alt="#"
                />
              </li>

              <li>
                <img
                  src="../assets/images/portfolioForClient/portfolio-item.jpg"
                  alt="#"
                />
              </li>

              <li>
                <img
                  src="../assets/images/portfolioForClient/portfolio-item.jpg"
                  alt="#"
                />
              </li>

              <li>
                <div>
                  <img
                    src="../assets/images/portfolioForClient/portfolio-item.jpg"
                    alt="#"
                  />
                  <p>999+</p>
                </div>
              </li>
            </ul>

            <div>
              <p>20 000 ₽</p>

              <p>16 мин</p>

              <p>7.4 км</p>
            </div>
          </div>

          <div class="master-search-modal__master-card-buttons">
            <button>Отклонить</button>

            <button>Чат</button>

            <button class="--active">Принять</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.master-search-modal__content {
  background: var(--white);
  height: 100%;
  position: relative;
  width: 40rem;
  padding: 2rem 1.6rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }

  h2 {
    color: var(--black);
    font-size: 2.4rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0024rem;
    margin: 0 auto;
    width: fit-content;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-bottom: 0.1rem solid var(--gray);
    padding-top: 2rem;
    padding-bottom: 2.4rem;

    li {
      display: flex;
      gap: 0.8rem;

      svg {
        width: 2.1rem;
        height: 2.1rem;
        fill: transparent;
      }

      p {
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.0016rem;

        span {
          font-weight: 600;
        }
      }

      &:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
          display: flex;
          gap: 0.8rem;

          svg {
            width: 2.4rem;
            height: 2.4rem;
          }

          p {
            color: var(--black);
            font-size: 2rem;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.002rem;
          }
        }

        button {
          background: var(--darkGreen);
          width: 3.7rem;
          height: 3.7rem;
          border-radius: 50%;
          border: none;
          padding: 0.6rem;

          svg {
            width: 100%;
            height: 100%;
            stroke: var(--white);
            fill: var(--white);
          }
        }
      }
    }
  }
}

.master-search-modal__price-container {
  padding-top: 2.4rem;
  border-bottom: 0.1rem solid var(--gray);
  padding-bottom: 2.4rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-child {
      button {
        border-radius: 10rem;
        padding: 1rem 2.8rem;
        background: rgba(44, 44, 44, 0.05);
        color: var(--opacity-gray);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0016rem;
        border: none;

        &.--active {
          background: var(--darkGreen);
          color: var(--white);
        }
      }

      p {
        color: var(--black);
        font-size: 2.4rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.0024rem;
      }
    }

    &:last-child {
      justify-content: center;
      margin-top: 1.6rem;

      button {
        color: rgba(44, 44, 44, 0.4);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.0016rem;
        border-radius: 0.8rem;
        background: rgba(44, 44, 44, 0.05);

        padding: 1.8rem 2.4rem;
        border: none;
      }
    }
  }
}

.master-search-modal__master-cards {
  color: var(--black);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0024rem;
  margin-top: 2.4rem;

  ul {
    margin-top: 2rem;

    & > li {
      padding: 2.4rem 2rem 2rem 2rem;
      border-radius: 1.2rem;
      border: 0.1rem solid var(--gray);
      width: 100%;
    }
  }
}

::v-deep .master-search-modal__master-card {
  .portfolio-master-card__img {
    width: 8rem;
    height: 8rem;
  }
}

.master-search-modal__master-card-price {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  ul {
    display: flex;
    align-items: flex-end;
    margin-top: 0;

    li {
      width: 5rem;
      height: 5rem;
      overflow: hidden;
      border-radius: 1.2rem;
      border: none;
      padding: 0;
      margin-left: -1rem;
      border: 0.2rem solid var(--white);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:first-child {
        width: 8.6rem;
        height: 8.2rem;
        margin-left: 0rem;
      }

      &:last-child {
        position: relative;

        img {
          filter: blur(0.2rem);
        }

        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--white);
          font-size: 1.6rem;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 0.0016rem;
          background: none;
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    p {
      color: rgba(44, 44, 44, 0.6);
      font-size: 1.6rem;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.0016rem;
      text-align: right;

      &:first-child {
        color: var(--black);
        text-align: right;
        font-size: 2.4rem;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.0024rem;
      }
    }
  }
}

.master-search-modal__master-card-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  button {
    color: var(--black);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.0016rem;
    border-radius: 0.8rem;
    background: rgba(44, 44, 44, 0.05);
    padding: 1rem 2rem;
    border: none;

    &.--active {
      background: var(--darkGreen);
      color: var(--white);
    }
  }
}

.master-search-modal__timer-line {
  background: var(--gray);
  height: 0.4rem;
  transition: width 1s linear;
  position: relative;
  border-radius: 1rem;

  div {
    border-radius: 1rem;
    position: absolute;
    height: 0.4rem;
    transition: width 1s linear;
    background: var(--darkGreen);
  }
}

.master-search-modal__timer-time {
  color: var(--darkGreen);
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.0014rem;
  text-align: center;
  margin-top: 0.8rem;
}
</style>
