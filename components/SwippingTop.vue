<template>
   <div @click="isOpen = !isOpen">
      <div class="relative">
         <img class="cursor-pointer" width="80" src="../assets/message.png" alt="options">
         <div
            class=" -z-10 absolute bottom-[2.5rem] rounded-t-full py-16 pt-4  right-[7.5px] w-[65px]  gap-4 bg-prim  "
            v-if=" isOpen ">
            <div class=" absolute -top-2.5 scale-125   ">
               <img src="../assets/message.png" alt="options">
            </div>
            <div class="scale-125 invert flex justify-center flex-col gap-4 items-center pt-14">
               <socialMedia />
            </div>
         </div>
      </div>
   </div>
   <div @click=" scrollToTop " class=" cursor-pointer  w-[105] flex justify-center">
      <img width="28" src="../assets/up.png" alt="options">
   </div>
</template>

<script setup>

let isOpen = ref( false )

function scrollToTop () {

   if ( process.client ) {
      window.scrollTo( {
         top: 0,
         behavior: 'smooth',
      } )
   }

}


</script>

<style scoped></style>