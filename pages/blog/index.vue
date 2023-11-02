<template>
   <section class=" container font-arabic">
      <div class="z-10 fixed hidden md:flex flex-col  bottom-10  ">
         <LazySwippingTop />
      </div>
      <div class="flex flex-col items-center  ">


         <h1 class="title"> {{ $t( 'المدونة' ) }}</h1>

               <LazyProductList :sliderData=" sliderData.data " />
               <ProductCardSkelton v-if=" !sliderData.data "/>




         <paginate :page-count=" ( sliderData.total / 10 ) " :page-range=" 3 " :margin-pages=" 1 "
            :click-handler=" onClickHandler " :prev-text=" '<' " :next-text=" '>' "
            :container-class=" 'pagination-container' " :page-class=" 'paginate-buttons' "
            :active-class=" 'active-page' " :next-class=" 'next-button' "
            :prev-class=" 'back-button' ">
         </paginate>
      </div>
   </section>
</template>

<script setup >
import Paginate from "vuejs-paginate-next"
import axios from 'axios'
let currentPage = ref( 1 )
const sliderData = ref( [] )
let lang = ref( '' )
if ( process.client ) {
   lang.value = localStorage.getItem( 'lang' )
}
const { locale } = useI18n()

const getData = async ( page ) => {
   try {
      const response = await axios.get( `https://dev.refine-care.com/api/v1/blogs?page=${ page }`, {
         headers: {
            lang: locale.value,
         },
      } )
      const data = await response.data.records
      sliderData.value = await data
      currentPage = await data.current_page
   } catch ( error ) {
      console.error( 'Error fetching data:', error )
   }
}
onMounted( async () => {
   await getData( currentPage )
} )

watchEffect( () => {
   getData( currentPage )
} )

const onClickHandler = ( page ) => {
   getData( page )
}




</script>

<style  >
.pagination-container {
   display: flex;
   gap: 10px;
   justify-content: center;
   align-items: center;

}

.number-buttons {
   color: black;
   font-weight: 600;
}

.back-button,
.next-button {
   font-size: 25px;
   background: #146AFF;
   border: 2px solid #146AFF;
   font-weight: 900;
   color: white;
   border: none;
   border-radius: 25%;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   cursor: pointer;
}

.back-button:hover,
.next-button:hover {
   background: #0644af;
}



.paginate-buttons {
   border-radius: 25%;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 40px;
   height: 40px;
   cursor: pointer;
   border: 2px solid rgba(0, 0, 0, 0.422);

}

.active-page {
   background: #0644af;
   border: 2px solid #0644af;
   font-weight: 900;
   color: white;

}


.back-btn,
.next-btn {
   background-color: red;
}
</style>