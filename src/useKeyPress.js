
import { useState, useEffect } from 'react';


function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === targetKey) setKeyPressed(true);
      };
  
      const handleKeyUp = (e) => {
        if (e.key === targetKey) setKeyPressed(false);
      };
  
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, [targetKey]);
  
    return keyPressed;
  }
  export default useKeyPress;
