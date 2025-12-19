/**
 * Generate fake multiplayer data
 * @param {number} count - The number of players
 * @param {number} rank - The rank of the players(between 1 - 4)
 * @returns {Array} - The fake multiplayer data
 */
export function generateFakeMultiplayerData(count = 1) {
  const randomFreeSlotIndex = Math.floor(Math.random() * (count - 1));

  return Array.from({ length: count }, (_, i) => {
    const randomRankNumber = Math.floor(Math.random() * 4) + 1;
    return {
      name: `amir_gamer`,
      rank: randomRankNumber,
      isLeader: i === 3,
      freeSlot: i === randomFreeSlotIndex,
    };
  });
}
