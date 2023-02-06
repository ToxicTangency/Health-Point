<template>
  <div class="about -mt-[200px]">
    <div class="about__wrapper py-14 container mx-auto bg-[#252525]">
      <AppHeading>
        <template #titleBack> about </template>
        <template #title> The Basics Of Healthy Food </template>
      </AppHeading>
      <div class="mt-14 mb-10 text-[#A6A6A6] text-center">
        HEALTH POINT chefs do all the prep work, like peeling, chopping &
        marinating, <br />
        so you can cook a fresh homemade dinner in just 15 minutes.
      </div>
      <AppSlider />
    </div>
  </div>
</template>

<script setup>
import AppHeading from "./UI/AppHeading.vue";
import AppSlider from "./UI/AppSlider.vue";
</script>
