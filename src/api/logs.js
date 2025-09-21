
import axiosPrivate from './utils/axiosPrivate';

export const fetchLogs = async () => {
  const res = await axiosPrivate.get('/api/logs');
  return res.data;
};