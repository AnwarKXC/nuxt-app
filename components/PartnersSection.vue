<template>
   <section class=" w-screen bg-[#ECF5FB] flex justify-center items-center font-arabic py-5 ">
      <div class="container text-center font-arabic  text-[20px] leading-[35px] ">
         <div class="max-w-[938px] mx-auto container ">
            <h1 class="title">{{ $t( 'شركاءنا' ) }}</h1>
         </div>
         <div>

            <div class=" flex items-center justify-between gap-4 pt-12 px-10 md:px-14 relative">
               <div class="swiper-button-next md:px-4 pt-12">
               </div>

               <Swiper :breakpoints=" {
                  '200': {
                     slidesPerView: 1,
                     spaceBetween: 50,
                  },
                  '350': {
                     slidesPerView: 2,
                     spaceBetween: 10,
                  },
                  '460': {
                     slidesPerView: 2.5,
                     spaceBetween: 40,
                  },
                  '640': {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  },
                  '768': {
                     slidesPerView: 3.50,
                     spaceBetween: 40,
                  },
                  '1024': {
                     slidesPerView: 4.50,
                     spaceBetween: 35,
                  },
                  '1244': {
                     slidesPerView: 6.35,
                     spaceBetween: 35,
                  },

               } " :modules=" [ SwiperAutoplay, SwiperNavigation ] " :navigation=" {
   prevEl: '.swiper-button-next',
   nextEl: '.swiper-button-prev',
} " :autoplay=" {
   delay: 2000,
   disableOnInteraction: false,
} " :grab-cursor=" true ">
                  <template v-if=" isLoading " class=" animate-pulse">
                     <swiper-slide class="">
                        <div
                           class=" bg-[url('../assets/logo.png')]  overflow-hidden bg-contain animate-pulse aspect-[2/.8] bg-center bg-no-repeat w-full">
                        </div>
                     </swiper-slide>
                     <swiper-slide class="">
                        <div
                           class=" bg-[url('../assets/logo.png')]  overflow-hidden bg-contain animate-pulse aspect-[2/.8] bg-center bg-no-repeat w-full">
                        </div>
                     </swiper-slide>
                     <swiper-slide class="">
                        <div
                           class=" bg-[url('../assets/logo.png')]  overflow-hidden bg-contain animate-pulse aspect-[2/.8] bg-center bg-no-repeat w-full">
                        </div>
                     </swiper-slide>
                     <swiper-slide class="">
                        <div
                           class=" bg-[url('../assets/logo.png')]  overflow-hidden bg-contain animate-pulse aspect-[2/.8] bg-center bg-no-repeat w-full">
                        </div>
                     </swiper-slide>
                     <swiper-slide class="">
                        <div
                           class=" bg-[url('../assets/logo.png')]  overflow-hidden bg-contain animate-pulse aspect-[2/.8] bg-center bg-no-repeat w-full">
                        </div>
                     </swiper-slide>

                  </template>
                  <template v-else>
                     <swiper-slide v-for="        item          in          sliderData         ">
                        <LazyNuxtImg format="webp" :src=" item.main_image " quality="50"
                           :alt=" item.name " />
                     </swiper-slide>
                  </template>
               </Swiper>

               <div class="swiper-button-prev  md:px-4  pt-12">
               </div>
            </div>
         </div>
         <slot></slot>
      </div>
   </section>
</template>

<script setup>
const { locale } = useI18n()
import axios from 'axios'
let sliderData = ref( [] )
let isLoading = ref( true )
const getData = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/partners', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records
      sliderData.value = data
      isLoading.value = false
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
}

onMounted( async () => {
   await getData()
} )

watchEffect( () => {
   getData()
} )

</script>

<style  scoped>
.swiper {
   width: 100%;
}


.swiper-slide {
   /* Center slide text vertically */
   max-width: 175px;
   border-radius: 15px;
   aspect-ratio: 1/1;
   overflow: hidden;
   background-image: url('/assets/logo.png');
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
   justify-content: center;
   align-items: center;
}


.swiper-slide img {
   width: 100%;
   aspect-ratio: 1/1;
}
</style>