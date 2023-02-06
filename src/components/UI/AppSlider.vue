<template>
  <div class="slider flex justify-between md:mx-10 mx-2 py-10">
    <div class="slider__prev flex items-center">
      <button
        class="border-2 rounded-full border-[#ffffff50]"
        @click="prevSlide()"
      >
        <IconArrow
          class="scale-50"
          :class="{
            'fill-[#ffffff]': isHavePrev,
            'fill-[#ffffff50]': !isHavePrev,
          }"
        />
      </button>
    </div>
    <div class="slider__wrapper flex flex-wrap gap-8 justify-center px-3">
      <template v-for="slide in slides" :key="slide.id">
        <div class="slide" v-show="activeSlides.includes(slide.id)">
          <img :src="slide.img" alt="" />
        </div>
      </template>
    </div>
    <div class="slider__next flex items-center">
      <button
        class="border-2 rounded-full border-[#ffffff50]"
        @click="nextSlide()"
      >
        <IconArrow
          class="scale-50 rotate-180"
          :class="{
            'fill-[#ffffff]': isHaveNext,
            'fill-[#ffffff50]': !isHaveNext,
          }"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import IconArrow from "./icons/IconArrow.vue";

const slides = [
  {
    id: 1,
    img: "/src/assets/slide1.png",
  },
  {
    id: 2,
    img: "/src/assets/slide2.png",
  },
  {
    id: 3,
    img: "/src/assets/slide3.png",
  },
  {
    id: 4,
    img: "/src/assets/slide4.png",
  },
];
const activeSlides = ref([1, 2]);

const nextSlide = () => {
  if (isHaveNext.value) {
    activeSlides.value[0] += 1;
    activeSlides.value[1] += 1;
  }
};
const prevSlide = () => {
  if (isHavePrev.value) {
    activeSlides.value[0] -= 1;
    activeSlides.value[1] -= 1;
  }
};
const isHaveNext = computed(
  () =>
    activeSlides.value.reduce((a, b) => a + b) <
    slides
      .map((i) => i.id)
      .slice(-2)
      .reduce((a, b) => a + b)
);
const isHavePrev = computed(
  () =>
    activeSlides.value.reduce((a, b) => a + b) >
    slides
      .map((i) => i.id)
      .slice(0, 2)
      .reduce((a, b) => a + b)
);
</script>
