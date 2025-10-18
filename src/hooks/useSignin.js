
import { useState } from 'react';
import axiosPrivate from '../api/utils/axiosPrivate';

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(null);

  const sign = async ({ email, password, constUser }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axiosPrivate.post('/login', {
        email,
        password,
        constUser
      });
      setSuccess(res?.data?.message);
      localStorage.setItem('userEmail', email);

      return res.data; 
    } catch (err) {
      setError(err.response?.data?.message || 'Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  return { sign, loading, error, success, setError };
};

export default useSignin;