import { AxiosResponse } from 'axios';
import apiClient from '../config';
import type {
  CreateLobbyPayload,
  GetLobbiesParams,
  GetMyLobbiesParams,
  LobbyDetailResponse,
  LobbyRegisterRequest,
  LobbyResponse,
  LobbySlotPlayerResponse,
  LobbyStatusChangeRequest,
} from './lobbies';

export const createLobby = async (
  payload: CreateLobbyPayload,
): Promise<LobbyResponse> => {
  const response = await apiClient.post<LobbyResponse>('lobbies', payload);
  return response.data;
};

export const getAllLobbiesReq = async (
  params: GetLobbiesParams = {},
): Promise<AxiosResponse<LobbyResponse[]>> => {
  return apiClient.get('lobbies', { params });
};

export const getMyLobbies = async (
  params: GetMyLobbiesParams = {},
): Promise<LobbyResponse[]> => {
  const response = await apiClient.get<LobbyResponse[]>('lobbies/me', {
    params,
  });
  return response.data;
};

export const getLobbyById = async (lobbyId: string): Promise<LobbyDetailResponse> => {
  const response = await apiClient.get<LobbyDetailResponse>(`lobbies/${lobbyId}`);
  return response.data;
};

export const registerLobby = async (
  lobbyId: string,
  payload: LobbyRegisterRequest,
): Promise<LobbySlotPlayerResponse[]> => {
  const response = await apiClient.post<LobbySlotPlayerResponse[]>(
    `lobbies/${lobbyId}/register`,
    payload,
  );
  return response.data;
};

export const unregisterLobby = async (lobbyId: string): Promise<void> => {
  await apiClient.delete(`lobbies/${lobbyId}/unregister`);
};

export const changeLobbyStatus = async (
  lobbyId: string,
  payload: LobbyStatusChangeRequest,
): Promise<LobbyResponse> => {
  const response = await apiClient.patch<LobbyResponse>(
    `lobbies/${lobbyId}/status`,
    payload,
  );
  return response.data;
};

export const updateLobby = async (
  lobbyId: string,
  payload: CreateLobbyPayload,
): Promise<LobbyResponse> => {
  const response = await apiClient.put<LobbyResponse>(`lobbies/${lobbyId}`, payload);
  return response.data;
};

export const deleteLobby = async (lobbyId: string): Promise<void> => {
  await apiClient.delete(`lobbies/${lobbyId}`);
};
