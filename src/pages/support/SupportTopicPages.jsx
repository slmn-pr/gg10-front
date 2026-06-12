import SupportArticlePage from './SupportArticlePage.jsx';
import AccountIcon from '@/assets/icons/Bottom navbar icons/account.svg';
import LockIcon from '@/assets/icons/General icons/Lock.svg';
import NotificationIcon from '@/assets/icons/General icons/notifications.svg';

export const SupportAccountGuidePage = () => (
  <SupportArticlePage
    title="راهنمای حساب کاربری"
    iconSrc={AccountIcon}
    intro="در این بخش می‌توانید اطلاعات پایه حساب را مدیریت کنید و مطمئن شوید پروفایل شما برای شرکت در لابی‌ها کامل است."
    bullets={[
      'از مسیر پروفایل، نام کاربری و تصویر آواتار را ویرایش کنید.',
      'شماره تلفن ثبت‌شده برای اعلان‌های امنیتی و بازیابی دسترسی استفاده می‌شود.',
      'پس از هر تغییر، ذخیره اطلاعات را بررسی کنید تا به‌روزرسانی اعمال شده باشد.',
      'در صورت مشاهده مغایرت اطلاعات، یک تیکت پشتیبانی ثبت کنید.',
    ]}
  />
);

export const SupportLoginIssuesPage = () => (
  <SupportArticlePage
    title="مشکل ورود یا رمز عبور"
    iconSrc={LockIcon}
    intro="اگر ورود شما ناموفق است، مراحل زیر را انجام دهید تا دسترسی حساب سریع‌تر بازیابی شود."
    bullets={[
      'شماره موبایل را با فرمت صحیح و پیش‌شماره 09 وارد کنید.',
      'در زمان ورود با کد یکبارمصرف، پیامک را دوباره درخواست دهید و شبکه را بررسی کنید.',
      'در صورت استفاده از رمز عبور، از درست بودن زبان کیبورد مطمئن شوید.',
      'اگر همچنان ورود انجام نشد، از صفحه تیکت مشکل را همراه با زمان خطا ارسال کنید.',
    ]}
  />
);

export const SupportSecurityHelpPage = () => (
  <SupportArticlePage
    title="امنیت حساب"
    iconSrc={NotificationIcon}
    intro="برای محافظت از حساب، هر رفتار مشکوک را سریع گزارش دهید تا تیم پشتیبانی بررسی امنیتی انجام دهد."
    bullets={[
      'اگر ورود ناشناس مشاهده کردید، بلافاصله رمز عبور را تغییر دهید.',
      'کد ورود و اطلاعات حساب را در اختیار هیچ شخصی قرار ندهید.',
      'در دستگاه‌های عمومی همیشه از حساب خارج شوید.',
      'برای گزارش ورود مشکوک، با جزئیات دستگاه و زمان رخداد تیکت ارسال کنید.',
    ]}
  />
);
