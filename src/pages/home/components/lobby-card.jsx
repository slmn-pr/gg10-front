import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';

import bg3 from '@/assets/images/lobby/bg-default.png';
import vipBg from '@/assets/images/Lobbies card avatar.png';

import { alpha, SvgIcon, useTheme } from '@mui/material';
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

  const cardStyles = React.useMemo(
    () =>
      isVip
        ? {
            panelBg: 'linear-gradient(90deg, #420018 0%, #2A000F 100%)',
            panelBorder: '1px solid rgba(255, 54, 123, 0.2)',
            progressBar: 'linear-gradient(90deg, #FF0055 0%, #FF4F9F 100%)',
            curveBorderColor: '#FF367B',
          }
        : {
            panelBg: 'linear-gradient(90deg, #1A1D26 0%, #0C0E14 100%)',
            panelBorder: '1px solid rgba(255, 255, 255, 0.05)',
            progressBar: 'linear-gradient(90deg, #FF0055 0%, #FF4F9F 100%)',
            curveBorderColor: 'rgba(255, 255, 255, 0.1)',
          },
    [isVip],
  );

  const tagIcons = {
    اسکوادی: <SquadChipIcon />,
    اسکواڈی: <AutoReviveChipIcon />,
    اتوریوایو: <AutoReviveChipIcon />,
    جایگاهی: <PlacementChipIcon />,
  };

  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: 'transparent',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'row-reverse',
        border: 'none',
        gap: 0,
        padding: 0,
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 120,
        width: '100%',
      }}
    >
      {/* Image Section - RIGHT SIDE */}
      <Box
        sx={{
          width: '20%',

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
            px: 1.5,
            py: 0.5,
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
          background: isVip ? theme.palette.custom.shade3 : 'custom.cardsBg',
          border: 'none',
          px: 2,
          py: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top Row: VIP Badge + Title */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          {isVip ? (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#000',
                borderRadius: 2,
                px: 0.5,
                bgcolor: '#000',
                // border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Typography variant="caption2">ویژه</Typography>
              <SvgIcon>
                <PinIcon />
              </SvgIcon>
            </Box>
          ) : (
            <Box />
          )}

          <Typography variant="sub1">{title}</Typography>
        </Stack>

        {/* Info Grid */}
        <Stack direction="row" justifyContent="flex-end" spacing={3} sx={{ mt: 1 }}>
          {/* Time & Capacity (Left side of info) */}
          <Stack spacing={0.5} alignItems="flex-end">
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="sub2">{schedule}</Typography>
              <TimeIcon color="#fff" />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="sub2" color="custom.greyOnBg1">
                {currentPlayers}/{maxPlayers}
              </Typography>
              <DoubleTagsIcon color="#fff" />
            </Stack>
          </Stack>

          {/* Entry & Prize (Right side of info) */}
          <Stack spacing={0.5} alignItems="flex-end">
            {/* Entry Fee */}
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography
                variant="sub2"
                color={theme.palette.custom.dollar}
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, direction: 'rtl' }}
              >
                <span>ورودی:</span>
                <span>{entryFee}</span>
              </Typography>
              <SvgIcon>
                <EntryFreeIcon />
              </SvgIcon>
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
              <SvgIcon>
                <PrizeIcon />
              </SvgIcon>
            </Stack>
          </Stack>
        </Stack>

        {/* Progress Bar */}
        <Box sx={{ mt: 1.5, mb: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 6,
              borderRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.1)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 999,
                background: cardStyles.progressBar,
              },
            }}
          />
        </Box>

        {/* Bottom Tags */}
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
          {tags.slice(0, 3).map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                backgroundColor: '#000',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 500 }}
              >
                {tag}
              </Typography>
              {tagIcons[tag] &&
                React.cloneElement(tagIcons[tag], {
                  sx: { width: 16, height: 16, color: '#fff' },
                })}
            </Box>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default LobbyCard;
