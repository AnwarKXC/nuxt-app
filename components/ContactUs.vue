<template>
      <section
         class=" w-screen  bg-[#ECF5FB] flex justify-center items-center font-arabic flex-col py-4">
         <div class="max-w-[744px] text-center  font-arabic  text-[18px] leading-[35px]">
            <div class=" text-start">

               <h1 class="title-contact  text-center">{{ $t( 'تواصل معنا' ) }}</h1>
               <div class=" flex flex-col md:flex-row  justify-between gap-16 items-center  mt-[25px]">
                  <LazyContactDetails />
               </div>

            </div>
         </div>
         <LazyFormSection/>

      </section>
</template>

<script setup>


</script>
