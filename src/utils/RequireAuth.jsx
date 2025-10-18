import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosPrivate from '../api/utils/axiosPrivate';
import Spinner from '../components/assets/Spinner';

const RequireAuth = ({ children }) => {
  const [error, setError] = useState(null); 
  const [isAllowed, setIsAllowed] = useState(false); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosPrivate.get('/api/admin');
        console.log(res.data)
        setIsAllowed(true);
      } catch (err) {
        setError(err)
      } 
    };

    checkAuth();
  }, []);

  if (!isAllowed) return <Spinner/>;
  if (error) return <p className='text-xl p-8 text-red-500'>{error}</p>;
  return children;
};

export default RequireAuth;