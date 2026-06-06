import { Avatar, Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const LEADER_MENU_OPTIONS = ['مدیریت تیم', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم'];

function TeamTab({ team, active, onClick }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        height: 38,
        minWidth: 'fit-content',
        px: 2,
        borderRadius: '8px',
        border: '1px solid',
        borderColor: active ? 'transparent' : 'rgba(255,255,255,0.25)',
        bgcolor: active ? '#F6BFC3' : 'transparent',
        color: active ? '#0C0C0C' : 'custom.white',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        '&:hover': { bgcolor: active ? '#F2AFB8' : 'rgba(255,255,255,0.06)' },
      }}
    >
      <Typography variant="sub1" color="inherit">
        {team.name}
      </Typography>
    </Button>
  );
}

function MemberRow({ member, isCurrentUserLeader, onMenuOpen }) {
  const isLeader = member.isLeader;
  const isCurrentUser = member.isCurrentUser;

  return (
    <Box
      sx={{
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        direction: 'rtl',
      }}
    >
      {/* Right group: avatar + name — RTL row puts avatar first = far right */}
      <Stack direction="row" alignItems="center" gap={1.5}>
        <Avatar
          src={member.avatar}
          sx={{
            width: 48,
            height: 48,
            borderRadius: '10px',
            border: isCurrentUser ? '2px solid' : 'none',
            borderColor: 'primary.main',
            boxShadow: isCurrentUser ? '0 0 14px rgba(228,11,90,0.45)' : 'none',
          }}
        />
        <Typography
          sx={{ direction: 'ltr', fontWeight: 500, fontSize: 14, color: isCurrentUser ? 'primary.main' : 'custom.white' }}
        >
          {member.name}
        </Typography>
      </Stack>

      {/* Left group: label / action */}
      {isLeader && isCurrentUserLeader ? (
        /* current user IS the leader → show ⋮ + لیدرتیم */
        <Stack direction="row" alignItems="center" gap={0.5} sx={{ direction: 'ltr' }}>
          <Button onClick={onMenuOpen} sx={{ minWidth: 0, p: 0.5, color: 'custom.grey1' }}>
            <MoreVertIcon sx={{ fontSize: 18 }} />
          </Button>
          <Typography variant="caption1" color="custom.grey1">
            لیدرتیم
          </Typography>
        </Stack>
      ) : isLeader && !isCurrentUserLeader ? (
        /* someone else is leader, viewer is not leader */
        <Typography variant="caption1" color="custom.grey1">
          لیدرتیم
        </Typography>
      ) : isCurrentUser && !isCurrentUserLeader ? (
        /* current user is NOT the leader → show leave */
        <Typography
          variant="caption1"
          color="primary.main"
          sx={{ cursor: 'pointer', fontWeight: 500 }}
        >
          خروج ازتیم
        </Typography>
      ) : (
        <Box sx={{ width: 60 }} />
      )}
    </Box>
  );
}

export default function TeamsView({ teams, selectedTeamIndex, onSelectTeam, onCreateTeam }) {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const selectedTeam = teams[selectedTeamIndex] || teams[0];

  const currentUserMember = selectedTeam?.members?.find((m) => m.isCurrentUser);
  const isCurrentUserLeader = currentUserMember?.isLeader === true;

  return (
    <Stack gap={0}>
      {/* Tabs row — direction rtl so first tab appears on right */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          width: 'calc(100% - 32px)',
          mx: 'auto',
          pb: 0.5,
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
            height: 38,
            px: 2,
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'custom.white',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            bgcolor: 'transparent',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
          }}
        >
          <Typography variant="sub1" color="inherit">
            + ساخت تیم
          </Typography>
        </Button>
      </Box>

      {/* Members section */}
      <Box sx={{ width: 'calc(100% - 32px)', mx: 'auto', pt: 2, direction: 'rtl' }}>
        {/* Header: "نام اعضا" right, action left — default RTL row handles this */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 0.5 }}
        >
          <Typography variant="title2" color="custom.white">
            نام اعضا
          </Typography>
          {isCurrentUserLeader && (
            <Typography
              variant="caption1"
              color="primary.main"
              sx={{ cursor: 'pointer' }}
            >
              + افزودن عضو جدید
            </Typography>
          )}
        </Stack>

        <Box sx={{ borderBottom: '1px solid rgba(255,255,255,0.06)', mb: 0.5 }} />

        {(selectedTeam?.members || []).map((member) => (
          <MemberRow
            key={`${selectedTeam.name}-${member.name}`}
            member={member}
            isCurrentUserLeader={isCurrentUserLeader}
            onMenuOpen={(e) => setMenuAnchor(e.currentTarget)}
          />
        ))}
      </Box>

      {/* Leader context menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            minWidth: 180,
            py: 0.5,
          },
        }}
      >
        {LEADER_MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option}
            onClick={() => setMenuAnchor(null)}
            sx={{ justifyContent: 'flex-end', py: 1.25 }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#0C0C0C' }}>
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}
