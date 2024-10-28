import { useEffect, useRef, useState } from 'react';

export const useObserver = (ref, canLoad, callback) => {
  const observer = useRef(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!canLoad || !ref.current) return;
    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasIntersected) {
          callback();
          setHasIntersected(true); 
        } else if (!entry.isIntersecting) {
          setHasIntersected(false); 
        }
      });
    };

    observer.current = new IntersectionObserver(intersectionCallback);
    observer.current.observe(ref.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref, canLoad, callback, hasIntersected]);
};