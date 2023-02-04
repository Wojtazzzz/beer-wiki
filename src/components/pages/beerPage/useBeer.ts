import { useQuery } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';
import { getBeerQK } from '../../../utils/queryKeys';
import { fetcher } from '../../../utils/fetcher';
import { beerSchema } from '../../../utils/schemas';
import type { Beer } from '../../../utils/types';

type Response = Beer;

const queryFn = async (beerId: number) => {
  return await fetcher<Response>(`/beers/${beerId}`, beerSchema);
};

export const useBeer = () => {
  const route = useRoute();
  const beerId = Number(route.params.id);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: getBeerQK(beerId),
    queryFn: async () => await queryFn(beerId),
    select: (data) => data[0],
  });

  return {
    beer: data,
    isLoading,
    isError,
    isSuccess,
  };
};
