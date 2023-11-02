<template>
   <section class=" bottom-0  container py-[50px]  text-[#191933] font-arabic text-[20px] h-[176px]">

      <div
         class=" flex flex-col lg:flex-row lg:justify-between  justify-center items-center gap-4 border-t opacity-80 pt-[33px] ">
         <div>
            <a class="md:order-first" href="/" aria-label="Home"><img
                  class="max-w-[75px] object-cover rounded-md aspect-square"
                  src="../assets/group47550.svg" alt=""></a>
         </div>

         <ul class=" flex lg:gap-8 xl:gap-12 gap-4 flex-col lg:flex-row justify-center items-center">
            <li>

               <NuxtLink to="/privacy">{{ $t( "سياسة الخصوصية" ) }}</NuxtLink>
            </li>

            <li>
               <NuxtLink to="/return">{{ $t( "سياسة الاسترجاع" ) }}</NuxtLink>
            </li>

            <li>
               <NuxtLink to="/terms">{{ $t( "شروط الاستخدام" ) }}</NuxtLink>
            </li>
            <li class="hidden lg:block">|</li>
            <li>
               <NuxtLink to="/contact">{{ $t( "تواصل معنا" ) }}</NuxtLink>
            </li>
         </ul>
         <div class=" h-[45px] px-3 rounded-[26px] border-2 flex justify-between items-center gap-2">
               <h3 class=" text-[15px]">{{ $t( 'تابعنا علي' ) }}</h3>
            <div class="flex justify-center items-center gap-2 ">
               <socialMedia />
            </div>
         </div>
      </div>
      <div
         class="flex flex-col lg:flex-row lg:justify-between justify-center items-cente text-center lg:text-end text-[15px]  py-[10px] items-center">
         <div class="flex justify-center opacity-60">{{ $t( "جميع الحقوق محفوظة © 2023 Refine" ) }}
         </div>
         <div class=" text-center "><span class="opacity-60 ">Powerd by</span> <a
               class=" opacity-90 font-semibold text-blue-700" href="https://paymac.net">Paymac</a>
         </div>
      </div>
      <div class=" flex justify-center items-center text-xs lg:-mt-6"><span
            class=" text-center opacity-60">{{ $t( 'يتبع هذا الموقع شركة PAYMAC للحلول الرقمية الكاملة'
            )
            }}</span><span class=" opacity-90 aspect-[2/1] max-w-[150px]"><a
               href="https://paymac.net"><img src="../assets/paylogo.png"
                  alt="  paymac logo"></a></span></div>

   </section>

</template>
<script setup>

</script>

<style lang="scss" scoped></style>