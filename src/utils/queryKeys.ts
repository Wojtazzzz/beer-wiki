import { Ref } from 'vue';

export const getBeersQK = (page: Ref<number>) => ['beers', page];
export const getBeerQK = (beerId: number) => ['beer', beerId];
