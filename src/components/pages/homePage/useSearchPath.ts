import { useSearchParams } from './useSearchParams';

export const useGetQueryParams = () => {
  const { name, ibu, page } = useSearchParams();

  const searchParams = new URLSearchParams();

  searchParams.append('page', String(page));
  searchParams.append('per_page', '25');

  if (Boolean(name.value)) {
    searchParams.append('beer_name', String(name.value));
  }

  if (Boolean(ibu.value)) {
    searchParams.append('ibu', String(ibu.value));
  }

  return searchParams.toString();
};
