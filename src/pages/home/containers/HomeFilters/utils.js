import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';

export default function getDefaultValueNames(gameMode) {
  return gameMode === 'multiplayer'
    ? Object.keys(MULTIPLAYER_DEFAULT_VALUES)
    : Object.keys(BATTLE_ROYAL_DEFAULT_VALUES);
}
