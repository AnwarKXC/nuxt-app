<template>
   <section
      class="container text-center font-arabic  text-[20px] leading-[35px]  flex justify-center items-center py-5 overflow-hidden">
         <div class="max-w-[938px] container">
            <h1 class="title">{{ $t( "أشهر خدماتنا" ) }}</h1>
            <div class="mt-12">

               <Swiper :slides-per-view=" 6.25 " :space-between=" 25 " :loop=" true " :breakpoints=" {
                  '200': {
                     slidesPerView: 1,
                     spaceBetween: 50,
                  },
                  '350': {
                     slidesPerView: 1,
                     spaceBetween: 50,
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
                     slidesPerView: 3,
                     spaceBetween: 40,
                  }
               } " :modules=" [ SwiperAutoplay ] " :autoplay=" {
   delay: 2000,
   disableOnInteraction: false,
} " class="mySwiper" :grab-cursor=" true ">
                  <swiper-slide v-for="    item     in     sliderData   ">
                     <div class="text-20px flex flex-col justify-center items-center">
                        <div class="serv">
                           <LazyNuxtImg format="webp" :src=" item.main_image " alt="" />
                        </div>
                        <p>{{ item.name }}</p>
                     </div>
                  </swiper-slide>
               </Swiper>
            </div>
         </div>

   </section>
</template>

<script setup>
import axios from 'axios'
const { locale } = useI18n()

let sliderData = ref( [] )

onMounted( async () => {
   let lang = ref( '' )
   if ( process.client ) {
      lang.value = localStorage.getItem( 'lang' )
   }

   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/services', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records
      sliderData.value = data
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
} )


</script>

<style scoped>
.swiper {
   width: 100%;
}

.swiper-slide {
   /* Center slide text vertically */
   width: 150px;
   border-radius: 15px;
   overflow: hidden;
   background: rgb(255, 255, 255);
   display: flex;
   justify-content: center;
   align-items: center;

}

.swiper-slide img {
   width: 100%;
   aspect-ratio: 1/1;
}
</style>

