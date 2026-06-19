import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  useTheme,
} from '@mui/material';
import ChevronUpIcon from '@/components/icons/ChevronUp';
import LobbyCardHeader from '../components/LobbyCardHeader';
import useFetchAllLobbies from '../hooks/useFetchAllLobbies';
import { useMemo } from 'react';
import { GetLobbiesParams } from '@/api/lobbies/lobbies';
import LobbyCard from './LobbyCard';
import useFetchMyLobbies from '../hooks/useFetchMyLobbies';
import LobbyAccordion from './LobbyAccordion';

interface LobbiesAccordionContainerProsp {
  stickyHeaderHeight: number;
}

export default function LobbiesAccordionContainer({
  stickyHeaderHeight,
}: LobbiesAccordionContainerProsp) {
  const theme = useTheme();

  // TODO: Read real filter items using search params and set
  const fetchAllParams = useMemo<GetLobbiesParams>(
    () => ({
      game_mode: 'battle_royale',
      battle_royale_mode: ['duel'],
      filter_by_rank: false,
      free_only: false,
      limit: 5,
      multiplayer_mode: [],
      multiplayer_scoring: [],
      multiplayer_team_size: [],
      offset: 0,
      //   status: 'running',
    }),
    [],
  );
  const { data: allLobbies, isPending: allLobbiesPending } =
    useFetchAllLobbies(fetchAllParams);

  // TODO: Read real filter items using search params and set
  const { data: myLobbies, isPending: myLobbiesPending } = useFetchMyLobbies({
    game_mode: 'battle_royale',
    limit: 5,
    offset: 0,
    // status: 'running',
  });

  console.log('[LobbiesAccordionContainer] allLobbies', allLobbies);

  return (
    <Box>
      {/* My Lobbies Accordion */}
      <LobbyAccordion
        isLoading={myLobbiesPending}
        defaultExpanded
        data={myLobbies}
        lobbyName="لابی های من"
        stickyHeaderHeight={stickyHeaderHeight}
      />

      {/* All Lobbies Accordion */}
      <LobbyAccordion
        isLoading={allLobbiesPending}
        defaultExpanded
        data={allLobbies}
        lobbyName="فهرست همه لابی‌ها"
        stickyHeaderHeight={stickyHeaderHeight}
      />
    </Box>
  );
}
