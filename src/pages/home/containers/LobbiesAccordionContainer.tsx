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
  const { data: allLobbies, isPending } = useFetchAllLobbies(fetchAllParams);

  // TODO: Read real filter items using search params and set
  const { data: myLobbies } = useFetchMyLobbies({
    game_mode: 'battle_royale',
    limit: 5,
    offset: 0,
    // status: 'running',
  });

  console.log('[LobbiesAccordionContainer] allLobbies', allLobbies);

  return (
    <Box>
      {/* My Lobbies Accordion */}
      <Accordion
        defaultExpanded
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
          '& .MuiAccordionDetails-root': {
            px: 0,
            pb: 0,
          },
          '& .MuiAccordionSummary-root': {
            minHeight: 'auto',
            px: 0,
            py: 1,
            bgcolor: theme.palette.custom.bg1,
            position: 'sticky',
            top: 56 + stickyHeaderHeight,
            zIndex: 998,
            '&.Mui-expanded': {
              minHeight: 'auto',
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
                transition: 'transform 0.3s ease',
                width: 32,
                height: 32,
              }}
            >
              <ChevronUpIcon />
            </Box>
          }
          sx={{
            '& .MuiAccordionSummary-content': {
              margin: 0,
              '&.Mui-expanded': {
                margin: 0,
              },
            },
          }}
        >
          <LobbyCardHeader name="لابی های شما" title={`4 لابی`} />
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            {/* TODO: Render real data from API */}
            {myLobbies?.map((lobby) => (
              <LobbyCard key={lobby.id} lobbyInfo={lobby} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* All Lobbies Accordion */}
      <Accordion
        defaultExpanded
        sx={{
          bgcolor: 'transparent',
          boxShadow: 'none',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
          '& .MuiAccordionDetails-root': {
            px: 0,
            pb: 0,
          },
          '& .MuiAccordionSummary-root': {
            minHeight: 'auto',
            px: 0,
            py: 1,
            bgcolor: theme.palette.custom.bg1,
            position: 'sticky',
            top: 56 + stickyHeaderHeight,
            zIndex: 998,
            '&.Mui-expanded': {
              minHeight: 'auto',
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
                transition: 'transform 0.3s ease',
                width: 32,
                height: 32,
              }}
            >
              <ChevronUpIcon />
            </Box>
          }
          sx={{
            '& .MuiAccordionSummary-content': {
              margin: 0,
              '&.Mui-expanded': {
                margin: 0,
              },
            },
          }}
        >
          <LobbyCardHeader
            name="فهرست همه لابی‌ها"
            title={`${allLobbies?.length ?? 0} لابی`}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            {allLobbies?.map((lobby) => (
              <LobbyCard lobbyInfo={lobby} key={lobby.id} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
