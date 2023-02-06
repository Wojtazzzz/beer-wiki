<script setup lang="ts">
import Container from '../../atoms/Container.vue';
import BeerDetails from '../../molecules/beerDetails/BeerDetails.vue';
import { useGetBeer } from './useGetBeer';

const { beer, isLoading, isError } = useGetBeer();
</script>

<template>
  <h1 class="sr-only">Beer Wiki</h1>

  <Container>
    <FetchError v-if="isError">Something went wrong, please try again later</FetchError>
    <Loader v-else-if="isLoading" />
    <BeerDetails v-else :beer="beer" />
  </Container>
</template>
