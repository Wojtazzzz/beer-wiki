<script setup lang="ts">
import AppName from '../atoms/AppName.vue';
import SearchForm from '../molecules/searchForm/SearchForm.vue';
</script>

<template>
  <div class="shadow-md mb-12">
    <header class="container mx-auto px-4 py-6 flex justify-between items-center">
      <h1>
        <AppName />
      </h1>

      <SearchForm />
    </header>
  </div>
</template>
