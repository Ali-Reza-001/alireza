// src/hooks/useSignup.js
import { useState } from 'react';
import axiosPrivate from '../api/axiosPrivate';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(null);

  const signup = async ({ username, email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axiosPrivate.post('/register', {
        username,
        email,
        password
      });
      setSuccess(res?.data?.message);

      return res.data; 
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
};

export default useSignup;