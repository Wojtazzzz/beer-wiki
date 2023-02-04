<script setup lang="ts">
import BeerCard from '../../atoms/BeerCard.vue';
import Pagination from '../../atoms/pagination/Pagination.vue';
import EmptyList from '../../atoms/EmptyList.vue';
import { useBeers } from './useBeers';
import FetchError from '../../atoms/FetchError.vue';
import Loader from '../../atoms/Loader.vue';

const { beers, currentPage, isEmpty, isError, isLoading, toPage } = useBeers();
</script>

<template>
  <section class="container mx-auto my-8">
    <Loader v-if="isLoading" />
    <EmptyList v-else-if="isEmpty" />
    <FetchError v-else-if="isError" />

    <div v-else>
      <ul role="list" class="w-full flex flex-wrap items-baseline justify-center gap-6">
        <li v-for="{ id, name, ibu, food_pairing } in beers" :key="id">
          <BeerCard :id="id" :name="name" :ibu="ibu" :food_pairing_count="food_pairing.length" />
        </li>
      </ul>

      <div class="mt-12 flex justify-end">
        <Pagination @to-page="toPage" :currentPage="currentPage" />
      </div>
    </div>
  </section>
</template>
