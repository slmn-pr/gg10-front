export const MULTIPLAYER_TEAM_SLOTS = {
  '1V1': {
    slots: 1,
    teamSize: 1,
    players: {
      team1: [{ name: 'Player 1', rank: 1, isLeader: false, freeSlot: false }],
      team2: [{ name: 'Player 2', rank: 1, isLeader: false, freeSlot: false }],
    },
  },

  '2V2': {
    slots: 2,
    teamSize: 2,
    players: {
      team1: [
        { name: 'Player 1', rank: 1, isLeader: false, freeSlot: false },
        { name: 'Player 2', rank: 2, isLeader: false, freeSlot: false },
      ],
      team2: [
        { name: 'Player 3', rank: 3, isLeader: false, freeSlot: false },
        { name: 'Player 4', rank: 4, isLeader: false, freeSlot: false },
      ],
    },
  },

  '3V3': {
    slots: 3,
    teamSize: 3,
    players: {
      team1: [
        { name: 'Player 1', rank: 1, isLeader: false, freeSlot: false },
        { name: 'Player 2', rank: 2, isLeader: true, freeSlot: false },
        { name: 'Player 3', rank: 3, isLeader: false, freeSlot: false },
      ],
      team2: [
        { name: 'Player 4', rank: 4, isLeader: false, freeSlot: false },
        { name: 'Player 5', rank: 5, isLeader: true, freeSlot: false },
        { name: 'Player 6', rank: 6, isLeader: false, freeSlot: false },
      ],
    },
  },

  '4V4': {
    slots: 4,
    teamSize: 4,
    players: {
      team1: [
        { name: 'Player 1', rank: 1, isLeader: false, freeSlot: false },
        { name: 'Player 2', rank: 2, isLeader: false, freeSlot: false },
        { name: 'Player 3', rank: 3, isLeader: true, freeSlot: false },
        { name: 'Player 4', rank: 4, isLeader: false, freeSlot: false },
      ],
      team2: [
        { name: 'Player 5', rank: 5, isLeader: false, freeSlot: false },
        { name: 'Player 6', rank: 6, isLeader: false, freeSlot: false },
        { name: 'Player 7', rank: 7, isLeader: true, freeSlot: false },
        { name: 'Player 8', rank: 8, isLeader: false, freeSlot: false },
      ],
    },
  },

  '5V5': {
    slots: 5,
    teamSize: 5,
    players: {
      team1: [
        { name: 'Player 1', rank: 1, isLeader: false, freeSlot: false },
        { name: 'Player 2', rank: 2, isLeader: false, freeSlot: false },
        { name: 'Player 3', rank: 3, isLeader: true, freeSlot: false },
        { name: 'Player 4', rank: 4, isLeader: false, freeSlot: false },
        { name: 'Player 5', rank: 5, isLeader: false, freeSlot: false },
      ],
      team2: [
        { name: 'Player 6', rank: 6, isLeader: false, freeSlot: false },
        { name: 'Player 7', rank: 7, isLeader: false, freeSlot: false },
        { name: 'Player 8', rank: 8, isLeader: true, freeSlot: false },
        { name: 'Player 9', rank: 9, isLeader: false, freeSlot: false },
        { name: 'Player 10', rank: 10, isLeader: false, freeSlot: false },
      ],
    },
  },

  '6V6': {
    slots: 6,
    teamSize: 6,
    players: {
      team1: Array.from({ length: 6 }, (_, i) => ({
        name: `Player ${i + 1}`,
        rank: i + 1,
        isLeader: i === 2,
        freeSlot: true,
      })),
      team2: Array.from({ length: 6 }, (_, i) => ({
        name: `Player ${i + 7}`,
        rank: i + 7,
        isLeader: i === 2,
        freeSlot: true,
      })),
    },
  },

  '7V7': {
    slots: 7,
    teamSize: 7,
    players: {
      team1: Array.from({ length: 7 }, (_, i) => ({
        name: `Player ${i + 1}`,
        rank: i + 1,
        isLeader: i === 3,
        freeSlot: true,
      })),
      team2: Array.from({ length: 7 }, (_, i) => ({
        name: `Player ${i + 8}`,
        rank: i + 8,
        isLeader: i === 3,
        freeSlot: true,
      })),
    },
  },

  '8V8': {
    slots: 8,
    teamSize: 8,
    players: {
      team1: Array.from({ length: 8 }, (_, i) => ({
        name: `Player ${i + 1}`,
        rank: i + 1,
        isLeader: i === 3,
        freeSlot: true,
      })),
      team2: Array.from({ length: 8 }, (_, i) => ({
        name: `Player ${i + 9}`,
        rank: i + 9,
        isLeader: i === 3,
        freeSlot: true,
      })),
    },
  },

  '9V9': {
    slots: 9,
    teamSize: 9,
    players: {
      team1: Array.from({ length: 9 }, (_, i) => ({
        name: `Player ${i + 1}`,
        rank: i + 1,
        isLeader: i === 4,
        freeSlot: true,
      })),
      team2: Array.from({ length: 9 }, (_, i) => ({
        name: `Player ${i + 10}`,
        rank: i + 10,
        isLeader: i === 4,
        freeSlot: true,
      })),
    },
  },

  '10V10': {
    slots: 10,
    teamSize: 10,
    players: {
      team1: Array.from({ length: 10 }, (_, i) => ({
        name: `Player ${i + 1}`,
        rank: i + 1,
        isLeader: i === 4,
        freeSlot: true,
      })),
      team2: Array.from({ length: 10 }, (_, i) => ({
        name: `Player ${i + 11}`,
        rank: i + 11,
        isLeader: i === 4,
        freeSlot: true,
      })),
    },
  },
};
