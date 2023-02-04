<script setup lang="ts">
import EmptyList from '../../atoms/EmptyList.vue';
import { useGetBeers } from './useGetBeers';
import FetchError from '../../atoms/FetchError.vue';
import Loader from '../../atoms/Loader.vue';
import BeersList from '../../molecules/BeersList.vue';

const { beers, currentPage, isEmpty, isError, isLoading, toPage } = useGetBeers();
</script>

<template>
  <Loader v-if="isLoading" />
  <EmptyList v-else-if="isEmpty" />
  <FetchError v-else-if="isError" />
  <BeersList v-else :beers="beers" :current-page="currentPage" :toPage="toPage" />
</template>
