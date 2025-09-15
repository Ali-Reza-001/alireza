import axiosPublic from '../api/axiosPublic';

export const getRefreshToken = async () => {
  const response = await axiosPublic.post('/auth/refresh', {}, {
    withCredentials: true,
  });
  return response.data.accessToken;
};
