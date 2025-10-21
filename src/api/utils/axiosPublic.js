import axios from 'axios';
import DOMAIN from './Domain';

const axiosPublic = axios.create({
  baseURL: DOMAIN.BackEnd,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPublic.interceptors.request.use((config) => {
  const userLogId = sessionStorage.getItem('userLogId')
  if (userLogId) {
    config.headers.userLogId = userLogId;
  }
  return config;
})

export default axiosPublic;
