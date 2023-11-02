<template>
   <main class="container font-arabic pt-7">
      <!-- Main article content -->
      <section class="  md:flex gap-5">
         <div class="md:w-[2/3]">
            <h4 ref="focus" class="text-sm font-bold">{{ mainArticle.created_at }}</h4>
            <h2 class="text-3xl py-5 font-bold">{{ mainArticle.title }}</h2>
            <div class="relative">
               <!-- Main article image -->
               <div class="min-w-[320px] aspect-[2/1] rounded-[15px] overflow-hidden relative">
                  <img class="w-full absolute inset-0 aspect-[2/1]" :src=" mainArticle.main_image "
                     alt="article photo">
                  <!-- Share buttons -->
                  <div
                     class="flex gap-6 absolute bottom-0 px-6 py-8 bg-gradient-to-t from-black to-[#00000000] w-full">
                     <span
                        class="text-white cursor-pointer hover:text-prim">{{ $t( 'شارك' ) }}</span>
                     <div class="flex gap-1">
                        <a href=""><img @click=" shareOnFacebook " width="24"
                              src="../../assets/faceimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnInstagram " width="24"
                              src="../../assets/instaimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnWhatsApp " width="24"
                              src="../../assets/whatsimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnTwitter " width="24"
                              src="../../assets/twitterimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnLinkedIn " width="24"
                              src="../../assets/linkdimg.svg" alt=""></a>
                     </div>
                  </div>
               </div>
               <h5 v-html=" mainArticle.description " class="text-[19px] leading-[50px]"></h5>
            </div>
         </div>
         <!-- Latest articles -->



         <div class="py-24 md:w-[1/3] md:block flex justify-center flex-col items-center">
            <h2 class="text-2xl">{{ $t( 'آخر المقالات' ) }}</h2>
            <div class="flex flex-col gap-6 flex-grow md:flex-grow-0"
               v-for="       item        in        filterdArr.slice( 0, 2 )       ">
               <LazyLastArticle :item=" item " :key=" item.id " />
            </div>
            <div class="flex justify-end flex-col md:flex-row">
               <a href="/blog">
                  <button class="button-prim text-xl mt-6"> {{ $t( 'المزيد' ) }}<span
                        class="font-bold">+</span></button>
               </a>
            </div>
         </div>

      </section>
      <section>
         <div class="mt-16 flex justify-center items-center gap-8 flex-col md:flex-row">
            <div class="flex flex-col gap-4 flex-grow">
               <h2 class="text-[21px] font-bold">{{ $t( 'مقالات مقترحة' ) }}</h2>
               <div v-for="(       item, index       ) in        filterdArr.slice( 2, 6 )       ">
                  <NuxtLink
                     :to=" `/blog/${ item.id }/?${ ( item.title ).split( ' ' ).join( '-' ) }` "
                     :key=" item.id ">
                     <div
                        class="cursor-pointer relative flex justify-start items-center gap-4 border border-[#BFBFBF] py-5 px-2 rounded-[15px] font-bold">
                        <span
                           class="w-10 h-10 flex justify-center items-center rounded-full border-2 pl-1 font-bold border-prim">
                           <span class="mr-1.5">{{ index + 1 }}</span>
                        </span>
                        <h2>{{ item.title }}</h2>
                     </div>
                  </NuxtLink>
               </div>
            </div>
            <div class="flex flex-col gap-4 flex-grow">
               <h2 class="text-[21px] font-bold">{{ $t( 'الأكثر قراءة' ) }}</h2>
               <div v-for="(       item, index       ) in        filterdArr.slice( 0, 3 )       ">
                  <NuxtLink
                     :to=" `/blog/${ item.id }/?${ ( item.title ).split( ' ' ).join( '-' ) }` "
                     :key=" item.id ">
                     <div
                        class="cursor-pointer relative flex justify-start items-center gap-4 border border-[#BFBFBF] py-5 px-2 rounded-[15px] font-bold">
                        <span
                           class="w-10 h-10 flex justify-center items-center rounded-full border-2 pl-1 font-bold border-prim">
                           <span class="mr-1.5">{{ index + 1 }}</span>
                        </span>
                        <h2>{{ item.title }}</h2>
                     </div>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </section>
   </main>





<h2>


</h2>







</template>

<script setup>
import axios from 'axios'
const { locale } = useI18n()

const route = useRoute()
let mainArticle = ref( {} )
let allArticles = ref( [] )
let filterdArr = ref( [] )

let id = ref( route.params.id )
let lang = ref( '' )

if ( process.client ) {
   lang.value = localStorage.getItem( 'lang' )
}
const fetchMainArticle = async ( articleId ) => {
   try {
      const response = await axios.get( `https://dev.refine-care.com/api/v1/blog/${ articleId }`, {
         headers: {
            lang: locale.value,
         },
      } )
      const data1 = response.data.record
      mainArticle.value = data1

   } catch ( error ) {
      console.error( 'Error fetching main article:', error )
   }
}
const fetchAllArticles = async () => {
   try {
      const response = await axios.get( 'https://dev.refine-care.com/api/v1/blogs?page=' + id, {
         headers: {
            lang: locale.value,
         },
      } )
      let data = response.data.records
      let filterdData = data.data.filter( ( item ) => item.id != id.value )
      allArticles.value = data
      filterdArr.value = filterdData
   } catch ( error ) {
      console.error( 'Error fetching all articles:', error )
   }
}
const focus = ref( null )

onMounted( async () => {
   await fetchMainArticle( id.value )
   await fetchAllArticles()
   if ( focus.value ) {
      focus.value.focus()
   }
   scroll()
} )
watch( ( locale.value, async ( newlocal, oldlocal ) => {
   newlocal !== oldlocal
   await fetchMainArticle( id.value )
   await fetchAllArticles()

} ) )


watch( route, async ( newRoute ) => {
   let newId = newRoute.params.id
   fetchMainArticle( newId )
   
} )

const scroll = () => {
   if ( process.client ) {
      window.scrollTo( 0, 0 )
   }
}











const shareOnFacebook = () => {

   if ( process.client ) {
      const url = window.location.href

      const encodedUrl = encodeURIComponent( url )
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${ encodedUrl }`
      window.open( facebookShareUrl, '_blank' )
   }


}

const shareOnTwitter = () => {

   if ( process.client ) {
      const url = window.location.href

      const title = document.title
      window.open( `https://twitter.com/intent/tweet?url=${ encodeURIComponent( url ) }&text=${ encodeURIComponent( title ) }` )
   }


}

const shareOnLinkedIn = () => {

   if ( process.client ) {
      const url = window.location.href

      window.open( `https://www.linkedin.com/sharing/share-offsite/?url=${ encodeURIComponent( url ) }` )

   }

}

const shareOnWhatsApp = () => {

   if ( process.client ) {
      const url = window.location.href

      window.open( `https://wa.me/?text=Check%20out%20this%20awesome%20website:${ encodeURIComponent( url ) }` )

   }

}

const shareOnInstagram = () => {

   if ( process.client ) {
      const url = window.location.href


      const encodedUrl = encodeURIComponent( url )
      window.open( `https://www.instagram.com/?url=${ encodedUrl }` )
   }

}
</script>

<style scoped>
p {
   padding: 60px 0;
}
</style>
