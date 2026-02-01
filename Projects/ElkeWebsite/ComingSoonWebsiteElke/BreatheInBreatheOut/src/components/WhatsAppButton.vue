<template>
  <a
    :href="whatsAppUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="max-w-md mx-auto flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
  >
    <img src="@/assets/whatsapp-icon.svg" alt="WhatsApp" class="w-6 h-6 mr-2" />
    Open WhatsApp Chat
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WhatsAppButton',
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: 'Hello, I would like to get in touch with you.',
    },
  },
  computed: {
    whatsAppUrl(): string {
      const encodedMessage = encodeURIComponent(this.message);
      return `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    },
  },
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
