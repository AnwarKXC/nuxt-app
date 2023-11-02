<template>
   <main
      class=" container flex flex-col xl:flex-row justify-center md:gap-16 items-center  font-arabic py-10 md:py-6 ">
      <div class=" text-center  font-arabic  text-[20px] leading-[35px] ">
      </div>
      <div class=" text-center  font-arabic  text-[20px] leading-[35px]  -mt-4 xl:max-w-[70%] ">
         <div class="max-w-[744px] flex justify-center items-center text-center flex-col">
            <LazyContactDetails />
         </div>
      </div>
      <div>
         <h1 ref="focus" class="title-contact ">{{ $t( "كن علي تواصل معنا" ) }}</h1>
      </div>
      <LazyFormSection />
   </main>
</template>

<script setup>

const scroll = () => {
   window.scrollTo( 0, 0 )
}

const focus = ref( null )
onMounted( () => {
   if ( focus.value ) {
      focus.value.focus()
   }
   scroll()
} )

</script>

<style lang="scss" scoped></style>