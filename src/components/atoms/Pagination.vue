<script setup lang="ts">
defineProps<{
  page: number;
  changePage: (newPage: number) => void;
}>();
</script>

<template>
  <nav aria-label="Pagination" class="flex ml-auto">
    <button
      v-for="(item, index) in new Array(4)"
      class="px-3 py-2 text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 transition-colors"
      :class="{ 'bg-gray-200 text-gray-700 hover:bg-gray-300': index + 1 === page }"
      @click="changePage(index + 1)"
    >
      {{ index + 1 }}
    </button>
  </nav>
</template>
