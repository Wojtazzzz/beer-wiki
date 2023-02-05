import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { parsePageQuery } from '../../../utils/parsePageQuery';

export type ChangeFilterQueriesArgs = {
  name?: string;
  ibu?: string;
};

export const useSearchParams = () => {
  const router = useRouter();
  const route = useRoute();

  const { page: queryPage, name: queryName, ibu: queryIbu } = route.query;

  const page = ref(Number(queryPage ?? 1));
  const name = ref(queryName?.toString() ?? undefined);
  const ibu = ref(Number(queryIbu ?? undefined));

  const changePage = (newPage: number) => {
    const parsedPage = parsePageQuery(newPage);

    page.value = parsedPage;
    router.push({ query: { page: parsedPage } });
  };

  return {
    page,
    name,
    ibu,
    changePage,
  };
};
