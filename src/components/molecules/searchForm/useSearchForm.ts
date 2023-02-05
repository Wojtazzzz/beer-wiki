import { ref } from 'vue';

export const useSearchForm = () => {
  const currentName = ref('x');
  const currentIbu = ref('x');

  const search = () => {
    //
  };

  return {
    name: currentName,
    ibu: currentIbu,
    search,
  };
};
