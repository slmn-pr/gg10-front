import { getMyLobbiesReq } from '@/api/lobbies';
import { GetMyLobbiesParams } from '@/api/lobbies/lobbies';
import { useQuery } from '@tanstack/react-query';

export default function useFetchMyLobbies(params: GetMyLobbiesParams) {
  return useQuery({
    queryKey: ['lobbies', 'my', params],
    queryFn: async () => {
      const { data } = await getMyLobbiesReq(params);
      return data;
    },
  });
}
