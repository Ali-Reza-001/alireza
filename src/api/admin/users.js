
import axiosPrivate from '../utils/axiosPrivate';

export const getUser = async (id) => {
  console.log(id)
  const res = await axiosPrivate.get(`/api/usersControl/${id}`);
  console.log(res.data)
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axiosPrivate.get('/api/usersControl');
  return res.data;
};

export const deleteUser = async (_id) => {
  const res = await axiosPrivate.delete('/api/usersControl', {data: {id: _id}});
  return res.data;
};