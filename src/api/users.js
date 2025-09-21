
import axiosPrivate from './utils/axiosPrivate';

export const fetchUsers = async () => {
  const res = await axiosPrivate.get('/api/users');
  return res.data;
};