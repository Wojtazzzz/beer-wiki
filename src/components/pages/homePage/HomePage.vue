<script setup lang="ts">
import EmptyList from '../../atoms/EmptyList.vue';
import { useGetBeers } from './useGetBeers';
import FetchError from '../../atoms/FetchError.vue';
import Loader from '../../atoms/Loader.vue';
import BeersList from '../../molecules/BeersList.vue';
import Header from '../../organisms/Header.vue';
import Container from '../../atoms/Container.vue';
import { useSearchParams } from './useSearchParams';

const { page, name, ibu, changePage } = useSearchParams();
const { beers, isEmpty, isError, isLoading } = useGetBeers({ page, name, ibu });
</script>

<template>
  <Header />

  <Container>
    <Loader v-if="isLoading" />
    <EmptyList v-else-if="isEmpty">There is no beers to display</EmptyList>
    <FetchError v-else-if="isError">Something went wrong, please try again later</FetchError>
    <BeersList v-else :beers="beers" :page="page" :changePage="changePage" />
  </Container>
</template>
