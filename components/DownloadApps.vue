<template>
   <li v-for=" item in  ios " :key=" item.id "><a target="_blank" :href=" item.value "><img src="../assets/copy.png"
            alt=""></a></li>
   <li v-for=" item in  android  " :key=" item.id "><a target="_blank" :href=" item.value "><img
            src="../assets/copy1.png" alt=""></a>
   </li>
</template>

<script setup>
import axios from 'axios'
let ios = ref( [] )
let android = ref( [] )
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
         if ( data[ i ].key === "ios" ) {
            ios.value.push( data[ i ] )
         }
         else if ( data[ i ].key === "android" ) {
            android.value.push( data[ i ] )
         }
      }

   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
} )

</script>

<style  scoped>
li {
   padding: 3px;
   margin: 5px;
   cursor: pointer;

}

</style>