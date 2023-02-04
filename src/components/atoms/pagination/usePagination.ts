import { ref, defineEmits } from 'vue';

export const usePagination = () => {
  const emit = defineEmits(['toPage']);
  const currentPage = ref(1);

  const changePage = (page: number) => {
    emit('toPage', page);
  };

  return {
    currentPage,
    changePage,
  };
};
