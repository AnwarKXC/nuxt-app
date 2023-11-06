<template>
   <div class="skeleton-loader"></div>
</template>

<style scoped>
.skeleton-loader {
   width: 100%;
   aspect-ratio: 2/0.8;
   /* Set the aspect ratio to match your image's aspect ratio */
   background-color: #bebaba;
   /* Customize the background color of the skeleton loader */
   animation: pulsate .5s infinite;
   /* Add the pulsating animation */
}</style>
