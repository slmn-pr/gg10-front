export const TEAMS_MOCK = [
  {
    name: 'Team 01',
    members: [
      {
        name: 'Pouya',
        avatar: 'https://via.placeholder.com/150',
        rank: 1,
        isLeader: true,
      },
      {
        name: 'Ahmad',
        avatar: 'https://via.placeholder.com/150',
        rank: 1,
        isLeader: false,
      },
    ],
  },
];

export const TEAM_INVITES_STORAGE_KEY = 'gg10_team_invites';

export const TEAM_INVITES_MOCK = [
  {
    id: 'inv-1',
    team: 'تیم دوم',
    from: 'Pouya',
    avatar: '/images/player_card_sample.png',
    at: 'امروز 12:30',
    members: [
      { name: 'Pouya', avatar: '/images/player_card_sample.png', rank: 1, isLeader: true },
      { name: 'شما', avatar: '/images/player_card_sample.png', rank: 1, isLeader: false },
    ],
  },
  {
    id: 'inv-2',
    team: 'تیم سوم',
    from: 'Ahmad',
    avatar: '/images/player_card_sample.png',
    at: 'دیروز 18:45',
    members: [
      { name: 'Ahmad', avatar: '/images/player_card_sample.png', rank: 1, isLeader: true },
      { name: 'شما', avatar: '/images/player_card_sample.png', rank: 1, isLeader: false },
    ],
  },
];

export function getTeamInvites() {
  if (typeof window === 'undefined') return TEAM_INVITES_MOCK;
  const raw = window.localStorage.getItem(TEAM_INVITES_STORAGE_KEY);
  if (!raw) return TEAM_INVITES_MOCK;
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : TEAM_INVITES_MOCK;
  } catch {
    return TEAM_INVITES_MOCK;
  }
}

export function setTeamInvites(invites) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(TEAM_INVITES_STORAGE_KEY, JSON.stringify(invites));
}
