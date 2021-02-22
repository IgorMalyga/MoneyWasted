import axios from 'axios';
import Cookies from 'js-cookie';

import { BASE_BACKEND_URL } from '../constants/index';

export const setTokenInCookies = (token) => {
  Cookies.set('token', token);
};

export const getTokenFromCookies = () => {
  const token = Cookies.get('token');
  return token;
};

export const axiosWrapp = axios.create({
  baseURL: BASE_BACKEND_URL,
  responseType: 'json',
});
