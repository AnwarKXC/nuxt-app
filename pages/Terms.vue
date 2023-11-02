<template>
   <div class="container min-h-screen font-arabic">
      <h1 ref="focus" class="title">{{ $t( 'شروط الاستخدام' ) }}</h1>
      <p class=" leading-8" v-html=" termsOf.page ">
      </p>
   </div>
</template>

<script setup>

// to auto force page to view on top
const focus = ref( null )
onMounted( () => {
   if ( focus.value ) {
      focus.value.focus()
   }
   window.scrollTo( 0, 0 )
} )

const { locale } = useI18n()
let termsOf = ref( [] )
import axios from 'axios'
const getData = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/settings/page/terms_and_conditions', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data[ 0 ]
      termsOf.value = data
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

<style lang="scss" scoped></style>