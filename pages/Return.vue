<template>
   <div class=" container min-h-screen font-arabic">
      <h1 ref="focus" class="title">{{ $t( 'سياسة الاسترجاع' ) }}</h1>
      <p class=" leading-8" v-html=" returnPolicy.page ">
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
import axios from 'axios'
const getData = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/settings/page/return', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data[ 0 ]
      returnPolicy.value = data
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
}
let returnPolicy = ref( [] )
onMounted( async () => {
   await getData()
} )

watchEffect( () => {
   getData()
} ) 
</script>

<style lang="scss" scoped></style>