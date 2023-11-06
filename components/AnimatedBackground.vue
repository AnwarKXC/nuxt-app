<template>
   <div class="swiper-slide loading-skeleton">
      <!-- Skeleton loader content here -->
   </div>
</template>

<style scoped>
.loading-skeleton {
   background-color: #f0f0f0;
   /* Customize the background color */
   animation: loading-animation 1s infinite;
   /* Add a loading animation */
}

@keyframes loading-animation {
   0% {
      opacity: 0.7;
   }

   50% {
      opacity: 0.5;
   }

   100% {
      opacity: 0.7;
   }
}</style>

