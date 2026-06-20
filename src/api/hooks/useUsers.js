import { useQuery } from '@tanstack/react-query';
import { getMe } from '../users';

/**
 * Hook برای دریافت اطلاعات کاربر فعلی
 */
export const useGetMe = (options = {}) => {
  return useQuery({
    queryKey: ['users', 'me'],
    queryFn: getMe,
    ...options,
  });
};
