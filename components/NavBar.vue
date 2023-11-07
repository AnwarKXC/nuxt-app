<template>
      <header class="fixed w-screen   uppercase  font-arabic z-40 bg-white ">
         <div class=" container py-4  flex  md:justify-between  md:gap-8 items-center text-lg ">
            <div class="flex md:gap-6 md:justify-start  justify-between  flex-grow  items-center">
               <div class="flex justify-end md:justify-start  order-last md:order-first">
                  <a class=" " href="/" aria-label="Home"><img
                        class="max-w-[75px] object-cover rounded-md aspect-square"
                        src="../assets/group47550.svg" alt=""></a>
               </div>
               <nav class="hidden md:inline-flex font-medium">
                  <ul class=" desk flex xl:gap-[30px] md:text-sm lg:text-lg ">
                     <li :class=" { 'active ': $route.path == '/' } ">
                        <NuxtLink to="/">{{ $t( 'الرئيسية' ) }}</NuxtLink>
                     </li>
                     <li :class=" { 'active ': $route.path == '/about' } ">
                        <NuxtLink to="/about">{{ $t( "من نحن" ) }}</NuxtLink>
                     </li>
                     <li :class=" { 'active ': $route.path == '/contact' } ">
                        <NuxtLink to="/contact">{{ $t( "تواصل معنا" ) }}</NuxtLink>
                     </li>
                     <li :class=" { 'active ': $route.path == '/blog' } ">
                        <NuxtLink to="/blog">{{ $t( "المدونة" ) }}</NuxtLink>
                     </li>
                  </ul>
               </nav>
               <div class="md:hidden cursor-pointer " @click=" toggleModal ">
                  <img v-if=" lang === 'en' " width="36" src="../assets/left-alignment.svg" alt="">
                  <img v-if=" lang === 'ar' " width="36" src="../assets/Untitled.svg" alt="">
               </div>
               <div
                  class=" cursor-pointer   px-2 text-prim font-semibold tracking-wider outline-0 md:hidden"
                  aria-label="lang ">
                  <div v-if=" lang === 'en' " @click=" ar ">AR</div>
                  <div v-if=" lang === 'ar' " @click=" en ">EN</div>
               </div>
            </div>
            <div class=" hidden md:inline-flex gap-6 font-arabic items-center">
               <div
                  class="cursor-pointer   px-2 text-prim font-semibold tracking-wider outline-0 "
                  aria-label="lang ">
                  <div v-if=" lang === 'en' " @click=" ar ">AR</div>
                  <div v-if=" lang === 'ar' " @click=" en ">EN</div>
               </div>
               <div class=" relative">
                  <button :class=" { 'bg-[#2300d3] ': isOpen == true, 'bg-prim': isOpen == false } "
                     @click=" toggleDropdown " class="button-prim-nav "> {{ $t( 'تحميل التطبيق' )
                     }}</button>
                  <ul v-if=" isOpen " class="dropdown-menu  drop-shadow-xl ">
                     <DownloadApps />
                  </ul>
               </div>
            </div>
            <BaseModal :modalActive=" modalActive " @close-modal=" toggleModal ">
               <div class=" flex flex-col justify-center">
                  <ul class=" flex gap-4 justify-center  items-start it flex-col text-lg">
                     <li>
                        <NuxtLink class="flex  items-center  gap-3" to="/"> <img class=" invert"
                              src="../assets/home.png" alt="">{{ $t( 'الرئيسية' ) }}</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="flex  items-center  gap-3" to="/about"> <img class=" invert"
                              src="../assets/information-button.png" alt="">{{ $t( "من نحن" ) }}
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="flex  items-center  gap-3 " to="/contact"> <img class=" invert"
                              src="../assets/contact-us.png" alt="">{{ $t( "تواصل معنا"
                              ) }}</NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="flex  items-center  gap-3" to="/blog"> <img class=" invert"
                              src="../assets/web-page.png" alt="">{{ $t( "المدونة" ) }}</NuxtLink>
                     </li>
                  </ul>
               </div>
               <ul class=" max-w-[170px] my-4 ">
                  <DownloadApps />
               </ul>
               <div class="flex gap-4 py-6 flex-wrap invert scale-150">
                  <socialMedia />
               </div>
               <div class=" flex gap-8 flex-col">
                  <p v-for="     item    in    phoneNumbers    " :key=" item.id ">
                     <a :href=" 'tel:' + item "> {{ item }}</a>
                  </p>
               </div>
            </BaseModal>
         </div>
      </header>
</template>

<script setup >

const { locale } = useI18n()


let lang = ref( '' )
if ( process.client ) {
   lang.value = localStorage.getItem( 'lang' )
}

function ar () {
   locale.value = 'ar'

   reload()
}

function en () {
   locale.value = 'en'
   reload()
}

function reload () {
   if ( process.client ) {
      window.location.reload()
   }
}


const modalActive = ref( null )
const toggleModal = () => {
   modalActive.value = !modalActive.value
}

const isOpen = ref( false )
const toggleDropdown = () => {
   isOpen.value = !isOpen.value
}

import axios from 'axios'
import { onMounted } from 'vue'
const phoneNumbers = ref( [] )

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
         if ( data[ i ].key === "phone" ) {
            phoneNumbers.value.push( data[ i ].value )
         }
      }
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
} )
</script>

<style scoped>
li {
   padding: 10px 15px;
   border-radius: 10px;
}

li:hover {
   background-color: #eeeeee15;

}

.desk li:hover {
   color: #0040ff;
   scale: 1.05;
}

.desk li:active {
   scale: 1.2;
}

.active {
   color: #0040ff;
   scale: 1.1;
   font-weight: 700;


}

.dropdown-menu {
   position: absolute;
   list-style: none;
   z-index: 10;
   padding-top: 5px;
   border-radius: 0 0 10px 10px;

}

.dropdown-menu li {
   padding: 3px;
   margin: 5px;
   cursor: pointer;

}

.dropdown-menu li:hover {
   box-shadow: 0 10px 20px rgba(47, 46, 46, 0.188), 0 6px 6px rgba(0, 0, 0, 0.23);
   scale: 1.075;
}
</style>