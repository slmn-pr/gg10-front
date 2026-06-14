import { useMutation } from '@tanstack/react-query';
import { loginReq, LoginReqPayload } from '../../../api/auth';

export default function useLoginUsernamePassword() {
  async function login(payload: LoginReqPayload) {
    console.log('[useLoginUsernamePassword] login -> payload', payload);
    const { data, status } = await loginReq(payload);

    console.log('[useLoginUsernamePassword] login -> response', status, data);

    return data;
  }

  return useMutation({
    mutationKey: ['login', 'username_password'],
    mutationFn: login,
  });
}
