import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to avoid forced reflow
    // This defers the scroll until the next paint, preventing blocking
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // Use 'instant' for immediate scroll without animation
      });
    });
  }, [pathname]);
}
