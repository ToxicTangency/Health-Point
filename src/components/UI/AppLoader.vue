<template>
  <div class="loader">
    <div class="dot1"></div>
    <div class="dot2"></div>
    <div class="dot3"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader {
  position: fixed;
  height: 100%;
  width: 100vw;
  display: flex;
  z-index: 2;
  gap: 15px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}
.dot1 {
  width: 15px;
  height: 15px;
  background-color: #34c7a4;
  border-radius: 50%;
  animation: ScaleInOut 0.3s ease-in-out 0.1s infinite alternate;
}

.dot2 {
  width: 15px;
  height: 15px;
  background-color: #34c7a4;
  border-radius: 50%;
  animation: ScaleInOut 0.3s ease-in-out 0.2s infinite alternate;
}

.dot3 {
  width: 15px;
  height: 15px;
  background-color: #34c7a4;
  border-radius: 50%;
  animation: ScaleInOut 0.3s ease-in-out 0.3s infinite alternate;
}

@keyframes ScaleInOut {
  0% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.5);
  }
}
</style>
