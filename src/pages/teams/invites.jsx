import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import BackwardButton from '@/components/layout/BackwardButton';
import toast from 'react-hot-toast';
import { useMemo, useState } from 'react';
import CustomToast from '@/components/toast/CustomToast';
import { getTeamInvites, setTeamInvites, TEAMS_MOCK } from './_mock';

function InviteCard({ invite, onAccept, onReject }) {
  return (
    <Box sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', p: 1.5 }} dir="rtl">
      <Stack direction="row-reverse" justifyContent="space-between" alignItems="center" gap={1}>
        <Stack direction="row-reverse" gap={1}>
          <Button
            onClick={onAccept}
            sx={{ height: 34, minWidth: 74, bgcolor: 'primary.main', color: 'custom.white', borderRadius: '8px', '&:hover': { bgcolor: 'primary.dark' } }}
          >
            <Typography variant="caption2">قبول</Typography>
          </Button>
          <Button
            onClick={onReject}
            sx={{ height: 34, minWidth: 74, bgcolor: 'custom.grey6', color: 'custom.grey0', borderRadius: '8px' }}
          >
            <Typography variant="caption2">رد</Typography>
          </Button>
        </Stack>

        <Stack direction="row-reverse" alignItems="center" gap={1.25}>
          <Stack alignItems="flex-end" sx={{ minWidth: 0 }}>
            <Typography variant="sub2" color="custom.white" noWrap>
              دعوت به {invite.team}
            </Typography>
            <Typography variant="caption2" color="custom.grey1" noWrap>
              توسط {invite.from} • {invite.at}
            </Typography>
          </Stack>
          <Avatar src={invite.avatar} sx={{ width: 42, height: 42, borderRadius: '8px' }} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default function TeamInvitesPage() {
  const [invites, setInvites] = useState(getTeamInvites());
  const [teams, setTeams] = useState(TEAMS_MOCK);

  const hasInvites = useMemo(() => invites.length > 0, [invites]);

  const updateInvites = (nextInvites) => {
    setInvites(nextInvites);
    setTeamInvites(nextInvites);
  };

  const showToast = (message) =>
    toast.custom((t) => <CustomToast t={t} message={message} onClose={() => toast.dismiss(t.id)} />);

  const handleAcceptInvite = (invite) => {
    const nextInvites = invites.filter((item) => item.id !== invite.id);
    updateInvites(nextInvites);

    if (!teams.some((team) => team.name === invite.team)) {
      setTeams((prev) => [...prev, { name: invite.team, members: invite.members || [] }]);
    }
    showToast(`دعوت‌نامه ${invite.team} پذیرفته شد`);
  };

  const handleRejectInvite = (invite) => {
    const nextInvites = invites.filter((item) => item.id !== invite.id);
    updateInvites(nextInvites);
    showToast(`دعوت‌نامه ${invite.team} رد شد`);
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 56px)', bgcolor: 'custom.primaryBg', pb: 8 }} dir="rtl">
      <Stack sx={{ px: 2, pt: 1.5 }} gap={2}>
        <BackwardButton>دعوت نامه ها</BackwardButton>

        <Box sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', p: 1.5 }}>
          <Typography variant="caption1" color="custom.grey0" textAlign="right">
            دعوت‌نامه‌های تیمی خود را مدیریت کنید. پس از قبول دعوت، تیم در بخش تیم‌ها نمایش داده می‌شود.
          </Typography>
        </Box>

        {hasInvites ? (
          <Stack gap={1.25}>
            {invites.map((invite) => (
              <InviteCard
                key={invite.id}
                invite={invite}
                onAccept={() => handleAcceptInvite(invite)}
                onReject={() => handleRejectInvite(invite)}
              />
            ))}
          </Stack>
        ) : (
          <Box sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', p: 2 }}>
            <Typography variant="caption1" color="custom.grey1" textAlign="center">
              در حال حاضر دعوت‌نامه جدیدی ندارید.
            </Typography>
          </Box>
        )}

        <Divider sx={{ borderColor: 'custom.grey6' }} />
      </Stack>
    </Box>
  );
}
