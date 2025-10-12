import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosPrivate from '../api/utils/axiosPrivate';
import Spinner from '../components/assets/Spinner';

const RequireAuth = ({ children, role }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAllowed, setIsAllowed] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axiosPrivate.get('/api/admin');
        console.log(res.data)
        setIsAllowed(true);
      } catch (err) {
        if (err.response?.status === 403) {
          navigate('/sign', { state: { from: location }, replace: true });
        } else {
          console.error('Unexpected error:', err);
        }
      }
    };

    checkAuth();
  }, []);

  if (isAllowed === null) return <Spinner/>;
  return children;
};

export default RequireAuth;