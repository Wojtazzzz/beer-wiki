<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary';

defineProps<{
  variant: ButtonVariant;
}>();
</script>

<template>
  <button
    class="px-3 py-2 rounded-md transition-opacity shadow-sm"
    :class="{
      'text-gray-100 bg-blue-600 hover:bg-blue-600/90 active:bg-blue-600/80': variant === 'primary',
      'text-black bg-yellow-500 hover:bg-yellow-500/90 active:bg-yellow-500/80':
        variant === 'secondary',
    }"
  >
    <slot></slot>
  </button>
</template>
