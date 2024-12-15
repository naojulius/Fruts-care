import { defineStore } from 'pinia';
export const useLoading = defineStore('loading', () => {
    const state = ref(false)

    function show() {
      state.value = true;
    }

    function hide(){
      state.value = false;
    }
  
    return { state, show, hide }
  })