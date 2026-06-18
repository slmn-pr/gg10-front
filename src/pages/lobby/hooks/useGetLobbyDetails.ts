import { getLobbyById } from '@/api';
import { useQuery } from '@tanstack/react-query';

export default function useGetLobbyDetails(id: string) {
  return useQuery({
    retry: 3,
    queryKey: ['lobby', id],
    queryFn: () => getLobbyById(id),
    enabled: !!id,
  });
}
