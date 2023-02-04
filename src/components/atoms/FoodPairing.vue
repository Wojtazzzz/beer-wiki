<script setup lang="ts">
defineProps<{
  pairing?: string[];
}>();
</script>

<template>
  <section class="my-8">
    <h3 class="text-3xl mb-2 font-medium">Food Pairing</h3>

    <ol class="list-disc">
      <li v-for="item in pairing" :key="item">{{ item }}</li>
    </ol>
  </section>
</template>
