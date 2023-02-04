import type { Schema } from 'zod';
import { axios } from './axios';

export const fetcher = async (path: string, schema: Schema) => {
  const response = await axios.get(path).then((response) => response.data);

  return schema.parse(response);
};
