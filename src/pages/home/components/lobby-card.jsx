import React, { useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import vipBg from '@/assets/images/Lobbies card avatar.png';

import { alpha, Divider, useTheme } from '@mui/material';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import PrizeIcon from '@/components/icons/lobbie/PrizeIcon';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import LegendSmallIcon from '@/components/icons/rank/LegendSmallIcon';
import GoldSmallIcon from '@/components/icons/rank/GoldSmallIcon';
import SilverSmallIcon from '@/components/icons/rank/SilverSmallIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import CapacityIcon from '@/components/icons/CapacityIcon';
import LeadingIcon from '@/components/icons/LeadingIcon';
import LobbyCardTag from './LobbyCardTag';
import AutoReviveSmallIcon from './icons/AutoReviveSmallIcon';
import PlacementSmallIcon from './icons/PlacementSmallIcon';
import SquadSmallIcon from './icons/SquadSmallIcon';
import CustomProgressBar from '@/components/CustomProgressBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LOBBY_STATUS } from '@/pages/lobby/constants/lobbyStatus';
import { getStatusPalette } from '../utils';

const LobbyCard = ({
  id,
  title,
  status,
  statusText,
  entryFee,
  prize,
  currentPlayers,
  maxPlayers,
  isVip = false,
  schedule = 'امروز ۱۷:۳۰',
  tags = ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
}) => {
  const [searchParams] = useSearchParams();
  const theme = useTheme();
  const progress = maxPlayers
    ? Math.min(100, Math.round((currentPlayers / maxPlayers) * 100))
    : 0;

  const navigate = useNavigate();

  const statusPalette = getStatusPalette(status);
  const tagIcons = {
    اسکوادی: <SquadSmallIcon />,
    اسکواڈی: <AutoReviveChipIcon />,
    اتوریوایو: <AutoReviveSmallIcon />,
    جایگاهی: <PlacementSmallIcon />,
  };

  const handleCardClick = useCallback(() => {
    if (!id) return;

    const gameMode = searchParams.get('gameMode') || 'multiplayer';
    const teamType = searchParams.get('team_type') || 1;
    const newParams = new URLSearchParams();
    newParams.set('lobbyId', id);
    newParams.set('gameMode', gameMode);
    newParams.set('team_type', teamType);
    navigate(`/lobby?${newParams.toString()}`);
  }, [id, searchParams, navigate]);

  return (
    <Card
      sx={{
        mb: '12px',
        background: isVip ? theme.palette.custom.grey6 : theme.palette.custom.cardsBg,
        borderRadius: 2,
        border: 'none',
        gap: 0,
        padding: 0,
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        minHeight: '112px',
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
        onClick={handleCardClick}
      >
        {/* Image Section - RIGHT SIDE */}
        <Box
          sx={{
            width: '88px',
            height: '100%',
            position: 'relative',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={vipBg}
            alt=""
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'middle',
            }}
          />

          {/* Status Badge */}
          <Box
            bgcolor={theme.palette.custom.tagOnCardPicBg}
            sx={{
              direction: 'rtl',
              position: 'absolute',
              top: 4,
              right: 0,
              border: 'none',
              borderRadius: 0,
              borderBottomRightRadius: '0px',
              borderTopRightRadius: '0px',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              padding: 1,
              py: 0,
              borderRadius: 1,
              gap: 0.5,

              display: 'inline-flex',
              alignItems: 'center',

              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            {status === LOBBY_STATUS.IN_PROGRESS ? (
              <Box
                bgcolor={statusPalette.backgroundColor}
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  backgroundColor: statusPalette.dot,
                }}
              ></Box>
            ) : (
              <></>
            )}
            <Typography variant="sub3" sx={{ color: statusPalette.color }}>
              {statusText}
            </Typography>
          </Box>

          {/* Avatars */}
          <Stack
            direction="row"
            spacing={-1.5}
            bgcolor={alpha(theme.palette.custom.glassOnCards, 0.5)}
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SilverSmallIcon />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GoldSmallIcon />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LegendSmallIcon />
            </Box>
          </Stack>
        </Box>

        {/* Content Section - LEFT SIDE */}
        <Box
          sx={{
            flex: 1,
            background: isVip
              ? theme.palette.custom.shade3
              : theme.palette.custom.cardsBg,
            border: 'none',
            px: 1,
            // py: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Row: VIP Badge + Title */}
          <Stack
            direction="row"
            justifyContent={isVip ? 'space-between' : 'flex-end'}
            alignItems="center"
          >
            {isVip && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: theme.palette.custom.tagsBlackBg,
                  borderRadius: '2px',
                  height: '20px',
                  px: 1,
                  // py: 0.5,
                  // border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography
                  variant="caption2"
                  color={theme.palette.custom.iconsWhite}
                  sx={{ marginInlineEnd: 0.25 }}
                >
                  ویژه
                </Typography>
                <LeadingIcon color={theme.palette.custom.iconsWhite} />
              </Box>
            )}

            <Typography variant="sub1">{title}</Typography>
          </Stack>

          {/* Info Grid */}
          <Stack direction="row" justifyContent="flex-end">
            {/* Time & Capacity (Left side of info) */}
            <Stack alignItems="flex-end" sx={{ flex: 1 }}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.25}
                sx={{ width: '100%' }}
              >
                <Typography variant="sub2" color={theme.palette.custom.whiteOnBg2}>
                  {schedule}
                </Typography>
                <TimeIcon color={theme.palette.custom.iconsWhite} />
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0.25}
                sx={{ width: '100%' }}
              >
                <Typography variant="sub2" color={theme.palette.custom.greyOnBg1}>
                  {currentPlayers}/{maxPlayers}
                </Typography>
                <CapacityIcon color={theme.palette.custom.greyOnBg1} />
              </Stack>
            </Stack>

            {/* Entry & Prize (Right side of info) */}
            <Stack alignItems="flex-end">
              {/* Entry Fee */}
              <Stack direction="row" alignItems="center" spacing={0.5}>
                {/* Label */}
                <Typography
                  variant="sub2"
                  color={theme.palette.custom.dollar}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    direction: 'rtl',
                  }}
                >
                  <span>ورودی:</span>
                  <span>{entryFee}</span>
                </Typography>
                {/* Icon */}
                <EntryFreeIcon />
              </Stack>

              {/* Prize */}
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography
                  variant="sub2"
                  sx={{
                    direction: 'rtl',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                  color={theme.palette.custom.prize}
                >
                  <span>جایزه:</span>
                  <span>{prize}</span>
                </Typography>
                <PrizeIcon />
              </Stack>
            </Stack>
          </Stack>

          {/* Progress Bar */}
          <Box mt="1.5px">
            <CustomProgressBar progress={progress} />
          </Box>

          <Divider
            sx={{ my: 0.5, background: theme.palette.stroke.black, height: '2px' }}
          />

          {/* Bottom Tags */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ justifyContent: 'flex-end' }}
            mb={0.25}
          >
            {tags.slice(0, 3).map((tag) => (
              <LobbyCardTag title={tag} icon={tagIcons[tag]} />
            ))}
          </Stack>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default LobbyCard;
