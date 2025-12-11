import { useEffect } from "react";

export default function useHorizentalScroll(containerRef) {
  // ----------------------------------------
  // DRAG SCROLL + SNAP
  // ----------------------------------------
  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      el.style.cursor = 'grabbing';

      // در لحظه‌ی Drag نباید smooth فعال باشد
      el.style.scrollBehavior = 'auto';

      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = 'grab';

      // فعال شدن اسنپ نرم بعد از رها کردن
      el.style.scrollBehavior = 'smooth';
    };

    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = 'grab';

      // بعد از رها کردن اسکرول اسنپ آرام انجام شود
      el.style.scrollBehavior = 'smooth';
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);

    // وقتی کاربر با انگشت اسکرول می‌کند هم نرم باشد
    el.style.scrollBehavior = 'smooth';

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
}
