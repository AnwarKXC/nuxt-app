<template>
   <section class=" relative  ">
      <div class="z-10 fixed hidden md:flex flex-col  bottom-10 rtl:right-2 ltr:left-2 ">
         <LazySwippingTop />
      </div>
<div v-if="  isLoading "   class=" animate-pulse">
   <AnimatedBackground/>
</div>
      <template v-if=" !isLoading ">
         <swiper class="mySwiper" :slides-per-view=" 1 " :loop=" true " :autoplay=" {
            delay: 3000,
            disableOnInteraction: false,
         } " :grab-cursor=" true " :modules=" [ SwiperPagination, SwiperAutoplay ] "
            :pagination=" value ">
            <swiper-slide v-if=" isLoading " class=" animate-pulse">
               <AnimatedBackground/>
            </swiper-slide>
            <template v-else>
               <swiper-slide  v-for="  item   in   sliderData  ">
                  <SliderImage :item=" item " :key=" item.id " />
               </swiper-slide>
            </template>
         </swiper>
      </template>


   </section>
</template>
<script setup>
const { locale } = useI18n()
let isLoading = ref( true )

import axios from 'axios'
let sliderData = ref( [] )
const getData = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/slider', {
         headers: {
            lang: locale.value
         }
      } )
      const data = await response.data.records
      sliderData.value = await data
      isLoading.value = false
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
}

onMounted( async () => {
   await getData()
} )


//display pagination in large screens
const value = ref( false )
if ( process.client ) {
   if ( window.innerWidth > 1024 ) {
      value.value = true
   }
}



// to auto force page to view on top
const focus = ref( null )
onMounted( () => {
   if ( focus.value ) {
      focus.value.focus()
   }
   scroll()
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
   text-align: center;
   font-size: 18px;
   width: 100vw;
   aspect-ratio: 2/.8;
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>