import { useEffect, useState } from "react";

const useIsXS = () => {
    const [isXS, setIsXS] = useState(window.innerWidth < 576);
  
    useEffect(() => {
      const handleResize = () => {
        setIsXS(window.innerWidth < 576);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return isXS;
  };

export default useIsXS;