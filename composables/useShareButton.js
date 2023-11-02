
import { ref, onMounted } from 'vue'
import { isWebShareSupported } from '../../utils/isWebShareSupported'

export default function useShareButton () {
   const webShareSupported = ref( false )

   const sharePage = async () => {
      try {
         const shareData = {
            title: document.title,
            text: 'Check out this page!',
            url: window.location.href,
         }

         await navigator.share( shareData )
      } catch ( error ) {
         console.error( 'Error sharing:', error )
      }
   }

   onMounted( () => {
      webShareSupported.value = isWebShareSupported()
   } )

   return {
      webShareSupported,
      sharePage,
   }
}