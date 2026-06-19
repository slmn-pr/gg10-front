import { getAllLobbiesReq } from '@/api/lobbies';
import { GetLobbiesParams } from '@/api/lobbies/lobbies';
import { useQuery } from '@tanstack/react-query';

export default function useFetchAllLobbies(params: GetLobbiesParams) {
  return useQuery({
    queryKey: ['lobbies', 'all', params],
    queryFn: async () => {
      const { data } = await getAllLobbiesReq(params);
      return data;
    },
  });
}
