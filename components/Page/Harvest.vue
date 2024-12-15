<script setup lang="ts">
import { ref } from 'vue';
let isClicked = ref(false);
let imgClass = ref("");
const scale = "transform scale-105";
const onHarvest = () => {
  if (isClicked.value) return;

  isClicked.value = true;
  imgClass.value = scale;

  setTimeout(() => {
    imgClass.value = "";
    isClicked.value = false;
  }, 50);
};
</script>

<template>
  <div class="bg-gray-200 flex flex-col justify-center items-center">
    <div @click="onHarvest"
      class="w-72 h-72 bg-gradient-to-t from-transparent to-white p-6 rounded-full cursor-pointer">
      <img src="/icons/harvest.png" alt="harvest" :class="['-mt-5', imgClass]"
        class="transition-transform duration-100 ease-in-out" />
    </div>
  </div>
</template>

<style scoped></style>
