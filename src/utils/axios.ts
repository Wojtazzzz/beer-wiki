import Axios from 'axios';

const BACKEND_URL = 'https://api.punkapi.com/v2';

export const axios = Axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});
