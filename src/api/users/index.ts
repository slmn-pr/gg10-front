import apiClient from '../config';
import type { AvatarResponse, SetAvatarRequest, UserResponse } from './users';

export const getMeReq = async (): Promise<UserResponse> => {
  const response = await apiClient.get<UserResponse>('users/me');
  return response.data;
};

export const listAvatarsReq = async (): Promise<AvatarResponse[]> => {
  const response = await apiClient.get<AvatarResponse[]>('users/avatars');
  return response.data;
};

export const getAvatarReq = async (avatarId: string): Promise<AvatarResponse> => {
  const response = await apiClient.get<AvatarResponse>(`users/avatars/${avatarId}`);
  return response.data;
};

export const setMyAvatarReq = async (payload: SetAvatarRequest): Promise<UserResponse> => {
  const response = await apiClient.patch<UserResponse>('users/me/avatar', payload);
  return response.data;
};
