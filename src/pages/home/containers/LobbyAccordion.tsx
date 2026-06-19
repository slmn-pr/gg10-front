import ChevronUpIcon from '@/components/icons/ChevronUp';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  useTheme,
} from '@mui/material';
import LobbyCardHeader from '../components/LobbyCardHeader';
import LobbyCard from './LobbyCard';
import { LobbyResponse } from '@/api/lobbies/lobbies';
import { LoaderIcon } from 'react-hot-toast';

interface LobbyAccordionProps {
  data: LobbyResponse[] | undefined;
  lobbyName: string;
  stickyHeaderHeight: number;
  isLoading?: boolean;
  defaultExpanded?: boolean;
}

export default function LobbyAccordion({
  data,
  lobbyName,
  stickyHeaderHeight,
  isLoading = true,
  defaultExpanded = false,
}: LobbyAccordionProps) {
  const theme = useTheme();

  return (
    <Accordion
      disabled={isLoading}
      defaultExpanded={defaultExpanded && !isLoading}
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
            {!isLoading ? <ChevronUpIcon /> : <LoaderIcon />}
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
        <LobbyCardHeader name={lobbyName} title={`${data?.length} لابی`} />
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          {data?.map((lobby) => (
            <LobbyCard key={lobby.id} lobbyInfo={lobby} />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
