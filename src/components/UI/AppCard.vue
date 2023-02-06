<template>
  <div
    class="app__card group flex flex-col gap-5 duration-300 rounded-md bg-[#252525] p-6 hover:bg-[#34C7A4]"
  >
    <div
      class="app__card-title text-2xl text-white group-hover:text-[#191919] duration-300"
    >
      <slot name="title"></slot>
    </div>
    <span
      class="border-2 border-[#34C7A4] w-1/4 group-hover:border-[#191919] duration-300"
    ></span>
    <div
      class="app__card-info text-[#ffffff50] group-hover:text-[#191919] duration-300"
    >
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script setup></script>
