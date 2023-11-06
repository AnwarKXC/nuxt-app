<template>
   <NuxtLink :to="`/blog/${item.id}/?${(item.title).split( ' ' ).join( '-' ) }`">
      <div class="flex flex-col overflow-hidden max-w-[370px] tracking-wide ">
         <div class="border border-[#BFBFBF] rounded-t-[15px] overflow-hidden ">

            <LazyNuxtImg v-if='item.main_image' loading="lazy" format="webp" class="aspect-[2/.8] w-full  bg-[url('../assets/logo.png')]  bg-contain bg-no-repeat bg-center" :src=" item.main_image "  alt="slider"/>
         </div>
         <div class="h-[150px] text-start p-2 border border-[#BFBFBF] border-t-0 rounded-b-[15px] inline ">
            <div class="pb-3 text-[18px] font-bold inline">{{ item.title }}</div>
            <p v-html=" item.description " class=" h-[95px] overflow-hidden line-clamp-4 leading-6 text-sm tracking-wide  text-zinc-700"></p>
         </div>
      </div>
   </NuxtLink>
</template>

<script setup>

const props = defineProps( {
   item: {
      type: Object,
      default: () => ( {} ), 
   },
} )
</script>

<style lang="scss" scoped></style>






