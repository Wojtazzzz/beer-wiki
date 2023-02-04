import { z } from 'zod';

export const beersSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    ibu: z.number().nullable(),
    food_pairing: z.array(z.string()),
  }),
);

export const beerSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    ibv: z.number().optional(),
    ibu: z.number().nullable(),
    food_pairing: z.array(z.string()),
    tagline: z.string(),
    image_url: z.string(),
    contributed_by: z.string(),
    description: z.string(),
  }),
);
