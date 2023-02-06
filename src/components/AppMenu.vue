<template>
  <div class="menu mb-20" id="menu">
    <div class="h-[88px]"></div>
    <div class="menu__wrapper container mx-auto">
      <AppHeading class="mb-14">
        <template #titleBack> dishes </template>
        <template #title> Our Menu </template>
      </AppHeading>
      <div class="menu__grid flex flex-wrap gap-7 justify-between">
        <AppMenuCard v-for="dish in menu" :key="dish._id" :dish="dish" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeading from "./UI/AppHeading.vue";
import AppMenuCard from "./UI/AppMenuCard.vue";
import { onMounted, ref } from "vue";
import getMenu from "../api/menu";

const menu = ref([]);

onMounted(async () => {
  menu.value = await getMenu();
});
</script>
