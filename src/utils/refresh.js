import axios from 'axios';
import DOMAIN from '../api/Domain';

export const getRefreshToken = async () => {
  const response = await axios.get('/auth/refresh',{
    baseURL: DOMAIN.BackEnd,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  return response.data.accessToken;
};
