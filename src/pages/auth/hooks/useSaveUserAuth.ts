import { cookies } from '@/lib/cookies';

export default function useSaveUserAuth(storeSetAuth: (data: any) => void) {
  function saveAuth(data: any) {
    storeSetAuth(data);
    // Save to cookies
    cookies.set('access_token', data.access_token);
    cookies.set('refresh_token', data.refresh_token);
  }

  return saveAuth;
}
