<template>
   <a aria-label="SocialMedia" v-for="    item   in   facebook    " :key=" item.id " target='_blank' :href=" item.value "><img
         width="16" src="../assets/facebook-app-symbol.png" alt=""></a>
   <a aria-label="SocialMedia" v-for="    item    in    youtube   " :key=" item.id " :href=" item.value "><img width="16"
         target='_blank' src="../assets/youtube.png" alt=""></a>
   <a aria-label="SocialMedia" target='_blank' v-for="   item     in    linkedin  " :key=" item.id " :href=" item.value "><img
         width="16" src="../assets/linkedin.png" alt=""></a>
   <a aria-label="SocialMedia" target='_blank' v-for="  item   in    telegram   " :key=" item.id " :href=" item.value "><img
         width="16" src="../assets/telegram.png" alt=""></a>
   <a aria-label="SocialMedia" target='_blank' v-for="   item    in   x   " :key=" item.id " :href=" item.value "><img width="16"
         src="../assets/xlogo.png" alt=""></a>
   <a aria-label="SocialMedia" target='_blank' v-for="   item   in    instagram    " :key=" item.id " :href=" item.value "><img
         width="16" src="../assets/instagram.png" alt=""></a>
   <a aria-label="SocialMedia" target='_blank' v-for="   item   in   whatsapp   " :key=" item.id "
      :href=" 'https://wa.me/' + item.value "><img width="16" src="../assets/whatsapp.png"
         alt=""></a>
</template>

<script setup>
import axios from 'axios'

let facebook = ref( [] )
const youtube = ref( [] )
const linkedin = ref( [] )
const telegram = ref( [] )
const x = ref( [] )
const instagram = ref( [] )
const whatsapp = ref( [] )

const { locale } = useI18n()

onMounted( async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/settings/social', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data
      for ( let i = 0; i < data.length; i++ ) {
         if ( data[ i ].key === "facebook" ) {
            facebook.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "youtube" ) {
            youtube.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "linkedin" ) {
            linkedin.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "telegram" ) {
            telegram.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "x" ) {
            x.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "instagram" ) {
            instagram.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "whatsapp" ) {
            whatsapp.value.push( data[ i ] )
         }
      }
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
} )
</script>

<style  scoped>
img:hover{
scale: 1.3;
transition: 400ms;
}
</style>