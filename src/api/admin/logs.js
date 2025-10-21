
import axiosPrivate from '../utils/axiosPrivate';

export const getLog = async (id) => {
  const res = await axiosPrivate.get(`/api/logsControl/${id}`);
  return res.data;
};

export const getAllLogs = async () => {
  const res = await axiosPrivate.get('/api/logsControl');
  return res.data;
};

export const updateLog = async ({id, updatedLog}) => {
  const res = await axiosPrivate.put(`/api/logsControl/${id}`, updatedLog);
  return res.data;
};

export const deleteLog = async (_id) => {
  const res = await axiosPrivate.delete('/api/logsControl', {data: {id: _id}});
  return res.data;
};

export const deleteAllLogs = async () => {
  const res = await axiosPrivate.delete('/api/logsControl');
  return res.data;
};