import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SearchAndDestroyIcon from '@/components/icons/chip/SearchAndDestroyIcon';
import HardPointIcon from '@/components/icons/HardPointIcon';
import KillChipIcon from '@/components/icons/KillChipIcon';
import MyLobbiesRankIcon from '@/components/icons/MyLobbiesRankIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';

export const MULTIPLAYER_DEFAULT_VALUES = {
  searchAndDistro: false,
  hardpoint: false,
  freeForAll: false,
  duo: false,
  freeLobby: false,
  rankOnlyLobby: false,
  myRankLobbies: false,
};

export const BATTLE_ROYAL_DEFAULT_VALUES = {
  solo: false,
  double: false,
  trios: false,
  squad: false,
  killie: false,
  ranked: false,
  tagie: false,
  autoRevive: false,
  freeLobby: false,
  rankOnlyLobby: false,
};

// Placeholder icons for filters that don't have icons yet
// TODO: Replace with actual icons when available
const SoloChipIcon = SquadChipIcon;
const DoubleChipIcon = SquadChipIcon;
const TriosChipIcon = SquadChipIcon;
const RankedChipIcon = KillChipIcon;
const TagieChipIcon = AutoReviveChipIcon;
const FreeLobbyChipIcon = KillChipIcon;
const RankOnlyLobbyChipIcon = MyLobbiesRankIcon;
const FreeForAllChipIcon = HardPointIcon;
const DuoChipIcon = SquadChipIcon;

export const FILTERS_MAP = {
  battle_royale: {
    suggested: [
      { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
      { label: 'اتوریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
      { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
    ],
    all: [
      { label: 'سولو', icon: SoloChipIcon, key: 'solo' },
      { label: 'دابل', icon: DoubleChipIcon, key: 'double' },
      { label: 'تریو', icon: TriosChipIcon, key: 'trios' },
      { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
      { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
      { label: 'جایگاهی', icon: RankedChipIcon, key: 'ranked' },
      { label: 'تگی', icon: TagieChipIcon, key: 'tagie' },
      { label: 'اتو ریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
      { label: 'لابی های رایگان', icon: FreeLobbyChipIcon, key: 'freeLobby' },
      {
        label: 'لابی های با رنک مجاز من',
        icon: RankOnlyLobbyChipIcon,
        key: 'rankOnlyLobby',
      },
    ],
  },
  multiplayer: {
    suggested: [
      {
        label: 'سرچ اند دیستروی',
        icon: SearchAndDestroyIcon,
        key: 'searchAndDistro',
      },
      { label: 'هاردپوینت', icon: HardPointIcon, key: 'hardpoint' },
      { label: 'لابی های رنک من', icon: MyLobbiesRankIcon, key: 'myRankLobbies' },
    ],
    all: [
      { label: 'سرچ اند دیستروی', icon: SearchAndDestroyIcon, key: 'searchAndDistro' },
      { label: 'هاردپوینت', icon: HardPointIcon, key: 'hardpoint' },
      { label: 'فری فور آل', icon: FreeForAllChipIcon, key: 'freeForAll' },
      { label: 'دوئل', icon: DuoChipIcon, key: 'duo' },
      { label: 'لابی های رایگان', icon: FreeLobbyChipIcon, key: 'freeLobby' },
      {
        label: 'لابی های با رنک مجاز من',
        icon: RankOnlyLobbyChipIcon,
        key: 'rankOnlyLobby',
      },
      { label: 'لابی های رنک من', icon: MyLobbiesRankIcon, key: 'myRankLobbies' },
    ],
  },
};
