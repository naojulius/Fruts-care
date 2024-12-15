<template>
  <div class="flex justify-between items-center flex-col h-screen">
      <WidgetLoading v-if="loading.state" />
      <WidgetNavigationTop />
      <NuxtPage class="h-full w-full p-2" />
      <WidgetNavigationBottom />
    </div>
</template>
<script lang="ts" setup>
  import {useLoadingStore} from "./stores"
  const loading = useLoading();
  const Howler = useNuxtApp().$howler; // Access Howler globally
  let sound: Howler.Howl | null = null;
  // sound = new Howl({
  //   src: ['/audios/bg-music.ogg'],
  //   volume: 1,
  //   loop: true,
  //   onend: () => console.log('Audio finished playing')
  // }).play();

</script>
