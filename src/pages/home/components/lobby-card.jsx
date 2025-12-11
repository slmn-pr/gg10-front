import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import bg3 from '@/assets/images/lobby/bg-default.png';
import vipBg from '@/assets/images/Lobbies card avatar.png';

import { alpha, Divider, SvgIcon, useTheme } from '@mui/material';
import PinIcon from '@/components/icons/PinIcon';
import EntryFreeIcon from '@/components/icons/lobbie/EntryFreeIcon';
import PrizeIcon from '@/components/icons/lobbie/PrizeIcon';
import TimeIcon from '@/components/icons/lobbie/TimeIcon';
import DoubleTagsIcon from '@/components/icons/DoubleTagsIcon';
import LegendSmallIcon from '@/components/icons/rank/LegendSmallIcon';
import GoldSmallIcon from '@/components/icons/rank/GoldSmallIcon';
import SilverSmallIcon from '@/components/icons/rank/SilverSmallIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import PlacementChipIcon from '@/components/icons/chip/PlacementChipIcon';
import CustomTag from '@/components/tag';
import CapacityIcon from '@/components/icons/CapacityIcon';
import LeadingIcon from '@/components/icons/LeadingIcon';
import LobbyCardTag from './LobbyCardTag';
import AutoReviveSmallIcon from './icons/AutoReviveSmallIcon';
import PlacementSmallIcon from './icons/PlacementSmallIcon';
import SquadSmallIcon from './icons/SquadSmallIcon';

const STATUS_COLOR_MAP = {
  'تکمیل ظرفیت': {
    backgroundColor: 'rgba(255, 187, 96, 0.9)',
    color: 'custom.full',
    dot: '#3E2E1C',
  },
  'در حال برگزاری': {
    backgroundColor: 'rgba(255, 105, 105, 0.9)',
    color: 'custom.live',
    dot: '#3E1C1C',
  },
  'در حال ثبت نام': {
    backgroundColor: 'rgba(116, 247, 240, 0.9)',
    color: 'custom.registering',
    dot: '#1C3E3B',
  },
};

const LobbyCard = ({
  title,
  status,
  entryFee,
  prize,
  currentPlayers,
  maxPlayers,
  isRegistered,
  isFull,
  isVip = false,
  schedule = 'امروز ۱۷:۳۰',
  tags = ['اسکوادی', 'اتوریوایو', 'جایگاهی'],
}) => {
  const theme = useTheme();
  const progress = maxPlayers
    ? Math.min(100, Math.round((currentPlayers / maxPlayers) * 100))
    : 0;

  const statusPalette = React.useMemo(() => {
    if (status?.includes('تکمیل') || isFull) {
      return {
        backgroundColor: 'rgba(255, 187, 96, 0.9)',
        color: '#3E2E1C',
        dot: '#3E2E1C',
      };
    }
    if (status?.includes('برگزاری')) {
      return {
        backgroundColor: 'rgba(255, 105, 105, 0.9)',
        color: '#3E1C1C',
        dot: '#3E1C1C',
      };
    }
    if (status?.includes('ثبت') || isRegistered) {
      return {
        backgroundColor: 'rgba(116, 247, 240, 0.9)',
        color: '#1C3E3B',
        dot: '#1C3E3B',
      };
    }
    return {
      backgroundColor: 'rgba(255, 126, 186, 0.9)',
      color: '#3E1C2D',
      dot: '#3E1C2D',
    };
  }, [status, isRegistered, isFull]);

  const tagIcons = {
    اسکوادی: <SquadSmallIcon />,
    اسکواڈی: <AutoReviveChipIcon />,
    اتوریوایو: <AutoReviveSmallIcon />,
    جایگاهی: <PlacementSmallIcon />,
  };

  return (
    <Card
      sx={{
        mb: '12px',
        background: isVip ? theme.palette.custom.shade3 : theme.palette.custom.cardsBg,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row-reverse',
        border: 'none',
        gap: 0,
        padding: 0,
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
        // minHeight: 120,
        width: '100%',
        height: '112px',
      }}
    >
      {/* Image Section - RIGHT SIDE */}
      <Box
        sx={{
          width: '88px',
          height: '112px',
          position: 'relative',
          flexShrink: 0,
          // backgroundColor: '#05060C',
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={isVip ? vipBg : bg3}
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
            fontWeight: 700,
            fontSize: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            // color:,
            // backgroundColor: statusPalette.backgroundColor,
            color: statusPalette.color,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <Typography variant="sub3" color={STATUS_COLOR_MAP[status]?.color}>
            {status}
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
          background: isVip ? theme.palette.custom.shade3 : theme.palette.custom.cardsBg,
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
              <Typography variant="subtitle2" color={theme.palette.custom.greyOnBg1}>
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
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, direction: 'rtl' }}
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
                sx={{ direction: 'rtl', display: 'flex', alignItems: 'center', gap: 0.5 }}
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
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              // height: 7,
              borderRadius: 999,
              backgroundColor: theme.palette.background.progressbarBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              border: `1px solid ${theme.palette.stroke.progressbar}`,
              '& .MuiLinearProgress-bar': {
                borderRadius: '24px',
                // height: 3,

                background: theme.palette.primary.main,
              },
            }}
          />
        </Box>

        <Divider
          sx={{ my: 0.5, background: theme.palette.stroke.black, height: '2px' }}
        />

        {/* Bottom Tags */}
        <Stack direction="row" spacing={0.5} sx={{ justifyContent: 'flex-end' }} mb={0.5}>
          {tags.slice(0, 3).map((tag) => (
            <LobbyCardTag title={tag} icon={tagIcons[tag]} />
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default LobbyCard;
