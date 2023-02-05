import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export const useSearchForm = () => {
  const route = useRoute();
  const router = useRouter();

  const currentName = ref(String(route.query.name ?? ''));
  const currentIbu = ref(route.query.ibu ? Number(route.query.ibu) : undefined);

  const search = () => {
    const query = {
      name: currentName.value,
      ibu: currentIbu.value,
    };

    // delete empty queries
    Object.keys(query).forEach((key) =>
      !Boolean(query[key as keyof typeof query]) || query[key as keyof typeof query] === 'NaN'
        ? delete query[key as keyof typeof query]
        : {},
    );

    router.push({
      query: {
        ...query,
        page: 1,
      },
    });
  };

  return {
    name: currentName,
    ibu: currentIbu,
    search,
  };
};
