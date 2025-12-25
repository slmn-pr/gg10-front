import { LOBBY_STATUS, LOBBY_STATUS_TEXT } from '../lobby/constants/lobbyStatus';

// Mock data for lobby cards
export const lobbyCardsMockData = [
  {
    id: '1',
    title: 'آیزولیتد ۴۰ نفره جایگاهی',
    status: LOBBY_STATUS.REGISTERING,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.REGISTERING],
    entryFee: '۱۰۰,۰۰۰ تومن',
    prize: '۱۰,۰۰۰,۰۰۰ تومن',
    currentPlayers: 30,
    maxPlayers: 40,
    isRegistered: true,
    isVip: true,
    schedule: 'امروز ۱۷:۳۰',
    tags: ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
    game_mode: 'multiplayer',
    team_type: 4, // 4V4
  },
  {
    id: '2',
    title: 'آیزولیتد ۴۰ نفره جایگاهی',
    status: LOBBY_STATUS.FULL,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.FULL],
    entryFee: '۱۰۰,۰۰۰ تومن',
    prize: '۱۰,۰۰۰,۰۰۰ تومن',
    currentPlayers: 40,
    maxPlayers: 40,
    isFull: true,
    isVip: false,
    schedule: 'امروز ۱۸:۰۰',
    tags: ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
    game_mode: 'multiplayer',
    team_type: 3, // 3V3
  },
  {
    id: '3',
    title: 'آیزولیتد ۴۰ نفره جایگاهی',
    status: LOBBY_STATUS.IN_PROGRESS,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.IN_PROGRESS],
    entryFee: '۱۰۰,۰۰۰ تومن',
    prize: '۱۰,۰۰۰,۰۰۰ تومن',
    currentPlayers: 30,
    maxPlayers: 40,
    isVip: true,
    schedule: 'امروز ۱۹:۰۰',
    tags: ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
    game_mode: 'battle-royal',
    team_type: 1, // Solo (1 player per team)
  },
  {
    id: '4',
    title: 'آیزولیتد ۴۰ نفره جایگاهی',
    status: LOBBY_STATUS.IN_PROGRESS,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.IN_PROGRESS],
    entryFee: '۱۰۰,۰۰۰ تومن',
    prize: '۱۰,۰۰۰,۰۰۰ تومن',
    currentPlayers: 35,
    maxPlayers: 40,
    isVip: false,
    schedule: 'امروز ۲۰:۰۰',
    tags: ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
    game_mode: 'multiplayer',
    team_type: 5, // 5V5
  },
  {
    id: '5',
    title: 'آیزولیتد ۴۰ نفره جایگاهی',
    status: LOBBY_STATUS.IN_PROGRESS,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.IN_PROGRESS],
    entryFee: '۱۰۰,۰۰۰ تومن',
    prize: '۱۰,۰۰۰,۰۰۰ تومن',
    currentPlayers: 38,
    maxPlayers: 40,
    isVip: false,
    schedule: 'امروز ۲۱:۰۰',
    tags: ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
    game_mode: 'battle-royal',
    team_type: 2, // Double (2 players per team)
  },
  {
    id: '6',
    title: 'آیزولیتد ۴۰ نفره جایگاهی',
    status: LOBBY_STATUS.IN_PROGRESS,
    statusText: LOBBY_STATUS_TEXT[LOBBY_STATUS.IN_PROGRESS],
    entryFee: '۱۰۰,۰۰۰ تومن',
    prize: '۱۰,۰۰۰,۰۰۰ تومن',
    currentPlayers: 25,
    maxPlayers: 40,
    isVip: true,
    schedule: 'امروز ۲۲:۰۰',
    tags: ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
    game_mode: 'multiplayer',
    team_type: 2, // 2V2
  },
];

// Mock function to get lobby detail by ID
export const getLobbyById = (id) => {
  const lobby = lobbyCardsMockData.find((l) => l.id === id);
  if (!lobby) {
    return null;
  }

  // Return extended lobby data for detail page
  return {
    ...lobby,
    link: `https://lobby.example.com/${id}`,
    time: 'امشب 23:30',
    capacity: `${lobby.currentPlayers}/${lobby.maxPlayers}`,
    progress: Math.min(100, Math.round((lobby.currentPlayers / lobby.maxPlayers) * 100)),
    gameMode: 'جایگاهی',
    teamType: '4 نفره',
    teamCapacity: 4,
    game_mode: lobby.game_mode || 'multiplayer',
    team_type: lobby.team_type || 4,
  };
};

// Mock data for "My Lobbies" section
export const myLobbiesMockData = lobbyCardsMockData.filter((lobby) => lobby.isRegistered);

// Mock data for "All Lobbies" section
export const allLobbiesMockData = lobbyCardsMockData;
