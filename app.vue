<template>
  <div>
    <VitePwaManifest />
    <NavBar />
    <div class="pt-[80px]">
      <NuxtPage />
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
useSeoMeta( {
  title: 'Refine',
  description: 'Refine'
} )
const { locale } = useI18n()
watchEffect( () => {
  if ( process.client ) {
    localStorage.setItem( "lang", locale.value )
    if ( locale.value == 'en' ) {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
    } else {
      document.documentElement.dir = 'rtl'
            document.documentElement.lang = 'ar'

    }
  }
} )


</script>