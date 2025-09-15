import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://ali-reza.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosPublic;
