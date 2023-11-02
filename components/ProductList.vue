<template>
   <section class=" container  font-arabic py-5 ">
         <div class="gap-[22px] relative flex justify-center items-center flex-wrap ">
            <LazyProductCard
               v-for="            item            in           sliderData.slice( 0, number )         "
               :key=" item.id " :item=" item " />
         </div>

   </section>
   <slot></slot>
</template>

<script setup>


defineProps( {
   sliderData: {
      type: Array,
      default: () => ( [] ),
   },
   number: {
      type: Number
   }
} )


</script>

<style lang="scss" scoped></style>