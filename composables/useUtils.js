const { locale } = useI18n()
import axios from 'axios'


export const useUtils = () => {

   const sayHello = () => {
      console.log( "Hello" )
   }
   const getData = (route) => {
      axios.get( `https://dev.refine-care.com/api/${route}`, {
      headers: {
         lang: locale.value
      }
   } )
}


   return {
      sayHello,
      getData,
}


}