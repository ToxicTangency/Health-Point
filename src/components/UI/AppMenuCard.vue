<template>
  <div
    class="menuCard flex flex-col gap-5 bg-[#252525] rounded-md md:w-[31%] w-full"
  >
    <div class="menuCard__image">
      <RouterLink
        :to="{ name: 'menuItem', params: { slug: props.dish.slug.current } }"
      >
        <img
          :src="urlFor(props.dish.image)"
          :alt="props.dish.title"
          class="w-full"
        />
      </RouterLink>
    </div>
    <div class="menuCard__info p-7 flex flex-col">
      <div class="menuCard__title text-3xl font-light text-[#D9D9D9] mb-5">
        <RouterLink
          :to="{ name: 'menuItem', params: { slug: props.dish.slug.current } }"
          >{{ props.dish.title }}
        </RouterLink>
        <div class="menuCard__subtitle text-[#A4A8B2] text-xs font-light">
          {{ props.dish.subTitle }}
        </div>
      </div>
      <div class="menuCard__description text-[#A4A8B2] text-sm font-light mb-6">
        {{ props.dish.description }}
      </div>
      <div class="menuCard__bottom flex justify-between items-center">
        <!-- <div class="menuCard__rating">
          <IconStars class="scale-110" />
        </div> -->
        <div class="menuCard__btn">
          <div v-if="store.cart.find((item) => item._id === props.dish._id)">
            In Cart
            <AppButton @click="store.remove(props.dish)"> X </AppButton>
          </div>
          <AppButton
            @click="store.add(props.dish)"
            class="tracking-widest px-7"
            v-else
          >
            ORDER
          </AppButton>
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
