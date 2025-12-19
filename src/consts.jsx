import BronzeBigIcon from './components/icons/rank/BronzeBigIcon';
import GoldBigIcon from './components/icons/rank/GoldBigIcon';
import LegendRankIcon from './components/icons/rank/LegendRankIcon';
import SilverIcon from './components/icons/rank/SilverIcon';

export const RANK_MAP = {
  legend: {
    color: '#66D4E5',
    title: 'لجند',
    icon: <LegendRankIcon />,
  },
  gold: {
    color: '#9A7D26',
    title: 'مستر',
    icon: <GoldBigIcon />,
  },
  silver: {
    color: '#C0C0C0',
    title: 'سیلور',
    icon: <SilverIcon />,
  },
  bronze: {
    color: '#A97142',
    title: 'برونز',
    icon: <BronzeBigIcon />,
  },
};

export const RANK_CODE_MAP = {
  1: RANK_MAP.legend,
  2: RANK_MAP.gold,
  3: RANK_MAP.silver,
  4: RANK_MAP.bronze,
};
