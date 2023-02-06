<template>
  <div
    class="recipeSmallCard group flex flex-col rounded-md w-full bg-[#252525] hover:bg-[#34C7A4] duration-300"
  >
    <div
      class="title md:text-2xl text-xl font-light text-left mb-3 mt-7 ml-7 group-hover:text-[#252525]"
    >
      <RouterLink
        :to="{
          name: 'recipeItem',
          params: { slug: props.recipe.slug.current },
        }"
        >{{ props.recipe.title }}
      </RouterLink>
    </div>
    <div class="flex flex-wrap justify-between items-center ml-7">
      <div
        class="category rounded my-3 uppercase font-thin text-xs py-2 px-4 bg-[#00000030]"
      >
        {{ props.recipe.category }}
      </div>
      <div class="date text-xs group-hover:text-[#252525] mx-auto">
        {{ props.recipe.created_at }}
      </div>
      <div
        class="stats flex justify-center gap-4 items-center mr-5 group-hover:text-[#252525]"
      >
        <IconView class="fill-white scale-50 group-hover:fill-[#252525]" />
        {{ props.recipe.views }}
        <!-- <IconStar class="fill-white scale-50 group-hover:fill-[#252525]" />
        {{ props.recipe.likes }} -->
      </div>
    </div>
  </div>
</template>

<script setup>
// import IconStar from "./icons/IconStar.vue";
import IconView from "./icons/IconView.vue";
const props = defineProps({
  recipe: Object,
});
</script>
