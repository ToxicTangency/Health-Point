<template>
  <div
    class="recipeCard overflow-hidden flex flex-col rounded-md w-full bg-no-repeat bg-cover px-16"
  >
    <div class="absolute">
      <img
        :src="urlFor(props.recipe.image)"
        alt=""
        class="object-contain w-full h-full"
        v-if="props.recipe.image"
      />
    </div>
    <div
      class="category mx-auto rounded md:my-14 my-7 uppercase font-thin text-xs py-2 px-4 bg-[#00000030]"
    >
      {{ props.recipe.category }}
    </div>
    <div class="date mx-auto text-xs font-thin mb-6">
      {{ props.recipe.created_at }}
    </div>
    <div class="title md:text-2xl text-xl font-light text-center md:mb-28 mb-6">
      <RouterLink
        :to="{
          name: 'recipeItem',
          params: { slug: props.recipe.slug.current },
        }"
        >{{ props.recipe.title }}
      </RouterLink>
    </div>
    <div class="stats flex justify-center gap-4 items-center md:mb-16 mb-7">
      <IconView class="fill-white scale-50" /> {{ props.recipe.views }}
      <!-- <IconStar class="fill-white scale-50" /> {{ props.recipe.likes }} -->
    </div>
  </div>
</template>

<script setup>
// import IconStar from "./icons/IconStar.vue";
import IconView from "./icons/IconView.vue";
import client from "../../lib/client";

const urlFor = client.urlFor;
const props = defineProps({
  recipe: Object,
});
</script>
<style>
.recipeCard {
  grid-area: 1 / 1 / 4 / 2;
}
</style>
