import axiosPublic from '../api/axiosPublic';

export const getRefreshToken = async () => {
  const response = await axiosPublic.get('/auth/refresh', {}, {
    withCredentials: true,
  });
  return response.data.accessToken;
};
