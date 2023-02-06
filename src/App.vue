<script setup>
import { RouterView } from "vue-router";
import router from "./router/index";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppLoader from "./components/UI/AppLoader.vue";
import { ref } from "vue";

const isLoading = ref(Boolean);

router.beforeEach(() => {
  isLoading.value = true;
});
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>

<template>
  <AppLoader v-if="isLoading" />
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style scoped></style>
