<template>
  <div class="menu my-20" id="menu">
    <div class="menu__wrapper container mx-auto">
      <AppHeading>
        <template #titleBack> dish </template>
        <template #title> {{ menuItem.title }} </template>
      </AppHeading>
      <div
        class="menuCard flex md:flex-row flex-col gap-5 mt-10 rounded-md w-full"
      >
        <div class="menuCard__image w-1/2">
          <img
            :src="urlFor(menuItem.image)"
            :alt="menuItem.subtitle"
            class="mx-auto"
            v-if="menuItem.image"
          />
        </div>
        <div class="menuCard__info p-7 w-1/2 flex flex-col">
          <div class="menuCard__title text-3xl font-light text-[#D9D9D9] mb-5">
            <div class="menuCard__subtitle text-[#A4A8B2] text-xs font-light">
              {{ menuItem.subTitle }}
            </div>
          </div>
          <div
            class="menuCard__description text-[#A4A8B2] text-sm font-light mb-6"
          >
            {{ menuItem.description }}
          </div>
          <div class="menuCard__bottom flex justify-between items-center">
            <div class="menuCard__rating">
              <!-- <IconStars class="scale-110" /> -->
            </div>
            <div class="menuCard__btn">
              <div v-if="store.cart.find((item) => item._id === menuItem._id)">
                In Cart
                <AppButton @click="store.remove(menuItem)"> X </AppButton>
              </div>
              <AppButton
                @click="store.add(menuItem)"
                class="tracking-widest px-7"
                v-else
              >
                ORDER
              </AppButton>
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
import getMenuItem from "../api/menuItem";
import AppButton from "../components/UI/AppButton.vue";
import AppHeading from "../components/UI/AppHeading.vue";
// import IconStars from "../components/UI/icons/IconStars.vue";
import { useCartStore } from "../stores/cart";
import client from "../lib/client";

const urlFor = client.urlFor;

const store = useCartStore();
const route = useRoute();
const menuItem = ref({});

onMounted(async () => {
  menuItem.value = await getMenuItem(route.params.slug);
});
</script>
