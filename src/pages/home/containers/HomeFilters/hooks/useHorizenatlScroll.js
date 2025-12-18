import { useEffect, useRef } from 'react';

/**
 * Enhanced horizontal scroll hook with RTL support, mouse drag, touch, and smooth scrolling
 */
export default function useHorizentalScroll(containerRef) {
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    // Detect RTL from computed style
    const isRtl = window.getComputedStyle(el).direction === 'rtl';

    // Helper to get normalized scroll position (always 0 to maxScroll, regardless of RTL)
    const getNormalizedScroll = () => {
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);

      if (isRtl) {
        // In RTL, scrollLeft can be negative (Chrome/Safari) or positive (Firefox)
        // Normalize to 0-based where 0 = leftmost, maxScroll = rightmost
        if (el.scrollLeft <= 0) {
          // Negative or zero: convert to positive position
          return Math.abs(el.scrollLeft);
        } else {
          // Positive: might be Firefox behavior, calculate from right
          return maxScroll - el.scrollLeft;
        }
      }
      return el.scrollLeft || 0;
    };

    // Helper to set scroll position from normalized value
    const setNormalizedScroll = (normalizedPos) => {
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const boundedPos = Math.max(0, Math.min(maxScroll, normalizedPos));

      if (isRtl) {
        // In RTL, set as negative value (Chrome/Safari standard)
        el.scrollLeft = -boundedPos;
      } else {
        el.scrollLeft = boundedPos;
      }
    };

    // Smooth momentum scrolling
    const smoothScroll = () => {
      if (!isDraggingRef.current && Math.abs(velocityRef.current) > 0.5) {
        const currentScroll = getNormalizedScroll();
        // For RTL, invert velocity direction
        const newScroll = isRtl
          ? currentScroll + velocityRef.current
          : currentScroll - velocityRef.current;

        setNormalizedScroll(newScroll);

        // Apply friction
        velocityRef.current *= 0.95;

        // Continue animation if velocity is significant
        if (Math.abs(velocityRef.current) > 0.5) {
          animationFrameRef.current = requestAnimationFrame(smoothScroll);
        } else {
          velocityRef.current = 0;
        }
      }
    };

    // Mouse event handlers
    const handleMouseDown = (e) => {
      // Only handle left mouse button
      if (e.button !== 0) return;

      isDraggingRef.current = true;
      el.style.cursor = 'grabbing';
      el.style.scrollBehavior = 'auto';
      el.style.userSelect = 'none';

      const rect = el.getBoundingClientRect();
      startXRef.current = e.clientX - rect.left;
      scrollLeftRef.current = getNormalizedScroll();
      velocityRef.current = 0;
      lastXRef.current = e.clientX;
      lastTimeRef.current = Date.now();

      // Cancel any ongoing smooth scroll
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;

      e.preventDefault();

      const rect = el.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const walk = currentX - startXRef.current;

      // Calculate velocity for momentum scrolling
      const now = Date.now();
      const deltaTime = now - lastTimeRef.current;
      if (deltaTime > 0) {
        const deltaX = e.clientX - lastXRef.current;
        velocityRef.current = (deltaX / deltaTime) * 16; // Normalize to 60fps
      }
      lastXRef.current = e.clientX;
      lastTimeRef.current = now;

      // Apply scroll - for RTL, we need to invert the walk direction
      const newScroll = isRtl
        ? scrollLeftRef.current + walk
        : scrollLeftRef.current - walk;
      setNormalizedScroll(newScroll);
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      el.style.cursor = 'grab';
      el.style.userSelect = '';

      // Start momentum scrolling if there's velocity
      if (Math.abs(velocityRef.current) > 0.5) {
        smoothScroll();
      } else {
        el.style.scrollBehavior = 'smooth';
      }
    };

    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        handleMouseUp();
      }
    };

    // Touch event handlers
    let touchStartX = 0;
    let touchScrollLeft = 0;
    let touchVelocity = 0;
    let lastTouchX = 0;
    let lastTouchTime = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length !== 1) return;

      isDraggingRef.current = true;
      el.style.scrollBehavior = 'auto';

      const rect = el.getBoundingClientRect();
      touchStartX = e.touches[0].clientX - rect.left;
      touchScrollLeft = getNormalizedScroll();
      touchVelocity = 0;
      lastTouchX = e.touches[0].clientX;
      lastTouchTime = Date.now();

      // Cancel any ongoing smooth scroll
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;

      e.preventDefault();

      const rect = el.getBoundingClientRect();
      const currentX = e.touches[0].clientX - rect.left;
      const walk = currentX - touchStartX;

      // Calculate velocity for momentum scrolling
      const now = Date.now();
      const deltaTime = now - lastTouchTime;
      if (deltaTime > 0) {
        const deltaX = e.touches[0].clientX - lastTouchX;
        touchVelocity = (deltaX / deltaTime) * 16; // Normalize to 60fps
      }
      lastTouchX = e.touches[0].clientX;
      lastTouchTime = now;

      // Apply scroll - for RTL, we need to invert the walk direction
      const newScroll = isRtl ? touchScrollLeft + walk : touchScrollLeft - walk;
      setNormalizedScroll(newScroll);
    };

    const handleTouchEnd = () => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      velocityRef.current = touchVelocity;

      // Start momentum scrolling if there's velocity
      if (Math.abs(velocityRef.current) > 0.5) {
        smoothScroll();
      } else {
        el.style.scrollBehavior = 'smooth';
      }
    };

    // Wheel event handler for smooth horizontal scrolling
    const handleWheel = (e) => {
      // Only handle horizontal scrolling
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;

      e.preventDefault();

      // Smooth horizontal scroll
      const scrollAmount = e.deltaX;
      const currentScroll = getNormalizedScroll();

      // In RTL, invert the scroll direction
      const newScroll = isRtl
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount;

      setNormalizedScroll(newScroll);
    };

    // Add event listeners
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('touchstart', handleTouchStart, { passive: false });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd);
    el.addEventListener('touchcancel', handleTouchEnd);
    el.addEventListener('wheel', handleWheel, { passive: false });

    // Set initial styles
    el.style.scrollBehavior = 'smooth';
    el.style.cursor = 'grab';

    // Cleanup
    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchcancel', handleTouchEnd);
      el.removeEventListener('wheel', handleWheel);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Reset styles
      el.style.cursor = '';
      el.style.userSelect = '';
      el.style.scrollBehavior = '';
    };
  }, [containerRef]);
}
