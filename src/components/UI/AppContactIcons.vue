<template>
  <div class="contact__icons flex justify-around md:flex-row flex-col">
    <div class="contact__icon flex flex-col gap-3 justify-center">
      <IconTime class="fill-[#ffffff50] mx-auto scale-50" />
      <div class="icon__title mx-auto">Today 10:00 am - 7:00 pm</div>
      <div class="icon__subtitle mx-auto font-light text-[#ffffff50]">
        Working hours
      </div>
    </div>
    <div class="contact__icon flex flex-col gap-3 justify-center">
      <IconLocation class="fill-[#ffffff50] mx-auto scale-50" />
      <div class="icon__title mx-auto">Velyka Vasylkivska 100</div>
      <div class="icon__subtitle mx-auto font-light text-[#ffffff50]">
        Get Directions
      </div>
    </div>
    <div class="contact__icon flex flex-col gap-3 justify-center">
      <IconPhone class="fill-[#ffffff50] mx-auto scale-50" />
      <div class="icon__title mx-auto">+38 (063)833 24 15</div>
      <div class="icon__subtitle mx-auto font-light text-[#ffffff50]">
        Call Online
      </div>
    </div>
  </div>
</template>

<script setup>
import IconTime from "./icons/IconTime.vue";
import IconLocation from "./icons/IconLocation.vue";
import IconPhone from "./icons/IconPhone.vue";
</script>
