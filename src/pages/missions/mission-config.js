import {
  CardGiftcardOutlined,
  CheckCircleOutline,
  LockOutlined,
  RocketLaunchOutlined,
} from '@mui/icons-material';

export const missionTabs = [
  { value: 'active', label: 'فعال', path: '/missions/active' },
  { value: 'ready', label: 'دریافت جایزه', path: '/missions/ready' },
  { value: 'completed', label: 'دریافت شده', path: '/missions/completed' },
  { value: 'expired', label: 'منقضی شده', path: '/missions/expired' },
];

export const missionStatusConfig = {
  active: {
    label: 'در حال انجام',
    color: '#7E9CFF',
    icon: RocketLaunchOutlined,
    action: 'ادامه مأموریت',
  },
  ready: {
    label: 'آماده دریافت',
    color: '#FFC225',
    icon: CardGiftcardOutlined,
    action: 'دریافت جایزه',
  },
  completed: {
    label: 'دریافت شده',
    color: '#119859',
    icon: CheckCircleOutline,
    action: 'دریافت شده',
  },
  expired: {
    label: 'منقضی شده',
    color: '#8A8A8A',
    icon: LockOutlined,
    action: 'منقضی شده',
  },
};

export const missions = [
  {
    id: 1,
    title: 'شرکت در ۳ لابی رتبه‌بندی',
    description: 'در لابی‌های رتبه‌بندی بازی کن و امتیاز فصلت را بالا ببر.',
    progress: 66,
    current: '۲ از ۳',
    reward: '۱۵۰,۰۰۰ تومان',
    time: '۲ روز باقی مانده',
    status: 'active',
  },
  {
    id: 2,
    title: 'برد در یک لابی مولتی پلیر',
    description: 'یک مسابقه مولتی پلیر را با جایگاه برنده تمام کن.',
    progress: 100,
    current: '۱ از ۱',
    reward: '۵۰ امتیاز رنک',
    time: 'آماده دریافت',
    status: 'ready',
  },
  {
    id: 3,
    title: 'دعوت از یک دوست',
    description: 'لینک دعوتت را برای یک دوست بفرست و بعد از ثبت‌نام جایزه بگیر.',
    progress: 25,
    current: '۰ از ۱',
    reward: '۱۰۰,۰۰۰ تومان',
    time: '۵ روز باقی مانده',
    status: 'active',
  },
  {
    id: 4,
    title: 'تکمیل پروفایل بازی',
    description: 'نام کاربری بازی و اطلاعات حساب را کامل کن.',
    progress: 100,
    current: 'کامل شده',
    reward: '۳۰ امتیاز رنک',
    time: 'دریافت شده',
    status: 'completed',
  },
  {
    id: 5,
    title: 'برد در ۵ مسابقه بتل رویال',
    description: 'این مأموریت فصل قبل منقضی شده است.',
    progress: 40,
    current: '۲ از ۵',
    reward: '۳۰۰,۰۰۰ تومان',
    time: 'منقضی شده',
    status: 'expired',
  },
];
