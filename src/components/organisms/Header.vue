<script setup lang="ts">
import AppName from '../atoms/AppName.vue';
import SearchForm from '../molecules/SearchForm.vue';
</script>

<template>
  <div class="shadow-md">
    <header class="container mx-auto px-4 py-6 flex justify-between items-center">
      <AppName />
      <SearchForm />
    </header>
  </div>
</template>
