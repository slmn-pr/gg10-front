import ChevronForward from '@/components/icons/ChevronForward';
import InfoIcon from '@/components/icons/InfoIcon';
import BottomNav from '@/components/layout/bottom-navigation';
import { Avatar, Box, Button, Drawer, IconButton, Stack, Typography, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CustomToast from '@/components/toast/CustomToast';
import InvitesButton from './components/InvitesButton';
import TeamEmptyView from './components/TeamEmptyView';
import TeamsView from './components/TeamsView';
import { getTeamInvites, setTeamInvites, TEAMS_MOCK } from './_mock';

function InviteInfoBox() {
  return (
    <Box
      sx={{
        bgcolor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px',
        p: 1.5,
      }}
      dir="rtl"
    >
      <Stack direction="row-reverse" gap={1} alignItems="flex-start">
        <Box sx={{ flexShrink: 0, mt: 0.25 }}>
          <InfoIcon color="#6B9FFF" />
        </Box>
        <Typography variant="caption2" color="custom.grey1" sx={{ lineHeight: 1.6 }}>
          با عضویت در هر تیم، لیدر امکان ثبت‌نام تیمی در لابی‌های بازی را دارد و هزینه ورودی
          مستقیماً از کیف پول هر یک از اعضا کسر خواهد شد
        </Typography>
      </Stack>
    </Box>
  );
}

function InviteCard({ invite, onAccept, onReject }) {
  return (
    <Box
      sx={{
        bgcolor: 'custom.bg2',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
      dir="rtl"
    >
      <Stack direction="row-reverse" alignItems="flex-start" gap={1.5} sx={{ p: 1.5, pb: 1 }}>
        <Avatar
          src={invite.avatar}
          sx={{ width: 44, height: 44, borderRadius: '8px', flexShrink: 0 }}
        />
        <Typography variant="caption1" color="custom.grey1" sx={{ lineHeight: 1.7 }}>
          کاربر{' '}
          <Box component="span" sx={{ color: 'custom.white' }}>
            {invite.from}
          </Box>{' '}
          از شما برای پیوستن به تیم &quot;{invite.team}&quot; دعوت کرده است.{' '}
          <Box component="span">{invite.at}</Box>
        </Typography>
      </Stack>

      <Stack direction="row" gap={1} sx={{ px: 1.5, pb: 1.5 }}>
        <Button
          fullWidth
          onClick={onReject}
          sx={{
            height: 40,
            borderRadius: '8px',
            bgcolor: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'custom.white',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' },
          }}
        >
          <Typography variant="caption1">رد دعوت</Typography>
        </Button>
        <Button
          fullWidth
          onClick={onAccept}
          sx={{
            height: 40,
            borderRadius: '8px',
            bgcolor: 'primary.main',
            color: 'custom.white',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <Typography variant="caption1">پیوستن به تیم</Typography>
        </Button>
      </Stack>
    </Box>
  );
}

export default function TeamsPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state;

  const seededTeams = useMemo(() => {
    if (!routeState?.message) return TEAMS_MOCK;
    return [
      ...TEAMS_MOCK,
      {
        name: routeState.teamName,
        members: routeState.teamMembers,
      },
    ];
  }, [routeState]);

  const [userTeams] = useState(seededTeams);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const [invites, setInvites] = useState(getTeamInvites());
  const [invitesOpen, setInvitesOpen] = useState(false);

  useEffect(() => {
    if (!routeState?.message) return;

    toast.custom((t) => (
      <CustomToast
        t={t}
        message={routeState.message}
        onClose={() => {
          navigate(location.pathname, { replace: true });
        }}
      />
    ));

    navigate(location.pathname, { replace: true });
  }, [routeState, navigate, location.pathname]);

  const invitesCount = invites.length;
  const hasTeams = userTeams.length > 0;
  const hasInvites = invitesCount > 0;

  const showToast = (message) =>
    toast.custom((t) => <CustomToast t={t} message={message} onClose={() => toast.dismiss(t.id)} />);

  const closeInvites = () => setInvitesOpen(false);

  const updateInvites = (nextInvites) => {
    setInvites(nextInvites);
    setTeamInvites(nextInvites);
  };

  const handleAcceptInvite = (invite) => {
    if (!invite.teamExists) {
      showToast('این تیم دیگر وجود ندارد');
      return;
    }
    if (userTeams.length >= 5) {
      showToast('حداکثر در ۵ تیم می‌توانید عضو باشید');
      return;
    }
    if (!invite.teamHasCapacity) {
      showToast('ظرفیت تیم تکمیل شده است');
      return;
    }
    const nextInvites = invites.filter((item) => item.id !== invite.id);
    updateInvites(nextInvites);
    showToast(`درخواست عضویت در ${invite.team} با موفقیت پذیرفته شد`);
  };

  const handleRejectInvite = (invite) => {
    const nextInvites = invites.filter((item) => item.id !== invite.id);
    updateInvites(nextInvites);
    showToast(`دعوت‌نامه ${invite.team} رد شد`);
  };

  const handleOpenInvites = () => {
    if (!hasInvites) return;
    setInvitesOpen(true);
    const nextInvites = invites.map((item) => ({ ...item, unread: false }));
    updateInvites(nextInvites);
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 56px)',
        backgroundColor: theme.palette.custom.primaryBg,
        pb: 10,
      }}
      dir="rtl"
    >
      <Stack sx={{ px: 0.5, pt: 1.5 }} gap={1.25}>
        {/* Page title row — clickable, navigates back */}
        <Box
          onClick={() => navigate(-1)}
          sx={{
            width: 'calc(100% - 32px)',
            mx: 'auto',
            height: 52,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            gap: 0.5,
            px: 3,
            pb: 1.25,
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', transform: 'scale(0.8)', transformOrigin: 'center' }}>
            <ChevronForward color="#fff" />
          </Box>
          <Typography variant="title2" color="custom.white">
            تیم‌ها
          </Typography>
        </Box>

        {hasInvites ? <InvitesButton count={invitesCount} onClick={handleOpenInvites} /> : null}

        {hasTeams ? (
          <TeamsView
            teams={userTeams}
            selectedTeamIndex={selectedTeamIndex}
            onSelectTeam={setSelectedTeamIndex}
            onCreateTeam={() => navigate('/teams/create')}
          />
        ) : (
          <TeamEmptyView onCreateTeam={() => navigate('/teams/create')} />
        )}
      </Stack>

      <BottomNav />

      {/* Invites bottom drawer */}
      <Drawer
        anchor="bottom"
        open={invitesOpen}
        onClose={closeInvites}
        PaperProps={{
          sx: {
            bgcolor: 'custom.primaryBg',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            px: 2,
            pt: 2,
            pb: 3,
          },
        }}
      >
        <Stack gap={1.5} sx={{ maxHeight: '80vh', overflowY: 'auto' }} dir="rtl">
          {/* Drawer header */}
          <Stack direction="row-reverse" alignItems="center" justifyContent="space-between">
            <Stack direction="row-reverse" alignItems="center" gap={1}>
              <Typography variant="title2" color="custom.white">
                دعوت‌نامه‌ها
              </Typography>
              {invitesCount > 0 && (
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    borderRadius: '999px',
                    minWidth: 22,
                    height: 22,
                    px: 0.75,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption2" color="white">
                    {invitesCount}
                  </Typography>
                </Box>
              )}
            </Stack>
            <IconButton onClick={closeInvites} sx={{ color: 'custom.white', p: 0.5 }}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <InviteInfoBox />

          {invites.length > 0 ? (
            invites.map((invite) => (
              <InviteCard
                key={invite.id}
                invite={invite}
                onAccept={() => handleAcceptInvite(invite)}
                onReject={() => handleRejectInvite(invite)}
              />
            ))
          ) : (
            <Box sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', p: 2 }}>
              <Typography variant="caption1" color="custom.grey1" textAlign="center" display="block">
                در حال حاضر دعوت‌نامه جدیدی ندارید.
              </Typography>
            </Box>
          )}
        </Stack>
      </Drawer>
    </Box>
  );
}
