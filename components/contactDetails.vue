<template>
   <div class="flex flex-col items-center "><img class="contact" src="../assets/22.png"
         alt="social icon">
      <h2 class="title-contact">{{ $t( 'سعداء بزيارتك' ) }}</h2>
      <p v-if=" lang == 'ar' " class="form-text" v-for="   item    in     addressAR    " :key=" item.id ">
      <p>{{ item }}</p>
      </p>
      <p v-if=" lang == 'en' " class="form-text" v-for="   item    in     addressEN    " :key=" item.id ">
      <p>{{ item }}</p>
      </p>
   </div>
   <div class="flex flex-col items-center"><img class="contact" src="../assets/23.png" alt="">
      <h2 class="title-contact">{{ $t( "إتصل بنا" ) }}</h2>
      <p class="form-text" v-for="    item     in      phoneNumbers     " :key=" item.id "><a
            :href=" 'tel:' + item "> {{ item }}</a></p>
   </div>
   <div class="flex flex-col items-center"><img class="contact" src="../assets/24.png"
         alt="social icon">
      <h2 class="title-contact">{{ $t( 'سعداء بزيارتك' ) }}</h2>
      <p class="form-text" v-for="     item      in       emails      " :key=" item.id "><a
            :href=" 'mailto:' + item ">{{ item }}</a></p>
   </div>
   <div class="hidden  flex-col absolute bottom-4 ">
      <img width="105" src="../assets/message.png" alt="social icon">
      <div class=" w-[105] flex justify-center"><img width="28" src="../assets/up.png"
            alt="social icon">
      </div>
   </div>
</template>

<script setup>
import axios from 'axios'
const addressAR = ref( [] )
const addressEN = ref( [] )
const emails = ref( [] )
const phoneNumbers = ref( [] )
const { locale } = useI18n()


let lang = ref( '' )
if ( process.client ) {
   lang.value = localStorage.getItem( 'lang' )
}
onMounted( async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/settings/contact', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data
      // Loop through the data and categorize it
      for ( let i = 0; i < data.length; i++ ) {
         if ( data[ i ].key === "address" ) {
            if ( data[ i ].language === "ar" ) {
               addressAR.value.push( data[ i ].value )
            } else {
               addressEN.value.push( data[ i ].value )
            }
         } else if ( data[ i ].key === "email" ) {
            emails.value.push( data[ i ].value )
         } else if ( data[ i ].key === "phone" ) {
            phoneNumbers.value.push( data[ i ].value )
         }
      }
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
} )
</script>

<style lang="scss" scoped></style>