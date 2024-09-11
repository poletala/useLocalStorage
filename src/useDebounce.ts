import { useState, useEffect } from "react";

export const useDebounce = (inputValue: string, delay: number) => {

    const [value, setValue] = useState(inputValue);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setValue(inputValue);
      }, delay);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [inputValue, delay]);
  
    return value;
  };