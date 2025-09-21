
import axiosPrivate from '../utils/axiosPrivate';

export const fetchUsers = async () => {
  const res = await axiosPrivate.get('/api/users');
  return res.data;
};

export const deleteUser = async (_id) => {
  const res = await axiosPrivate.delete('/api/usersControl', {data: {id: _id}});
  return res.data;
};