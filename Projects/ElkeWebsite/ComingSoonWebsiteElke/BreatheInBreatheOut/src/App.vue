<template>
  <div class="h-screen w-screen">
    <img src="./assets/nature_small.jpg" alt="nature" class="absolute h-full w-full object-cover">
    <div class="relative w-full h-full">
      <div class="grid place-items-center 2xl:h-1/2">

      </div>
      <div class="fixed bottom-0 w-full items-center">
        <div class="flex flex-col justify-center items-center w-full">
          <span
            class="font-black text-white drop-shadow-md text-6xl text-center 2xl:text-8xl animate-pulse">Breathe
            in,
            Breathe
            out</span>
          <span class="mt-4 text-black mb-10">Website coming soon ...</span>
        </div>
        <h1 class="flex justify-center mb-4 font-black text-white text-4xl drop-shadow-md">Puur Ademwerk</h1>
        <div class="mx-4">
          <WhatsAppButton class="mx-4 mb-6" phone-number="31618257426"/>
        </div>
        <div class="mx-4">
          <ContactForm class="sm:mx-auto mb-4 lg:mb-12 3xl:mb-44"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WhatsAppButton, ContactForm } from '@/components'
</script>
