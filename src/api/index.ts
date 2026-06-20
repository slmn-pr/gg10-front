export { default as apiClient } from './config';
export { default as authAPI } from './auth';
export {
  createLobby,
  changeLobbyStatus,
  deleteLobby,
  getLobbyById,
  getMyLobbiesReq,
  registerLobby,
  unregisterLobby,
  updateLobby,
} from './lobbies/index';
export * from './users/index';
export { default as healthAPI } from './health';

export * from './auth';
export * from './users';
export * from './health';
export * from './leaderboard/index';
export * from './wallet/index';
