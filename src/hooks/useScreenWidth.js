import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setScreenWidth({
        mobile: width <= 768,
        tablet: width >= 768 && width < 1280,
        desktop: width >= 1280,
      });
    };

    const debounceResize = debounce(handleResize, 100);

    handleResize();

    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return screenWidth;
};

const debounce = (fn, delay) => {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
};

export default useScreenWidth;