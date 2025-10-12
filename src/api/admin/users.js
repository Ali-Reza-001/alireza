
import axiosPrivate from '../utils/axiosPrivate';

export const getUser = async (id) => {
  const res = await axiosPrivate.get(`/api/usersControl/${id}`);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axiosPrivate.get('/api/usersControl');
  return res.data;
};

export const updateUser = async ({id, updatedUser}) => {
  const res = await axiosPrivate.put(`/api/usersControl/${id}`, updatedUser);
  return res.data;
};

export const deleteUser = async (_id) => {
  const res = await axiosPrivate.delete('/api/usersControl', {data: {id: _id}});
  return res.data;
};