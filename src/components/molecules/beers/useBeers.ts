import { ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getBeersQK } from '../../../utils/queryKeys';
import { fetcher } from '../../../utils/fetcher';
import { beersSchema } from '../../../utils/schemas';

const queryFn = async (page: number) => {
  return await fetcher(`/beers?page=${page}&per_page=25`, beersSchema);
};

export const useBeers = () => {
  const currentPage = ref(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: getBeersQK(currentPage),
    queryFn: async () => await queryFn(currentPage.value),
    keepPreviousData: true,
  });

  const toPage = (newPage: number) => {
    currentPage.value = Math.max(newPage, 1);
  };

  const isEmpty = Number(data.value?.length) <= 0;

  return {
    beers: data,
    currentPage,
    isEmpty,
    isLoading,
    isError,
    toPage,
  };
};
