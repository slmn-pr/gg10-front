import { Avatar, Box, Button, Stack, Typography } from '@mui/material';

function TeamTab({ team, active, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        height: 40,
        minWidth: 'fit-content',
        px: 2,
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'rgba(255,255,255,0.75)',
        bgcolor: active ? '#F6BFC3' : 'transparent',
        color: active ? '#0C0C0C' : 'custom.white',
        whiteSpace: 'nowrap',
        '&:hover': { bgcolor: active ? '#F2AFB8' : 'rgba(255,255,255,0.08)' },
      }}
    >
      <Typography variant="sub1" color="inherit">
        {team.name}
      </Typography>
    </Button>
  );
}

function MemberRow({ member }) {
  return (
    <Box
      sx={{
        height: 68,
        px: 1.5,
        borderRadius: '8px',
        bgcolor: 'custom.bg2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      dir="rtl"
    >
      {member.isLeader ? (
        <Typography variant="caption1" color="custom.tint3">
          لیدر تیم
        </Typography>
      ) : (
        <Box sx={{ width: 52 }} />
      )}

      <Stack direction="row-reverse" alignItems="center" gap={1.25}>
        <Stack alignItems="flex-end" sx={{ minWidth: 0 }}>
          <Typography variant="sub2" color={member.isLeader ? 'custom.tint3' : 'custom.white'} noWrap>
            {member.name}
          </Typography>
          <Typography variant="caption2" color="custom.grey1">
            رتبه {member.rank}
          </Typography>
        </Stack>
        <Avatar src={member.avatar} sx={{ width: 42, height: 42, borderRadius: '8px' }} />
      </Stack>
    </Box>
  );
}

export default function TeamsView({ teams, selectedTeamIndex, onSelectTeam, onCreateTeam }) {
  const selectedTeam = teams[selectedTeamIndex] || teams[0];

  return (
    <Stack gap={2}>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          px: 0,
          pb: 0.25,
          direction: 'rtl',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}
      >
        {teams.map((team, index) => (
          <TeamTab
            key={team.name}
            team={team}
            active={index === selectedTeamIndex}
            onClick={() => onSelectTeam(index)}
          />
        ))}

        <Button
          onClick={onCreateTeam}
          sx={{
            height: 40,
            px: 2,
            borderRadius: '8px',
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.75)',
            color: 'custom.white',
            whiteSpace: 'nowrap',
            bgcolor: 'transparent',
          }}
        >
          <Typography variant="sub1" color="inherit">
            + ساخت تیم جدید
          </Typography>
        </Button>
      </Box>

      <Box sx={{ px: 0.5 }} dir="rtl">
        <Stack direction="row-reverse" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Button onClick={onCreateTeam} sx={{ color: 'primary.main', p: 0, minWidth: 'fit-content' }}>
            <Typography variant="caption1" color="inherit">
              افزودن عضو جدید
            </Typography>
          </Button>
          <Typography variant="title3" color="custom.white">
            اعضای {selectedTeam.name}
          </Typography>
        </Stack>

        <Stack gap={1}>
          {(selectedTeam.members || []).map((member) => (
            <MemberRow key={`${selectedTeam.name}-${member.name}`} member={member} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
