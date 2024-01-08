<script setup lang="ts">
import { onMounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = ref(null);

const emit = defineEmits(['marker-clicked']);

// Создайте тип для объекта пользователя
type UserLocation = {
  id: number;
  name: string;
  position: L.LatLngExpression;
  imageUrl: string;
};

// Здесь мы создаем массив объектов пользователей
import masterPhoto from "@/assets/images/portfolioForClient/masterPhoto.jpg";

const users: UserLocation[] = [
  {
    id: 1,
    name: "Графити",
    position: [59.9343, 30.3351],
    imageUrl: masterPhoto,
  },
  { id: 2, name: "Тату", position: [59.9543, 30.3551], imageUrl: masterPhoto },
  // Добавьте сюда других пользователей
];

onMounted(() => {
  map.value = L.map("map").setView([59.9343, 30.3351], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map.value);

  // Функция для добавления маркера для пользователя
  const addUserMarker = (user: UserLocation) => {
    const marker = L.marker(user.position, {
      icon: L.divIcon({
        className: "custom-icon",
        html: `<div class="marker-content">
                <div class="marker-content__img">
                    <img src="${user.imageUrl}" alt="${user.name}"/>
                </div>
                <div class="marker-content__text">
                    <p>${user.name}</p>    
                </div>
               </div>`,
      }),
    }).addTo(map.value);

    // Событие клика на маркер
    marker.on("click", () => {
      emit("marker-clicked", user);
    });
  };

  // Перебор массива пользователей и добавление маркера для каждого
  users.forEach(addUserMarker);
});
</script>

<template>
  <div id="map" style="height: 100vh"></div>
</template>

<style lang="scss">
.marker-content {
  width: 6.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.marker-content__img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 0.2rem solid red;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.marker-content__text {
  border-radius: 0.4rem;
  background: var(--white);
  padding: 0.4rem 1rem;

  p {
    color: var(--black);
    font-size: 1rem;
    font-weight: 500;
    line-height: normal;
  }
}
</style>
