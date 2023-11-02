<template>
   <section class=" w-screen  bg-[#ECF5FB] py-10 font-arabic flex justify-center items-center">
      <div
         class="container flex flex-col md:flex-row text-center gap-10 py-5 justify-around items-center ">
         <div class=" max-w-[511px] max-h-[500px]">
            <h1 class="title"> {{ $t( "مين ريفاين ؟" ) }}</h1>
            <div class="overflow-hidden line-clamp-3 h-[95px]">
               <LazyFetchAbout />
            </div>
            <div class=" md:flex">
               <button class="button-prim mt-[35px]">
                  <RouterLink to="/about"> {{ $t( 'معرفة المزيد' ) }}</RouterLink>
               </button>
            </div>
         </div>
         <div class=" max-w-[170px]">
            <img src="../assets/logo.png" alt="logo">
         </div>
      </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>