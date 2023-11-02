<template>
   <section class=" w-screen bg-[#FAFAFB] flex justify-center items-center font-arabic pb-10">
      <div class=" container ">
         <div class="max-w-[1175px] mx-auto">
            <div class="flex md:justify-between items-center justify-center">
               <h1 class="title"> {{ $t( 'المدونة' ) }}</h1>
               <NuxtLink aria-label="Show more" to="/blog">
                  <button class="button-prim hidden md:inline-flex"> {{ $t( 'المزيد' ) }} <span
                        class=" font-bold">+</span></button>
               </NuxtLink>
            </div>
            <div class=" flex justify-center flex-wrap items-center gap-[22px] text-center pt-8 ">
               <LazyProductList v-if=" sliderData[ 0 ] " :number=" 3 " :sliderData=" sliderData " />
               <ProductCardSkelton v-if=" !sliderData[ 0 ] " />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import axios from 'axios'
const sliderData = ref( [] )
const { locale } = useI18n()

const getData = async ( page ) => {

   try {
      const response = await axios.get( `https://dev.refine-care.com/api/v1/blogs?page=${ page }`, {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data
      sliderData.value = data
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
}
onMounted( () => {
   getData( 1 )
} )

watchEffect( () => {
   getData( 1 )
} )
</script>

<style lang="scss" scoped></style>