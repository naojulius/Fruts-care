<script setup lang="ts">
import { ref } from 'vue';
import { Progress } from '@/components/ui/progress';

const loading = useLoading();
let fruitsInCase = ref(0);
let caseSize = ref(100);
let isClicked = ref(false);
let imgClass = ref("");
const scale = "transform scale-105";
const onHarvest = () => {
  if (isClicked.value) return;
  if (fruitsInCase.value >= caseSize.value) return;
  fruitsInCase.value++;

  isClicked.value = true;
  imgClass.value = scale;

  setTimeout(() => {
    imgClass.value = "";
    isClicked.value = false;
  }, 50);
};
onBeforeMount(() => {
  //loading.show();
});
const user = ref(null)
onMounted(async () => {
  const params = new URLSearchParams(Telegram.WebApp.initData);

  const userData = Object.fromEntries(params);

  if(userData &&  userData.user){
    userData.user = JSON.parse(userData.user);
    user.value = userData.user.first_name;
  }
})
</script>

<template>
  <div class="bg-gray-200 flex gap-2 flex-col justify-center items-center">
    <div @click="onHarvest"
      class="w-72 h-72 bg-gradient-to-t from-transparent to-white p-6 rounded-full cursor-pointer">
      <img src="/icons/harvest.png" alt="harvest" :class="['-mt-5', imgClass]"
        class="transition-transform duration-100 ease-in-out" />
    </div>
    <div class="rounded-xl w-4/5 flex flex-row justify-between items-center p-1 gap-1">
        <Button class=" w-1/2 bg-gray-100 flex flex-row items-center justify-start">
          <img src="/icons/drone.png" alt="harvester" class="w-5 h-5">
          <div class="text-gray-700 font-bold w-full h-full text-left">BOOST</div>
        </Button>
        <Button class=" w-1/2 bg-gray-100 flex flex-row items-center justify-start">
           <div class="text-gray-700 font-bold w-full h-full text-right">EXTAND</div>
          <img src="/icons/test-tubes.png" alt="harvester" class="w-5 h-5">
        </Button>
     </div>
     <Progress v-if="fruitsInCase < caseSize" class="w-4/5" :model-value="fruitsInCase" />
     <span v-else class="cursor-pointer">
        Claim Your Reward
     </span>
     {{ user }}
  </div>
</template>

<style scoped></style>
