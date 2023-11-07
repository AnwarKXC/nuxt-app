<template>
   <NuxtLink class="flex-grow "
      :to=" `/blog/${ item.id }/?${ ( item.title ).split( ' ' ).join( '-' ) }` ">
      <div
         class="  cursor-pointer flex gap-1 rounded-[15px] overflow-hidden border border-[#BFBFBF] max-w-[350px] min-w-[250px] md:max-w-[260px] lg:min-w-[300px] xl:min-w-[400px]  aspect-[4/1] my-2 ">
         <div class=" aspect-[2/1] h-full">
            <img format="webp" class=" aspect-[2/1]  " :src=" item.main_image " alt=" article photo"/>
         </div>
         <div>
            <h2
               class=" font-semibold pt-1 pr-1 lg:text-[15px] md:mb-1 md:leading-4 leading-5  line-clamp-2 md:text-xs xl:h-[36px]  overflow-hidden ">
               {{ item.title }}
            </h2>
            <p v-html=" item.description "
               class="md:line-clamp-2 md:h-[30px] lg:h-[49px] line-clamp-3  lg:line-clamp-3  md:leading-2 xl:text-xs text-[11px] h-[48px] overflow-hidden text-zinc-700 pr-1">
            </p>
         </div>
      </div>

   </NuxtLink>
</template>

<script setup>

defineProps( {
   item: {
      type: Object,
      default: () => ( {} ), // Default value for the image prop
   },
} )


</script>

<style lang="scss" scoped></style>