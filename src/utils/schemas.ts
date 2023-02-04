import { z } from 'zod';

export const beerSchema = z.object({
  id: z.number(),
  name: z.string(),
  ibu: z.number().nullable(),
  food_pairing: z.array(z.string()),
});

export const beersSchema = z.array(beerSchema);
