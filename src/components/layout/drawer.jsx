import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';

const navSections = [
  { label: 'Overview', icon: <DashboardRoundedIcon />, path: '/admin' },
  { label: 'Moderation', icon: <SecurityRoundedIcon />, path: '/admin/moderation' },
  { label: 'Settings', icon: <SettingsRoundedIcon />, path: '/admin/settings' },
];

const MDDrawer = ({ open, onClose }) => (
  <Drawer
    anchor="left"
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: {
        width: 320,
        backgroundColor: (theme) => theme.vars.palette.surface,
        borderTopRightRadius: (theme) => theme.shape.custom.large,
        borderBottomRightRadius: (theme) => theme.shape.custom.large,
        p: 2,
      },
    }}
  >
    <List>
      {navSections.map((item) => (
        <ListItemButton key={item.label} sx={{ borderRadius: (theme) => theme.shape.custom.medium }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  </Drawer>
);

export default MDDrawer;
