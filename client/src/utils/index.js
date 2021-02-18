import axios from 'axios';

import { BASE_BACKEND_URL } from '../constants/index';

const axiosWrapp = axios.create({
  baseURL: BASE_BACKEND_URL,
  responseType: 'json',
});

export default axiosWrapp;
