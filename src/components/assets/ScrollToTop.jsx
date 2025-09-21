import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosPublic from '../../api/utils/axiosPublic';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(()=>{
    const awakeRender = async() => {await axiosPublic.get('/health').catch(()=>{})}
    awakeRender();
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;