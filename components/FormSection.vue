<template>
   <form @submit.prevent=" submitHandler " class="text-start md:pt-6 container max-w-[744px]">
      <div class="flex flex-col md:flex-row justify-center items-center md:gap-10 ">
         <div class="flex flex-col container">
            <label for="form">{{ $t( 'الإسم' ) }}</label>
            <input v-model="nameRef" autocomplete="additional-name" id="form" maxlength="100"
               minlength="10" type="name" :placeholder=" $t( 'قم بإدخال الاسم' ) " />
         </div>
         <div class="flex flex-col container md:w-full">
            <label for="email">{{ $t( 'البريد الالكتروني' ) }}</label>
            <input v-model="emailRef" type="email" name="email"
               :placeholder=" $t( 'قم بإدخال البريد الالكتروني' ) " />
         </div>
      </div>
      <div class="flex flex-col px-2 md:px-0">
         <label for="message">{{ $t( 'الرسالة' ) }}</label>
         <textarea v-model="messageRef" id="message" :placeholder=" $t( '... يسعدنا قراءة رسالتك' ) "
            rows="4"></textarea>
      </div>
      <div class="flex justify-center">
         <button type="submit" class="button-prim mt-10">{{ $t( 'يسعدنا انضمامك معنا' ) }}</button>
      </div>
   </form>
</template>

<script setup>
import axios from 'axios'

const nameRef = ref( '' )
const emailRef = ref( '' )
const messageRef = ref( '' )

async function submitHandler () {
   try {
      const response = await axios.post( 'https://dev.refine-care.com/api/v1/contact_us', {
         name: nameRef.value,
         email: emailRef.value,
         message: messageRef.value,
      } )
      if ( response.status === 200 ) {
         window.alert( 'Message sent successfully ❤️' )
         // Clear the form fields after a successful submission
         nameRef.value = ''
         emailRef.value = ''
         messageRef.value = ''
      }
   } catch ( error ) {
      window.alert( 'Something went wrong' )
   }
}
</script>

<style lang="scss" scoped></style>