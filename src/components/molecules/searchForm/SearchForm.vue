<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import { useSearchForm } from './useSearchForm';

const { name, ibu, search } = useSearchForm();
</script>

<template>
  <form class="flex gap-3">
    <input
      v-model="name"
      type="text"
      placeholder="BEER NAME"
      class="px-3 py-2 bg-gray-200 rounded-md shadow-sm"
    />
    <input
      v-model="ibu"
      type="number"
      placeholder="BEER IBU"
      class="px-3 py-2 bg-gray-200 rounded-md shadow-sm"
    />

    <Button variant="primary" type="submit" @click.prevent="search">Search</Button>
    <Button variant="secondary" type="reset">Reset</Button>
  </form>
</template>
