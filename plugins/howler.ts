import Howler from 'howler';

export default defineNuxtPlugin(nuxtApp => {
  // Provide Howler globally so it can be accessed in any component
  nuxtApp.provide('howler', Howler);
});
