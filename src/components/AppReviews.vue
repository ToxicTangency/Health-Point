<template>
  <div class="reviews mb-20" id="reviews">
    <div class="h-[88px]"></div>
    <div class="reviews__wrapper container mx-auto">
      <AppHeading>
        <template #titleBack> reviews </template>
        <template #title> What Clients Say </template>
      </AppHeading>
      <div
        class="reviews__row flex md:flex-row flex-col justify-between mt-9 md:gap-0 gap-4"
      >
        <div class="review__item flex flex-col gap-5 text-lg font-lights">
          <div class="review__person flex items-center gap-6">
            <div class="person__avatar">
              <img src="/src/assets/avatar1.png" alt="" />
            </div>
            <div class="person__name">Gregory</div>
          </div>
          <div class="review__text">"Gorgeous!"</div>
        </div>
        <div class="review__item flex flex-col gap-5 text-lg font-lights">
          <div class="review__person flex items-center gap-6">
            <div class="person__avatar">
              <img src="/src/assets/avatar2.png" alt="" />
            </div>
            <div class="person__name">Annette</div>
          </div>
          <div class="review__text">“Ideal to restore your HP!”</div>
        </div>
        <div class="review__item flex flex-col gap-5 text-lg font-lights">
          <div class="review__person flex items-center gap-6">
            <div class="person__avatar">
              <img src="/src/assets/avatar3.png" alt="" />
            </div>
            <div class="person__name">Greg</div>
          </div>
          <div class="review__text">“As tasty as healthy!”</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeading from "./UI/AppHeading.vue";
</script>

<style lang="scss" scoped></style>
