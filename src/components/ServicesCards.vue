<script setup lang="ts"></script>

<template>
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
</template>

<style lang="scss" scoped>
ul {
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
  .create-order__list-cards li {
    transition: all .2s;
    cursor: pointer;
  }
  .create-order__list-cards li:hover {
    border: .1rem solid var(--darkGreen);
  }
</style>
