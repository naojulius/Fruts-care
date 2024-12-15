<script setup lang="ts">
import { Loader } from 'lucide-vue-next';
</script>
<template>
    <div class="absolute  h-full w-full bg-[#00000045] overflow-hidden z-50 flex items-center justify-center">
        <div class="w-52 min-w-52 h-24 min-h-24 rounded-2xl bg-white flex items-center justify-center flex-col ">
            <Loader class="h-10 w-10 text-gray-900 animate-spin" />
            <span class="text-lg">Loading</span>
        </div>
    </div>
</template>