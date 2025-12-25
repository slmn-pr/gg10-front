import { LOBBY_STATUS } from '../lobby/constants/lobbyStatus';

export function getStatusPalette(statusNumber) {
  switch (statusNumber) {
    case LOBBY_STATUS.FULL:
      return {
        backgroundColor: 'rgba(255, 187, 96, 0.9)',
        color: 'custom.full',
        dot: 'custom.full',
        hexColor: '#BE9305',
      };
    case LOBBY_STATUS.IN_PROGRESS:
      return {
        backgroundColor: 'rgba(255, 105, 105, 0.9)',
        color: 'custom.live',
        dot: 'custom.live',
        hexColor: '#E80000',
      };
    case LOBBY_STATUS.REGISTERING:
      return {
        backgroundColor: 'rgba(116, 247, 240, 0.9)',
        color: 'custom.registering',
        dot: 'custom.registering',
        hexColor: '#00834F',
      };
    default:
      return {
        backgroundColor: 'rgba(255, 126, 186, 0.9)',
        color: 'custom.finished',
        dot: 'custom.finished',
      };
  }
}
