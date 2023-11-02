import en from './locales/en.json'
import ar from './locales/ar.json'

const lang = typeof localStorage !== 'undefined' ? localStorage.getItem( 'lang' ) : 'ar'


export default defineI18nConfig( () => ( {
   legacy: false,
   locale: lang||"ar",
   messages: {
      en: en,
      ar: ar
   }
} ) )




