<template>
  <div class="recipes mb-28" id="recipes">
    <div class="h-[88px]"></div>
    <div class="recipes__wrapper container mx-auto">
      <AppHeading>
        <template #titleBack> recipes </template>
        <template #title> Recipes From Our Chefs </template>
      </AppHeading>
      <div
        class="recipes__grid mt-14 grid grid-rows-3 md:grid-cols-2 grid-cols-1 gap-7"
      >
        <component
          v-for="(recipe, i) in recipes"
          :key="recipe.id"
          :recipe="recipe"
          :is="i === 0 ? AppRecipeCard : AppSmallRecipeCard"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeading from "./UI/AppHeading.vue";
import AppRecipeCard from "./UI/AppRecipeCard.vue";
import AppSmallRecipeCard from "./UI/AppSmallRecipeCard.vue";
import { ref, onMounted } from "vue";
import getRecipes from "../api/recipes";

const recipes = ref([]);

onMounted(async () => {
  recipes.value = await getRecipes();
});
</script>
