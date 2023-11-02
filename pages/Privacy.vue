<template>
   <div class=" container min-h-screen font-arabic">
      <h1 ref="focus" class="title">{{ $t( 'سياسة الخصوصية' ) }}</h1>
      <p class=" leading-8" v-html=" privacy.page ">


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
let privacy = ref( [] )

const getData = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/settings/page/privacy', {
         headers: {
            lang: locale.value
         }
      } )
      const data = response.data.records.data[ 0 ]
      privacy.value = data
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