import type { Schema } from 'zod';
import { axios } from './axios';

export const fetcher = async <T>(path: string, schema: Schema): Promise<T> => {
  const response = await axios.get(path).then((response) => response.data);

  return schema.parse(response);
};
