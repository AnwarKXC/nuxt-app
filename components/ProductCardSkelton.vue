<template>
   <div class="flex flex-col overflow-hidden w-[370px] tracking-wide">
      <div class=" border  border-[#BFBFBF] rounded-t-[15px] overflow-hidden bg-contain animate-pulse aspect-[2/.8] bg-center bg-no-repeat w-full">
         <AnimatedBackground/>
</div>
      <div
         class="h-[150px] text-start p-2  border border-[#BFBFBF] border-t-0 rounded-b-[15px] overflow-hidden text-ellipsis flex flex-col gap-2">
         <AnimatedPlaceholder class="text-[20px] pb-2 mb-2" />
         <AnimatedPlaceholder class="-mt-1" />
         <AnimatedPlaceholder class="-mt-1" />
         <AnimatedPlaceholder class="-mt-1" />
      </div>
   </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>