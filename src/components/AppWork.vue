<template>
  <div class="work my-20">
    <div class="work__wrapper container mx-auto">
      <AppHeading class="mb-14">
        <template #titleBack> work </template>
        <template #title> How It Works </template>
      </AppHeading>
      <div class="work__cards flex md:flex-row flex-col justify-between gap-7">
        <AppCard v-for="work in works" :key="work.id">
          <template #title>
            {{ work.title }}
          </template>
          <template #info>
            {{ work.info }}
          </template>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppCard from "./UI/AppCard.vue";
import AppHeading from "./UI/AppHeading.vue";

const works = [
  {
    id: 1,
    title: "Pick Meals",
    info: "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options.",
  },
  {
    id: 2,
    title: "Choose How Often",
    info: "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!",
  },
  {
    id: 3,
    title: "Fast Deliveries",
    info: "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box.",
  },
  {
    id: 4,
    title: "Tasty Meals",
    info: "Gobble makes cooking fast, so you have more time to unwind and be with family.",
  },
];
</script>
