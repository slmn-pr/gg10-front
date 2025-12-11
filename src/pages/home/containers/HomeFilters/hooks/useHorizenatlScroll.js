import { useEffect } from 'react';

export default function useHorizentalScroll(containerRef) {
  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.style.cursor = 'grabbing';
      el.style.scrollBehavior = 'auto'; // Disable smooth scroll during drag
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeaveOrUp = () => {
      isDown = false;
      el.style.cursor = 'grab';
      el.style.scrollBehavior = 'smooth'; // Re-enable smooth snap on release
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault(); // Prevent text selection, etc.
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollLeft - walk;
    };

    // --- Touch Event Handlers for Mobile ---
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
      // No preventDefault() here, to allow for vertical scroll if needed
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollLeft - walk;
    };

    // Add Mouse Event Listeners
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeaveOrUp);
    el.addEventListener('mouseup', onMouseLeaveOrUp);
    el.addEventListener('mousemove', onMouseMove);

    // Add Touch Event Listeners
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchmove', onTouchMove);

    // Initial style
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
