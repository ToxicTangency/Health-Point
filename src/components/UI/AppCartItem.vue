<template>
  <div
    class="menuCard flex-col md:flex-row flex gap-5 bg-[#252525] rounded-md w-full justify-around items-center"
  >
    <div class="menuCard__image">
      <RouterLink
        :to="{ name: 'menuItem', params: { slug: props.dish.slug.current } }"
      >
        <img
          :src="urlFor(props.dish.image)"
          :alt="props.dish.title"
          class="w-28"
        />
      </RouterLink>
    </div>
    <div class="menuCard__info p-7 flex justify-between md:w-1/2 w-full">
      <div class="menuCard__title text-3xl font-light text-[#D9D9D9] mb-5">
        <RouterLink
          :to="{ name: 'menuItem', params: { slug: props.dish.slug.current } }"
          >{{ props.dish.title }}
        </RouterLink>
        <div class="menuCard__subtitle text-[#A4A8B2] text-xs font-light">
          {{ props.dish.subTitle }}
        </div>
      </div>
      <div class="menuCard__bottom flex justify-between items-center w-1/2">
        <!-- <div class="menuCard__rating">
          <IconStars class="scale-110" />
        </div> -->
        <div class="menuCard__btn">
          <AppButton @click="store.decrement(props.dish)" class="p-2">
            -
          </AppButton>
        </div>
        <div class="quantity">
          {{ props.dish.quantity }}
        </div>
        <div class="menuCard__btn">
          <AppButton @click="store.add(props.dish)" class="p-2"> + </AppButton>
        </div>
        <div class="price">
          {{ props.dish.price }}
        </div>
        <div class="remove">
          <AppButton @click="store.remove(props.dish)" class="p-2">X</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../../stores/cart";
import AppButton from "./AppButton.vue";
// import IconStars from "./icons/IconStars.vue";
import client from "../../lib/client";

const urlFor = client.urlFor;
const store = useCartStore();
const props = defineProps({
  dish: Object,
});
</script>
