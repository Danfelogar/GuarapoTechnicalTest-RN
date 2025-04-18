import {useState, useEffect} from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return debouncedValue;
};
