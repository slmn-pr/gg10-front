// hooks/useHorizentalScroll.js

import { useEffect } from 'react';

export default function useHorizentalScroll(containerRef) {
  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    // Detect the layout direction from the component's computed style
    const isRtl = window.getComputedStyle(el).direction === 'rtl';

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.style.cursor = 'grabbing';
      el.style.scrollBehavior = 'auto';
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeaveOrUp = () => {
      isDown = false;
      el.style.cursor = 'grab';
      el.style.scrollBehavior = 'smooth';
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;

      // If RTL, we must add the walk value; otherwise, subtract it.
      el.scrollLeft = isRtl ? scrollLeft + walk : scrollLeft - walk;
    };

    // --- Touch Event Handlers ---
    const onTouchStart = (e) => {
      isDown = true;
      el.style.scrollBehavior = 'auto';
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onTouchEnd = () => {
      isDown = false;
      el.style.scrollBehavior = 'smooth';
    };

    const onTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = x - startX;

      // Apply the same RTL logic for touch events
      el.scrollLeft = isRtl ? scrollLeft + walk : scrollLeft - walk;
    };

    // Add event listeners
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeaveOrUp);
    el.addEventListener('mouseup', onMouseLeaveOrUp);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchmove', onTouchMove);

    el.style.scrollBehavior = 'smooth';

    // Cleanup function
    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeaveOrUp);
      el.removeEventListener('mouseup', onMouseLeaveOrUp);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [containerRef]); // Rerun if the ref changes
}
