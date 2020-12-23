import React, {useEffect, useRef } from 'react';
 function useSetInterval(callback: Function) {
  const ref = useRef<Function | null>(null);

  useEffect(() => {
    ref.current = callback;
  });

  useEffect(() => {
    const cb = () => {
      ref.current!();
    };
    const timer = setInterval(cb, 1000);
    return () => clearInterval(timer);
  }, []);
}
export default useSetInterval