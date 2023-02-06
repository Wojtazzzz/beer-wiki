import { useQuery } from '@tanstack/vue-query';
import { getBeersQK } from '../../../utils/queryKeys';
import { fetcher } from '../../../utils/fetcher';
import { beersSchema } from '../../../utils/schemas';
import type { BeerFromList } from '../../../utils/types';
import { ref, Ref } from 'vue';

type Response = BeerFromList[];
export type QueryFnArgs = {
  page: Ref<number>;
  name: Ref<string | undefined>;
  ibu: Ref<number>;
};

const queryFn = async (args: QueryFnArgs) => {
  const path = getSearchPath(args);
  return await fetcher<Response>(`/beers?${path}`, beersSchema);
};

export const useGetBeers = (params: QueryFnArgs) => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: getBeersQK(params.page),
    queryFn: async () => await queryFn(params),
    keepPreviousData: true,
  });

  return {
    beers: data,
    isLoading,
    isError,
  };
};

const getSearchPath = ({ page, name, ibu }: QueryFnArgs) => {
  const searchParams = new URLSearchParams();

  searchParams.append('page', String(page.value));
  searchParams.append('per_page', '25');

  if (Boolean(name?.value)) {
    searchParams.append('beer_name', String(name.value));
  }

  if (Boolean(ibu?.value)) {
    searchParams.append('ibu', String(ibu.value));
  }

  return searchParams.toString();
};
