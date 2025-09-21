import axios from 'axios';
import DOMAIN from './Domain';

const axiosPublic = axios.create({
  baseURL: DOMAIN.BackEnd,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosPublic;
