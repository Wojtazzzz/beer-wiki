<script setup lang="ts">
import { BeerFromList } from '../../utils/types';
import BeerCard from '../atoms/BeerCard.vue';
import Pagination from '../atoms/Pagination.vue';

defineProps<{
  beers?: BeerFromList[];
  page: number;
  changePage: (newPage: number) => void;
}>();
</script>

<template>
  <h2 class="sr-only">List of Beers</h2>

  <ul role="list" class="w-full flex flex-wrap items-baseline justify-center gap-6">
    <li v-for="{ id, name, ibu, food_pairing } in beers" :key="id">
      <BeerCard :id="id" :name="name" :ibu="ibu" :food_pairing_count="food_pairing.length" />
    </li>
  </ul>

  <div class="mt-12 flex justify-end">
    <Pagination :page="page" :changePage="changePage" />
  </div>
</template>
