import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axiosPublic from '../../api/utils/axiosPublic';

function ScrollToTop() {
  const { pathname } = useLocation();

  const render = useRef(false)

  useEffect(()=>{
    const awakeRender = async() => {await axiosPublic.get('/health').catch(()=>{})}
    if(!render) {
      awakeRender();
      render.current = true;
    }
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;