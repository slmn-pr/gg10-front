import apiClient from './config';

/**
 * Lobbies API
 * مدیریت تمام endpoint های مربوط به لابی‌ها
 */

/**
 * ایجاد لابی جدید
 * @param {Object} payload - LobbyCreate
 * @returns {Promise} LobbyResponse
 */
export const createLobby = async (payload) => {
  const response = await apiClient.post('lobbies', payload);
  return response.data;
};

/**
 * دریافت تمام لابی‌ها
 * @param {Object} params - { status?: string, game_mode?: string, limit?: number, offset?: number }
 * @returns {Promise} LobbyResponse[]
 */
export const getAllLobbies = async (params = {}) => {
  const response = await apiClient.get('lobbies', { params });
  return response.data;
};

/**
 * دریافت لابی‌های من
 * @param {Object} params - { status?: string, game_mode?: string, limit?: number, offset?: number }
 * @returns {Promise} LobbyResponse[]
 */
export const getMyLobbies = async (params = {}) => {
  const response = await apiClient.get('lobbies/me', { params });
  return response.data;
};

/**
 * دریافت جزئیات لابی با ID
 * @param {string} lobbyId - UUID لابی
 * @returns {Promise} LobbyDetailResponse
 */
export const getLobbyById = async (lobbyId) => {
  const response = await apiClient.get(`lobbies/${lobbyId}`);
  return response.data;
};

/**
 * ثبت‌نام در لابی
 * @param {string} lobbyId - UUID لابی
 * @param {Object} payload - LobbyRegisterRequest
 * @returns {Promise} LobbySlotPlayerResponse[]
 */
export const registerLobby = async (lobbyId, payload) => {
  const response = await apiClient.post(`lobbies/${lobbyId}/register`, payload);
  return response.data;
};

/**
 * تغییر وضعیت لابی
 * @param {string} lobbyId - UUID لابی
 * @param {Object} payload - LobbyStatusChangeRequest
 * @returns {Promise} LobbyResponse
 */
export const changeLobbyStatus = async (lobbyId, payload) => {
  const response = await apiClient.patch(`lobbies/${lobbyId}/status`, payload);
  return response.data;
};

export default {
  createLobby,
  getAllLobbies,
  getMyLobbies,
  getLobbyById,
  registerLobby,
  changeLobbyStatus,
};
