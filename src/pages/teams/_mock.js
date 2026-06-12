export const TEAMS_MOCK = [
  {
    name: 'نام تیم اول',
    members: [
      {
        name: 'fincher',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: true,
        isCurrentUser: true,
      },
      {
        name: 'amir_gamer',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
      {
        name: 'dani_olmo_dani',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
      {
        name: 'yousefSS',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
      {
        name: 'ali_wde',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
    ],
  },
  {
    name: 'تیم دوم',
    members: [
      {
        name: 'amir_gamer',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: true,
        isCurrentUser: false,
      },
      {
        name: 'dani_olmo_dani',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
      {
        name: 'yousefSS',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
      {
        name: 'fincher',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: true,
      },
      {
        name: 'ali_wde',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: false,
        isCurrentUser: false,
      },
    ],
  },
  {
    name: 'تیم سوم',
    members: [
      {
        name: 'fincher',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: true,
        isCurrentUser: true,
      },
    ],
  },
];

export const TEAM_INVITES_STORAGE_KEY = 'gg10_team_invites';

export const TEAM_INVITES_MOCK = [
  {
    id: 'inv-1',
    team: 'stars',
    from: 'fincher',
    avatar: '/images/player_card_sample.png',
    at: '۲ ساعت پیش',
    unread: true,
    teamExists: true,
    teamHasCapacity: true,
  },
  {
    id: 'inv-2',
    team: 'stars',
    from: 'fincher',
    avatar: '/images/player_card_sample.png',
    at: '۲ ساعت پیش',
    unread: true,
    teamExists: true,
    teamHasCapacity: true,
  },
  {
    id: 'inv-3',
    team: 'stars',
    from: 'fincher',
    avatar: '/images/player_card_sample.png',
    at: '۲ ساعت پیش',
    unread: false,
    teamExists: true,
    teamHasCapacity: true,
  },
  {
    id: 'inv-4',
    team: 'stars',
    from: 'fincher',
    avatar: '/images/player_card_sample.png',
    at: '۲ ساعت پیش',
    unread: false,
    teamExists: true,
    teamHasCapacity: false,
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
