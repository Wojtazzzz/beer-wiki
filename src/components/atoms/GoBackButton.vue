<script setup lang="ts">
import { useRouter } from 'vue-router';

const { back } = useRouter();
</script>

<template>
  <button
    type="button"
    aria-label="Redirect to previous page"
    class="py-2 px-3 h-fit text-gray-100 rounded-md bg-blue-600 hover:bg-blue-600/90 active:bg-blue-600/80 transition-opacity"
    @click="back"
  >
    Back
  </button>
</template>
