<script setup lang="ts">
import Container from '../../atoms/Container.vue';
import BeerDetails from '../../molecules/beerDetails/BeerDetails.vue';
import { useBeer } from './useBeer';

const { beer, isLoading, isError } = useBeer();
</script>

<template>
  <h1 class="sr-only">Beer Wiki</h1>

  <Container>
    <FetchError v-if="isError" />
    <Loader v-else-if="isLoading" />
    <BeerDetails v-else :beer="beer" />
  </Container>
</template>
