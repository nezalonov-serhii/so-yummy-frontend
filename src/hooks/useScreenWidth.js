import { useState, useEffect } from "react";

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

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return screenWidth;
};

export default useScreenWidth;
