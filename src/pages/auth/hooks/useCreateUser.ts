import { useMutation, useQuery } from '@tanstack/react-query';
import { createUserReq, CreateUserReqPaylaod } from '../../../api/auth';
export default function useCreateUser() {
  const submitGameName = async (payload: CreateUserReqPaylaod) => {
    if (!payload.username) return false;

    const { data } = await createUserReq(payload);
    console.log('[useCreateUser] data', data);

    return data;
  };

  return useMutation({
    mutationKey: ['auth', 'game_name'],
    mutationFn: submitGameName,
  });
}
