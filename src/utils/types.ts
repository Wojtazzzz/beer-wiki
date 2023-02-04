import { z } from 'zod';
import { beersSchema } from './schemas';
import { beerSchema } from './schemas';

export type BeerFromList = z.infer<typeof beersSchema>[number];
export type Beer = z.infer<typeof beerSchema>;
