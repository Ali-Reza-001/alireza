// src/hooks/useSignup.js
import { useState } from 'react';
import axios from 'axios';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async ({ username, email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post('https://api.ali-reza.dev/register', {
        username,
        email,
        password
      });

      return res.data; // You can redirect or show success message here
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;