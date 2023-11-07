<template>
   <a class="aspect-[2/.8] bgx" target="_blank" :href=" item.url || '/' ">
      <img @load=" imageLoaded " loading="lazy"
         class="w-screen aspect-[2/.88]" :src=" item.main_image " :alt=" item.description "
         :style=" imageStyle ">
     
   </a>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps( {
   item: {
      type: Object,
      default: () => ( {} ),
   },
} )

const imageStyle = ref( {
   opacity: 0,
   animation: 'pulsate 1.5s infinite',
} )

const imageLoaded = () => {
   imageStyle.value = { opacity: 1, animation: 'none' }
}
</script>

<style scoped>

.bgx {
   background-image: url("../assets/logo.png");
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
}

.skeleton-loader {
   width: 100%;
   aspect-ratio: 2/0.8;
   /* Set the aspect ratio to match your image's aspect ratio */
   background-color: #f0f0f0;
   /* Customize the background color of the skeleton loader */
   animation: pulsate 1.5s infinite;
}
</style>
