<script setup lang="ts">
import BeerDetails from '../../molecules/beerDetails/BeerDetails.vue';
import { useBeer } from './useBeer';

const { beer, isLoading, isError } = useBeer();
</script>

<template>
  <FetchError v-if="isError" />
  <Loader v-else-if="isLoading" />

  <BeerDetails v-else :beer="beer" />
</template>
