<template>
  <div class="heading text-center flex flex-col">
    <div
      class="title__back font-thin uppercase md:text-8xl text-6xl text-[#303030] md:-mb-[60px] -mb-[45px]"
    >
      <slot name="titleBack"></slot>
    </div>
    <div class="title tracking-[.25em] text-2xl">
      <slot name="title"></slot>
    </div>
    <span class="border-2 border-[#34C7A4] w-14 mt-8 mx-auto"></span>
  </div>
</template>

<script setup></script>
