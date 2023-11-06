<template>
   <a class="   aspect-[2/.8]" target="_blank" :href="item.url||'/'">
      <LazyNuxtImg  @load=" imageLoaded " loading="lazy" format="webp" quality="50" class="w-screen aspect-[2/.88]" :src=" item.main_image " :alt=" item.description"
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

const imageStyle = ref( { opacity: 0 } );

const imageLoaded = () => {
   imageStyle.value = { opacity: 1 }
};

</script>

<style  scoped>
.flip-img {
   transform: rotateY(180deg);
}
</style>