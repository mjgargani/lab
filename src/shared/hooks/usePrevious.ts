import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    if (value) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
}

export default usePrevious;
