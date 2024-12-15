<script setup lang="ts">
let user = ref({
    "first_name": "OOOOO",
    "last_name": "OOOOO"
});
onMounted(async () => {
    InitTGUser();
})

const InitTGUser = () => {
    const params = new URLSearchParams(Telegram.WebApp.initData);
    const userData = Object.fromEntries(params);
    let user = ref(null);
    if (userData && userData.user) {
        userData.user = JSON.parse(userData.user);
        user.value = userData.user;
    } else {
        user.value = {
            "first_name": "OOOOO",
            "last_name": "OOOOO"
        };
    }
}

</script>
<template>
    <div class="w-full  p-[3.5px]">
        <div class="rounded-xl size-full flex flex-row justify-between items-center p-1 gap-1">
            <Button class=" w-1/2 h-full bg-gray-100 flex flex-row items-center justify-start">
                <img src="/icons/farmer-m.png" alt="harvester" class="w-5 h-5">
                <div class="text-gray-700 font-bold w-full h-full text-left">{{ user.first_name }} {{
                    user.last_name }}</div>
            </Button>
            <Button class=" w-1/2 h-full bg-gray-100 flex flex-row items-center justify-start">
                <div class="text-gray-700 font-bold w-full h-full text-right">0.0005 $FRT</div>
                <img src="/icons/harvester.png" alt="harvester" class="w-5 h-5">
            </Button>
        </div>
    </div>
</template>