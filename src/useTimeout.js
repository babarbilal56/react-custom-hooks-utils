import { useEffect } from 'react';

function useTimeout(callback, delay) {
  useEffect(() => {
    const timer = setTimeout(callback, delay);
    return () => clearTimeout(timer);
  }, [callback, delay]);
}

export default useTimeout;