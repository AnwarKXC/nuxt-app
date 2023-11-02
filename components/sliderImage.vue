<template>
   <a class="   aspect-[2/.8]" target="_blank" :href="item.url||'/'">
      <LazyNuxtImg format="webp" quality="50" class="w-screen aspect-[2/.88]" :src=" item.main_image " :alt=" item.description || 'slide' "
      />
   </a>
</template>

<script setup>
defineProps( {
   item: {
      type: Object,
      default: () => ( {} ),
   },
} )
</script>

<style  scoped>
.flip-img {
   transform: rotateY(180deg);
}
</style>