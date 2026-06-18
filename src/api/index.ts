export { default as apiClient } from './config';
export { default as authAPI } from './auth';
export {
  createLobby,
  changeLobbyStatus,
  deleteLobby,
  getAllLobbies,
  getLobbyById,
  getMyLobbies,
  registerLobby,
  unregisterLobby,
  updateLobby,
} from './lobbies/index';
export { default as usersAPI } from './users';
export { default as healthAPI } from './health';

export * from './auth';
export * from './users';
export * from './health';
