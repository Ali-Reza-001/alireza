// src/hooks/useSignup.js
import { useState } from 'react';
import axiosPublic from '../api/axiosPublic';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ username, email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axiosPublic.post('/register', {
        username,
        email,
        password
      });

      return res.data; 
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;