export const parsePageQuery = (newPage: unknown) => {
  const positivePage = Math.max(Number(newPage), 1);

  return Math.min(positivePage, 4);
};
