import { generateFakeMultiplayerData } from './genrate_fake_data';

const _mock = [
  {
    label: 'Team 01',
    players: [{ name: 'Player 01', rank: 1, isLeader: false, freeSlot: false }],
  },

  {
    label: 'Team 02',
    players: [{ name: 'Player 02', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 03',
    players: [{ name: 'Player 03', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 04',
    players: [{ name: 'Player 04', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 05',
    players: [{ name: 'Player 05', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 06',
    players: [{ name: 'Player 01', rank: 1, isLeader: false, freeSlot: false }],
  },

  {
    label: 'Team 07',
    players: [{ name: 'Player 02', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 08',
    players: [{ name: 'Player 03', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 09',
    players: [{ name: 'Player 04', rank: 1, isLeader: false, freeSlot: false }],
  },
  {
    label: 'Team 10',
    players: [{ name: 'Player 05', rank: 1, isLeader: false, freeSlot: false }],
  },
];

/**
 * Generate fake battle royal data
 * @param {number} count - The number of teams
 * @param {number} teamCapacity - The capacity of each team
 * @returns {Array} - The fake battle royal data
 */
export function generateFakeBattleRoyalData(count = 10, teamCapacity = 2) {
  return Array.from({ length: count }, (_, index) => {
    return {
      label: `Team ${index + 1}`,
      players: generateFakeMultiplayerData(teamCapacity),
    };
  });
}
