<template>
  <div class="cart container mx-auto">
    <AppHeading class="my-14">
      <template #titleBack> Thank You </template>
      <template #title> Order Created </template>
    </AppHeading>
    <div class="cart__wrapper flex flex-col gap-4">
      <p class="text-2xl text-center">
        Thank you for placing an order!<br />
        Our manager will contact you as soon as possible by the phone number you
        specified.
      </p>
      <AppButton class="my-14 mx-auto">
        <RouterLink :to="{ name: 'home' }"> Go Home </RouterLink>
      </AppButton>
    </div>
  </div>
</template>
<script setup>
import AppButton from "../components/UI/AppButton.vue";
import AppHeading from "../components/UI/AppHeading.vue";
</script>
<style></style>
