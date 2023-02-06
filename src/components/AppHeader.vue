<template>
  <header
    :class="{
      '-mb-[90px]': route.name === 'home',
      'sticky top-0 bg-[#252525] border-b-0': isSticky,
    }"
    class="transition-all duration-700 md:py-8 py-0 border-b-2 border-[#ffffff10] z-10 md:px-0 px-4"
  >
    <div
      class="header__wrapper md:my-0 my-4 flex justify-between items-center container mx-auto"
    >
      <div class="logo">
        <RouterLink :to="{ name: 'home' }"
          ><img src="/src/assets/logo.png" alt=""
        /></RouterLink>
      </div>
      <AppDesktopNav class="hidden md:flex" />
      <AppMobileNav class="block md:hidden" />
    </div>
  </header>
</template>

<script setup>
import AppDesktopNav from "./UI/AppDesktopNav.vue";
import AppMobileNav from "./UI/AppMobileNav.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const isSticky = ref(false);

const handleStickyHeader = () => {
  if (window.pageYOffset > 600) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleStickyHeader);
});
</script>
