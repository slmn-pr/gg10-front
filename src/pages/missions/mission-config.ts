import {
  CardGiftcardOutlined,
  CheckCircleOutline,
  LockOutlined,
  RocketLaunchOutlined,
} from '@mui/icons-material';

export const missionTabs = [
  { value: 'active', label: 'فعال', path: '/missions/active' },
  { value: 'ready', label: 'آماده دریافت جایزه', path: '/missions/ready' },
  { value: 'completed', label: 'تکمیل شده', path: '/missions/completed' },
  { value: 'expired', label: 'منقضی', path: '/missions/expired' },
];

export type TabValue = 'active' | 'ready' | 'completed' | 'expired';

/**
 * UI tab value -> API MissionState value.
 * Only 'ready' differs from the API ('claimable').
 */
export const TAB_TO_API_STATE = {
  active: 'active',
  ready: 'claimable',
  completed: 'completed',
  expired: 'expired',
};

export const missionStatusConfig = {
  active: {
    label: 'در حال انجام',
    color: '#7E9CFF',
    icon: RocketLaunchOutlined,
    action: 'ادامه مأموریت',
  },
  claimable: {
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

export const missionDifficultyLabel = {
  easy: 'ساده',
  medium: 'متوسط',
  hard: 'سخت',
};
