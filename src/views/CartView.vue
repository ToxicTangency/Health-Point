<template>
  <div class="cart container mx-auto">
    <AppHeading class="my-14">
      <template #titleBack> cart </template>
      <template #title> Your Order </template>
    </AppHeading>
    <div class="cart__wrapper flex flex-col gap-4">
      <AppCartItem v-for="dish in store.cart" :key="dish.id" :dish="dish" />
    </div>
    <div
      class="cart__bottom flex justify-between items-center"
      v-if="store.cart.length > 0"
    >
      <AppButton class="my-14" @click="store.clear()"> Clear cart </AppButton>
      <div class="total">Total: {{ store.total }}</div>
    </div>
    <div class="oder" v-if="store.cart.length > 0">
      <AppOrderForm />
    </div>
    <div class="flex flex-col" v-else>
      <p class="text-2xl text-center">Your cart is empty!</p>
      <RouterLink class="mx-auto" :to="{ name: 'home', hash: '#menu' }">
        <AppButton class="my-14"> View Menu </AppButton>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import AppButton from "../components/UI/AppButton.vue";
import AppCartItem from "../components/UI/AppCartItem.vue";
import AppHeading from "../components/UI/AppHeading.vue";
import AppOrderForm from "../components/UI/AppOrderForm.vue";
import { useCartStore } from "../stores/cart";

const store = useCartStore();
</script>
<style></style>
