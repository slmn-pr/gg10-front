import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';

// Icons
import AccessTimeRoundedIcon from '@/assets/icons/lobby-card/time.svg';
import PeopleRoundedIcon from '@/assets/icons/lobby-card/number.svg';
import EmojiEventsRoundedIcon from '@/assets/icons/lobby-card/prize.svg';
import PaidRoundedIcon from '@/assets/icons/lobby-card/entry_fee.svg';
import AutoModeRoundedIcon from '@/assets/icons/chips/auto-revive.svg';
import GroupsRoundedIcon from '@/assets/icons/chips/squad.svg';
import PinIcon from '@/assets/icons/Tags icons/pin.svg';

// Images
import bg2 from '@/assets/images/lobby/bg-vip.png';
import bg3 from '@/assets/images/lobby/bg-default.png';
import lobbyAvatar from '@/assets/images/lobby/avatar.png';

const SvgIcon = ({ src, sx, ...props }) => (
  <Box
    component="img"
    src={src}
    sx={{
      width: '1em',
      height: '1em',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...sx,
    }}
    {...props}
  />
);

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
  const progress = maxPlayers ? Math.min(100, Math.round((currentPlayers / maxPlayers) * 100)) : 0;

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
    [isVip]
  );

  const tagIcons = {
    اسکوادی: <SvgIcon src={GroupsRoundedIcon} sx={{ width: 14, height: 14 }} />,
    اسکواڈی: <SvgIcon src={GroupsRoundedIcon} sx={{ width: 14, height: 14 }} />,
    اتوریوایو: <SvgIcon src={AutoModeRoundedIcon} sx={{ width: 14, height: 14 }} />,
    جایگاهی: <SvgIcon src={EmojiEventsRoundedIcon} sx={{ width: 14, height: 14 }} />,
  };

  return (
    <Card
      sx={{
        mb: 2,
        backgroundColor: 'transparent',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: 0,
        padding: 0,
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',
        height: 170,
      }}
    >
      {/* Image Section - RIGHT SIDE */}
      <Box
        sx={{
          width: '35%',
          position: 'relative',
          flexShrink: 0,
          backgroundColor: '#05060C',
          zIndex: 1,

        }}
      >
        <Box
          component="img"
          src={isVip ? bg2 : bg3}
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Status Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            fontWeight: 700,
            fontSize: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            backgroundColor: statusPalette.backgroundColor,
            color: statusPalette.color,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {status}
        </Box>

        {/* Avatars */}
        <Stack
          direction="row"
          spacing={-1}
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            zIndex: 2,
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <Avatar sx={{ width: 28, height: 28, border: '2px solid #1A1D26' }} src={lobbyAvatar} />
          </Box>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <Avatar sx={{ width: 28, height: 28, border: '2px solid #1A1D26' }} src={lobbyAvatar} />
          </Box>
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <Avatar sx={{ width: 28, height: 28, border: '2px solid #1A1D26' }} src={lobbyAvatar} />
          </Box>
        </Stack>
      </Box>

      {/* Content Section - LEFT SIDE */}
      <Box
        sx={{
          flex: 1,

          background: cardStyles.panelBg,
          border: cardStyles.panelBorder,
          p: 2,
          pr: 2,
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
                gap: 0.5,
                backgroundColor: '#000',
                borderRadius: 1,
                px: 1,
                py: 0.5,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <SvgIcon src={PinIcon} sx={{ width: 14, height: 14, color: '#fff', transform: 'rotate(45deg)' }} />
              <Typography sx={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700 }}>
                ویژه
              </Typography>
            </Box>
          ) : (
            <Box />
          )}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              color: '#FFFFFF',
              fontSize: '1.2rem',
              lineHeight: 1.2,
              textAlign: 'right',
              flex: 1,
            }}
          >
            {title}
          </Typography>
        </Stack>

        {/* Info Grid */}
        <Stack direction="row" justifyContent="flex-end" spacing={3} sx={{ mt: 1 }}>
          {/* Time & Capacity (Left side of info) */}
          <Stack spacing={0.5} alignItems="flex-end">
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>
                {schedule}
              </Typography>
              <SvgIcon src={AccessTimeRoundedIcon} sx={{ width: 18, height: 18, color: '#fff', filter: 'brightness(0) invert(1)' }} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>
                {currentPlayers}/{maxPlayers}
              </Typography>
              <SvgIcon src={PeopleRoundedIcon} sx={{ width: 18, height: 18, color: '#fff', filter: 'brightness(0) invert(1)' }} />
            </Stack>
          </Stack>

          {/* Entry & Prize (Right side of info) */}
          <Stack spacing={0.5} alignItems="flex-end">
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="body2" sx={{ color: '#00FF00', fontWeight: 700, fontSize: '0.9rem' }}>
                {entryFee}
              </Typography>
              <Typography variant="caption" sx={{ color: '#00FF00', fontSize: '0.8rem' }}>
                :ورودی
              </Typography>
              <SvgIcon src={PaidRoundedIcon} sx={{ width: 18, height: 18, color: '#fff', filter: 'brightness(0) invert(1)' }} />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="body2" sx={{ color: '#FFD700', fontWeight: 700, fontSize: '0.9rem' }}>
                {prize}
              </Typography>
              <Typography variant="caption" sx={{ color: '#FFD700', fontSize: '0.8rem' }}>
                :جایزه
              </Typography>
              <SvgIcon src={EmojiEventsRoundedIcon} sx={{ width: 18, height: 18, color: '#fff', filter: 'brightness(0) invert(1)' }} />
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
              <Typography variant="caption" sx={{ color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 500 }}>
                {tag}
              </Typography>
              {tagIcons[tag] && React.cloneElement(tagIcons[tag], { sx: { width: 16, height: 16, color: '#fff' } })}
            </Box>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default LobbyCard;
