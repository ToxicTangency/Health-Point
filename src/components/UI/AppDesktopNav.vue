<template>
  <nav class="gap-8 items-center">
    <RouterLink :to="{ name: 'home', hash: '#menu' }">Menu</RouterLink>
    <RouterLink :to="{ name: 'home', hash: '#reviews' }">Reviews</RouterLink>
    <RouterLink :to="{ name: 'home', hash: '#recipes' }">Recipes</RouterLink>
    <RouterLink to="/cart" class="relative">
      <IconBag class="fill-white w-6 h-6" viewBox="0 0 45 45" />
      <div class="quantity absolute top-0 left-7">
        {{ store.quantity }}
      </div>
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../../stores/cart";
import IconBag from "./icons/IconBag.vue";

const store = useCartStore();
</script>

<style lang="scss" scoped></style>
