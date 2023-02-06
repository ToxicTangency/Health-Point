<template>
  <nav class="">
    <div class="flex items-center justify-between">
      <!-- Mobile menu button -->
      <div @click="toggleNav" class="flex md:hidden z-10">
        <button
          type="button"
          class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <component :is="showMenu ? IconClose : IconBurger" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->

    <div
      class="menu__overlay fixed w-full h-full top-0 left-0 py-4 px-10 bg-[#00000050]"
      :class="showMenu ? 'flex' : 'hidden'"
      @click="toggleNav()"
    >
      <ul
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="">
          <RouterLink :to="{ name: 'home', hash: '#menu' }">Menu</RouterLink>
        </li>
        <li class="">
          <RouterLink :to="{ name: 'home', hash: '#reviews' }"
            >Reviews</RouterLink
          >
        </li>
        <li class="">
          <RouterLink :to="{ name: 'home', hash: '#recipes' }"
            >Recipes</RouterLink
          >
        </li>
        <li class="">
          <RouterLink to="/cart">
            <IconBag class="fill-white w-6 h-6" viewBox="0 0 45 45" />
            <div class="quantity absolute top-0 left-7">
              {{ store.quantity }}
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import IconBurger from "./icons/IconBurger.vue";
import IconClose from "./icons/IconClose.vue";
import IconBag from "./icons/IconBag.vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../../stores/cart";

const store = useCartStore();
let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
