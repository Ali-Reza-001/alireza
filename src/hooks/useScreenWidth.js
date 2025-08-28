import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [responsive, setResponsive] = useState({
    isMobile: false,
    isTablet: false,
    isPC: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({ width, height });

      setResponsive({
        isMobile: width <= 786,
        isTablet: width > 786 && width <= 1200,
        isPC: width > 1200,
      });
    };

    // Initial run
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return responsive;
};

export default useScreenWidth;