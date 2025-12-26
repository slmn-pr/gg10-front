import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useMotionValue } from 'framer-motion';

/**
 * Custom hook for smooth horizontal scrolling with drag support, mouse wheel, and touch handling
 * Supports RTL layouts and provides momentum scrolling for desktop drag interactions
 */
export default function useSmoothHorizentalScroll() {
  const containerRef = useRef(null);
  const startScrollRef = useRef(0);
  const startXRef = useRef(0);
  const x = useMotionValue(0);
  const isDraggingRef = useRef(false);

  // Detect if device supports touch (disable drag on touch devices for native scrolling)
  const isTouchDevice = useMemo(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // Helper to get normalized scroll position
  const getScrollPosition = useCallback(() => {
    if (!containerRef.current) return 0;
    const el = containerRef.current;
    const isRtl = window.getComputedStyle(el).direction === 'rtl';
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);

    if (isRtl) {
      // In RTL, scrollLeft can be negative
      return el.scrollLeft <= 0 ? Math.abs(el.scrollLeft) : maxScroll - el.scrollLeft;
    }
    return el.scrollLeft || 0;
  }, []);

  // Helper to set scroll position
  const setScrollPosition = useCallback((position) => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const isRtl = window.getComputedStyle(el).direction === 'rtl';
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const boundedPos = Math.max(0, Math.min(maxScroll, position));

    if (isRtl) {
      el.scrollLeft = -boundedPos;
    } else {
      el.scrollLeft = boundedPos;
    }
  }, []);

  // Reset transform to prevent visual movement during drag
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    let rafId;
    const resetTransform = () => {
      if (containerRef.current && isDraggingRef.current) {
        // Reset any transform applied by Framer Motion
        const transform = containerRef.current.style.transform;
        if (transform && transform !== 'translateX(0px) translateZ(0px)') {
          containerRef.current.style.transform = 'translateX(0px) translateZ(0px)';
        }
      }
      if (isDraggingRef.current) {
        rafId = requestAnimationFrame(resetTransform);
      }
    };

    // Only start the loop when dragging starts
    const checkDrag = () => {
      if (isDraggingRef.current) {
        rafId = requestAnimationFrame(resetTransform);
      }
    };

    // Check periodically if dragging started
    const intervalId = setInterval(checkDrag, 16);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      clearInterval(intervalId);
    };
  }, []);

  // Add mouse wheel support for horizontal scrolling on desktop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      // Only handle horizontal wheel scrolling (Shift + wheel or horizontal trackpad)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        const isRtl = window.getComputedStyle(container).direction === 'rtl';
        const scrollDelta = isRtl ? -e.deltaX : e.deltaX;

        // Use smooth scrolling
        container.scrollBy({
          left: scrollDelta,
          behavior: 'smooth',
        });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Drag handlers for Framer Motion
  const dragHandlers = useMemo(
    () => ({
      onDragStart: (event, info) => {
        // Only handle mouse drag, let touch devices use native scroll
        if (event.type === 'touchstart' || event.type === 'touchmove') {
          return;
        }
        if (containerRef.current) {
          const el = containerRef.current;
          isDraggingRef.current = true;
          startScrollRef.current = getScrollPosition();
          startXRef.current = info.point.x;
          el.style.scrollBehavior = 'auto';
          // Reset transform to prevent visual movement
          x.set(0);
        }
      },
      onDrag: (event, info) => {
        // Skip touch events - let native scrolling handle them
        if (event.type === 'touchstart' || event.type === 'touchmove') {
          return;
        }
        if (containerRef.current) {
          // Reset transform immediately to prevent visual movement
          x.set(0);

          const deltaX = info.point.x - startXRef.current;
          const isRtl =
            window.getComputedStyle(containerRef.current).direction === 'rtl';
          // Invert direction for RTL
          const scrollDelta = isRtl ? deltaX : -deltaX;
          const newScroll = startScrollRef.current + scrollDelta;
          setScrollPosition(newScroll);
        }
      },
      onDragEnd: (event, info) => {
        // Skip touch events
        if (event.type === 'touchend' || event.type === 'touchcancel') {
          return;
        }
        if (containerRef.current) {
          isDraggingRef.current = false;
          // Ensure transform is reset
          x.set(0);
          containerRef.current.style.scrollBehavior = 'smooth';

          // Apply momentum scrolling based on velocity (only for mouse drag)
          const velocity = info.velocity.x;
          if (Math.abs(velocity) > 100) {
            const currentScroll = getScrollPosition();
            const isRtl =
              window.getComputedStyle(containerRef.current).direction === 'rtl';
            // Convert velocity to scroll delta (invert for RTL)
            const velocityDelta = isRtl ? velocity * 0.3 : -velocity * 0.3;
            const targetScroll = currentScroll + velocityDelta;

            // Animate to target scroll position
            const startPos = currentScroll;
            const endPos = targetScroll;
            const duration = Math.min(0.5, Math.abs(velocityDelta) / 1000);

            let startTime = null;
            const animateScroll = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
              const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOut cubic
              const currentPos = startPos + (endPos - startPos) * easeProgress;
              setScrollPosition(currentPos);

              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              } else {
                // Restore smooth scroll behavior after animation
                if (containerRef.current) {
                  containerRef.current.style.scrollBehavior = 'smooth';
                }
              }
            };
            requestAnimationFrame(animateScroll);
          } else {
            // Restore smooth scroll behavior immediately if no momentum
            containerRef.current.style.scrollBehavior = 'smooth';
          }
        }
      },
    }),
    [getScrollPosition, setScrollPosition, x],
  );

  // Motion props for Framer Motion
  const motionProps = useMemo(
    () => ({
      drag: isTouchDevice ? false : 'x',
      dragElastic: 0,
      dragMomentum: false,
      dragPropagation: false,
      dragConstraints: false,
      style: { x },
      whileDrag: isTouchDevice ? {} : { cursor: 'grabbing' },
      ...dragHandlers,
    }),
    [isTouchDevice, x, dragHandlers],
  );

  // Scroll container styles
  const scrollStyles = useMemo(
    () => ({
      direction: 'rtl',
      pb: 1,
      overflowX: 'auto',
      overflowY: 'hidden',
      whiteSpace: 'nowrap',
      cursor: isTouchDevice ? 'default' : 'grab',
      userSelect: 'none',
      scrollSnapType: 'x mandatory',
      '& > *': {
        scrollSnapAlign: 'center',
      },
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
      // Enhanced smooth scrolling for mobile and desktop
      WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
      scrollBehavior: 'smooth', // CSS smooth scrolling
      // Enable momentum scrolling on iOS
      '-webkit-overflow-scrolling': 'touch',
      // Prevent scroll chaining
      overscrollBehaviorX: 'contain',
      // Smooth scrolling for Firefox
      scrollPadding: 0,
    }),
    [isTouchDevice],
  );

  return {
    containerRef,
    motionProps,
    scrollStyles,
    isTouchDevice,
  };
}

