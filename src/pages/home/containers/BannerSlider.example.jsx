/**
 * مثال استفاده از کامپوننت HeroSlider
 * 
 * این فایل نمونه‌ای از نحوه استفاده از کامپوننت HeroSlider است.
 */

import HeroSlider from './BannerSlider';

// مثال 1: استفاده با slides پیش‌فرض
export function Example1() {
  return <HeroSlider />;
}

// مثال 2: استفاده با slides سفارشی
export function Example2() {
  const customSlides = [
    {
      id: 1,
      title: 'به GG10 خوش آمدید',
      highlight: 'GG10',
      subtitle: 'بهترین تجربه بازی آنلاین را با ما تجربه کنید',
      image: '/images/lobby/bg-hero.png', // مسیر تصویر در public folder
    },
    {
      id: 2,
      title: 'مسابقات هیجان‌انگیز',
      highlight: 'مسابقات',
      subtitle: 'در مسابقات مختلف شرکت کنید و برنده جوایز شوید',
      image: '/images/lobby/bg-hero-2.png',
    },
    {
      id: 3,
      title: 'جامعه بزرگ بازیکنان',
      highlight: 'جامعه',
      subtitle: 'به جامعه هزاران بازیکن بپیوندید',
      image: '/images/lobby/bg-hero-3.png',
    },
  ];

  return <HeroSlider slides={customSlides} />;
}

// مثال 3: تنظیم autoplay delay و غیرفعال کردن loop
export function Example3() {
  return (
    <HeroSlider
      autoplayDelay={5000} // 5 ثانیه
      loop={false}
    />
  );
}

// مثال 4: استفاده بدون highlight
export function Example4() {
  const slidesWithoutHighlight = [
    {
      id: 1,
      title: 'خوش آمدید',
      subtitle: 'بهترین تجربه بازی آنلاین',
      image: '/images/lobby/bg-hero.png',
    },
  ];

  return <HeroSlider slides={slidesWithoutHighlight} />;
}

/**
 * نکات مهم:
 * 
 * 1. مسیر تصاویر:
 *    - تصاویر باید در پوشه public قرار بگیرند
 *    - مثال: public/images/lobby/bg-hero.png
 *    - در کد از '/images/lobby/bg-hero.png' استفاده کنید
 * 
 * 2. فرمت Slide:
 *    {
 *      id: number,           // شناسه یکتا (الزامی)
 *      title: string,        // عنوان اصلی (الزامی)
 *      highlight?: string,   // کلمه برای highlight (اختیاری)
 *      subtitle: string,     // زیرنویس (الزامی)
 *      image: string,        // مسیر تصویر (الزامی)
 *    }
 * 
 * 3. ویژگی‌های کامپوننت:
 *    - Autoplay: فعال به صورت پیش‌فرض (3 ثانیه)
 *    - Loop: فعال به صورت پیش‌فرض
 *    - RTL: به صورت خودکار از useRTL hook استفاده می‌کند
 *    - Responsive: ارتفاع به صورت خودکار برای موبایل، تبلت و دسکتاپ تنظیم می‌شود
 *    - Hover Animation: تصویر با hover بزرگ می‌شود
 * 
 * 4. رنگ‌ها:
 *    - Active pagination dot: از theme.palette.primary.main استفاده می‌کند
 *    - Inactive pagination dots: #666
 *    - Text: از theme.palette.text.primary استفاده می‌کند
 *    - Highlight: از theme.palette.primary.main استفاده می‌کند
 */



