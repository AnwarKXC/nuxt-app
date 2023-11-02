<template>
   <main class=" font-arabic ">
      <div class="text-center  " v-if=" aboutData.photo ">
         <img class="w-screen  aspect-[2/.84]" :src=" aboutData.photo.url " alt=" laps">
      </div>
      <section class=" font-arabic flex justify-center  items-center pb-10">
         <div
            class="container flex justify-around items-center text-center md:text-start gap-10 flex-col md:flex-row ">
            <div class=" max-w-[690px]">
               <h1 class="title"> {{ $t( " مين ريفاين ؟" ) }}</h1>
               <FetchAbout />
            </div>
            <div class=" md:order-first">
               <img width="171" src='../../assets/logo.png' alt="">
            </div>
         </div>
      </section>
      <div class=" bg-[#ECF5FB]">
         <section
            class=" md:h-[314px] py-5 bg-prim text-center flex justify-center flex-col items-center">
            <h1 class=" max-w-[960px] leading-[60px] text-2xl md:text-[48px] text-white">{{ $t( `هل لديك أي إستفسار يسعدنا تواصلك معنا` ) }}
            </h1>
            <a href="">
               <button
                  class=" text-[23px] text-prim bg-white px-[73px] py-2.5 rounded-[10px] my-[34px]">{{
                     $t( 'تواصل معنا' ) }}</button>
            </a>
         </section>
         <PartnersSection />
      </div>
   </main>
</template>

<script setup>
const { locale } = useI18n()

import axios from 'axios'
let aboutData = ref( [] )

const getData = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/settings/page/about', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data[ 0 ]
      aboutData.value = data
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
}


onMounted( async () => {
   getData()

} )


watchEffect( () => {
   getData()
} )



</script>

<style  scoped></style>