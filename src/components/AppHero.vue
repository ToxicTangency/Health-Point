<template>
  <div class="hero pt-40 pb-96 bg-no-repeat bg-cover">
    <div class="hero__wrapper container mx-auto">
      <div class="hero__heading">
        <h1 class="md:text-7xl text-4xl text-center md:leading-[83px]">
          <i class="font-light">Food For</i><b> Health</b> <br />
          <i class="font-light">At One</i><b> Point</b>
        </h1>
        <div class="mt-4 mb-10 text-[#ffffff70] text-center">
          HEALTH POINT chefs do all the prep work, like peeling, chopping &
          marinating, <br />
          so you can cook a fresh homemade dinner in just 15 minutes.
        </div>
        <div class="btn__wrapper flex">
          <RouterLink class="m-auto" :to="{ name: 'home', hash: '#menu' }">
            <AppButton class="text-xl tracking-widest px-10">
              Order Now
            </AppButton>
          </RouterLink>
        </div>
        <AppContactIcons class="mt-16" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from "./UI/AppButton.vue";
import AppContactIcons from "./UI/AppContactIcons.vue";
</script>

<style scoped>
.hero {
  background-image: url("/src/assets/hero__bg.png");
}
</style>
