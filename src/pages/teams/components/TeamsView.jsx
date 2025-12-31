import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useSmoothHorizentalScroll from '@/pages/home/containers/HomeFilters/hooks/useSmoothHorizentalScroll';

export default function TeamsView() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const selectedTeamDetails = {
    name: 'تیم اول',
    members: [
      {
        name: 'mamad',
        avatar: '/images/player_card_sample.png',
        rank: 1,
        isLeader: true,
      },
      {
        name: 'ali',
        avatar: '/images/player_card_sample.png',
        rank: 2,
        isLeader: false,
      },
    ],
  };
  const navigate = useNavigate();

  // Use custom hook for horizontal scroll logic
  const { containerRef, motionProps, scrollStyles } = useSmoothHorizentalScroll();

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };

  const handleCreateTeam = () => {
    navigate('/teams/create');
  };

  return (
    <Box>
      {/* Horizental scrollable section */}
      <Stack
        component={motion.div}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
        px="16px"
        ref={containerRef}
        {...motionProps}
        sx={scrollStyles}
      >
        <ButtonGroup color="white" sx={{ direction: 'ltr' }}>
          <Button onClick={() => handleSelectTeam('team3')}>تیم سوم</Button>
          <Button onClick={() => handleSelectTeam('team2')}>تیم دوم</Button>
          <Button onClick={() => handleSelectTeam('team1')}>تیم اول</Button>
        </ButtonGroup>

        {/* <Button
          variant="outlined"
          color="white"
          onClick={handleCreateTeam}
          sx={{ px: '10px' }}
        >
          + ساخت تیم جدید
        </Button> */}
      </Stack>

      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: '16px', direction: 'rtl' }}
        >
          <Typography variant="title3" color="white">
            نام اعضا
          </Typography>
          <Button color="white">افزودن عضو جدید</Button>
        </Stack>

        <List>
          {selectedTeamDetails.members.map((member) => (
            <ListItem
              key={member.name}
              sx={{
                direction: 'rtl',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ListItemAvatar sx={{ width: '50px', height: '50px' }}>
                  <Avatar src={member.avatar} sx={{ width: '50px', height: '50px' }} />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    color: member.isLeader ? 'custom.tint3' : 'custom.white',
                  }}
                >
                  <Typography
                    variant="sub1"
                    color={member.isLeader ? 'custom.tint3' : 'custom.white'}
                  >
                    {member.name}
                  </Typography>
                </ListItemText>
              </Box>

              {/* Show leader badge if member is leader */}
              {member.isLeader && (
                <Box>
                  <Typography variant="sub1" color="custom.tint3">
                    لیدر تیم
                  </Typography>
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
