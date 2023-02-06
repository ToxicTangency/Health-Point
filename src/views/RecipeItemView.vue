<template>
  <div class="menu my-20" id="menu">
    <div class="menu__wrapper container mx-auto">
      <AppHeading>
        <template #titleBack> recipe </template>
        <template #title> {{ recipeItem.title }} </template>
      </AppHeading>
      <div
        class="menuCard flex md:flex-row flex-col gap-5 mt-10 rounded-md w-full"
      >
        <div class="menuCard__image w-1/2">
          <img
            :src="urlFor(recipeItem.image)"
            :alt="recipeItem.title"
            class="mx-auto"
            v-if="recipeItem.image"
          />
        </div>
        <div class="menuCard__info p-7 w-1/2 flex flex-col">
          <div class="menuCard__title text-3xl font-light text-[#D9D9D9] mb-5">
            <div class="menuCard__subtitle text-[#A4A8B2] text-xs font-light">
              {{ recipeItem.category }}
            </div>
          </div>
          <div
            class="menuCard__description text-[#A4A8B2] text-sm font-light mb-6"
          >
            Ingredients:<br />
            <SanityBlocks :blocks="ingredients" :serializers="serializers" />
          </div>
          <div
            class="menuCard__description text-[#A4A8B2] text-sm font-light mb-6"
          >
            Method:<br />
            <SanityBlocks :blocks="method" :serializers="serializers" />
          </div>
          <div class="menuCard__bottom flex justify-between items-center">
            <!-- <div class="menuCard__rating flex items-center gap-2">
              <IconStar class="scale-75 fill-white" />
              <div class="text-xl">
                {{ recipeItem.likes }}
              </div>
            </div> -->
            <div class="menuCard__rating flex items-center gap-2">
              <IconView class="scale-75 fill-white" />
              <div class="text-xl">
                {{ recipeItem.views }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import getRecipeItem from "../api/recipeItem";
import AppHeading from "../components/UI/AppHeading.vue";
// import IconStar from "../components/UI/icons/IconStar.vue";
import client from "../lib/client";
import { SanityBlocks } from "sanity-blocks-vue-component";
import IconView from "../components/UI/icons/IconView.vue";

const urlFor = client.urlFor;
const route = useRoute();
const recipeItem = ref({});

const Sclient = client.client;

const ingredients = ref([]);
const method = ref([]);
const serializers = {
  types: {
    String,
  },
};
onMounted(async () => {
  recipeItem.value = await getRecipeItem(route.params.slug);
  method.value = recipeItem.value.text;
  ingredients.value = recipeItem.value.ingridients;
  if (
    localStorage.getItem(recipeItem.value.slug.current) === recipeItem.value._id
  ) {
    console.log("viewed");
  } else {
    Sclient.patch(recipeItem.value._id)
      .inc({ views: 1 })
      .commit()
      .then(() => {
        localStorage.setItem(
          recipeItem.value.slug.current,
          recipeItem.value._id
        );
      })
      .catch((err) => {
        console.error("Oh no, the update failed: ", err.message);
      });
  }
});
</script>
