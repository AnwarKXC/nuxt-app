<template>
   <p v-if=" aboutData.page " v-html=" aboutData.page " class=" text-[20px]  text-start ">
   </p>
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

<style lang="scss" scoped></style>