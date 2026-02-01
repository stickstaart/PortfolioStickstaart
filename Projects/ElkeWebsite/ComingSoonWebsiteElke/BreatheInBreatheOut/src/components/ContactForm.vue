<template>
  <div class="max-w-md mx-auto p-5 border border-gray-300 rounded-lg shadow-md bg-white/55">
    <h2 class="text-2xl font-bold mb-4 text-center text-white drop-shadow-md">Mail mij!</h2>
    <form @submit.prevent="sendEmail">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Naam</label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="formData.email"
          type="email"
          id="email"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Bericht</label>
        <textarea
          v-model="formData.message"
          id="message"
          required
          rows="4"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Verstuur
      </button>
    </form>
    <p v-if="successMessage" class="mt-4 text-green-500">{{ successMessage }}</p>
    <p v-if="errorMessage" class="mt-4 text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import emailjs from 'emailjs-com';

export default defineComponent({
  name: 'ContactForm',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      message: '',
    });

    const successMessage = ref('');
    const errorMessage = ref('');

    const sendEmail = async () => {
      try {
        const result = await emailjs.send(
          'service_io8bwvf', // #VITE_EMAILJS_SERVICE_ID
          'template_1qyf52a', // #VITE_EMAILJS_TEMPLATE_ID
          formData.value,
          'tXpW3u5u0CFCP-1er' // #VITE_EMAILJS_USER_ID import.meta.env.VITE_VAR_NAME_HERE
        );
        successMessage.value = 'Email sent successfully!';
        errorMessage.value = '';
      } catch (error) {
        successMessage.value = '';
        errorMessage.value = 'Failed to send email. Please try again.';
      }
    };

    return {
      formData,
      successMessage,
      errorMessage,
      sendEmail,
    };
  },
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
