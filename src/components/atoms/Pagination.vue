<script setup lang="ts">
defineProps<{
  currentPage: number;
}>();

const pagination = [1, 2, 3, 4];
</script>

<template>
  <nav aria-label="Pagination" class="flex ml-auto">
    <button
      v-for="page in pagination"
      class="px-3 py-2 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 transition-colors"
      :class="{ 'bg-gray-200 text-gray-700 hover:bg-gray-300': page === currentPage }"
      @click="$emit('toPage', page)"
    >
      {{ page }}
    </button>
  </nav>
</template>
