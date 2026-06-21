import apiClient from '../config';
import type {
  ClaimRewardResponse,
  GetMissionsParams,
  MissionListResponse,
} from './missions';

export const listMissionsReq = async (
  params: GetMissionsParams = {},
): Promise<MissionListResponse> => {
  const response = await apiClient.get<MissionListResponse>('missions', {
    params,
  });
  return response.data;
};

export const claimMissionRewardReq = async (
  missionId: string,
): Promise<ClaimRewardResponse> => {
  const response = await apiClient.post<ClaimRewardResponse>(
    `missions/${missionId}/claim`,
  );
  return response.data;
};
