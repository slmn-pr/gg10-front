import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MDTabSwitcher = ({ value, onChange, tabs = [] }) => (
  <Tabs
    value={value}
    onChange={onChange}
    variant="scrollable"
    scrollButtons="auto"
    textColor="inherit"
    indicatorColor="primary"
    sx={{
      minHeight: 48,
      '& .MuiTab-root': {
        minHeight: 48,
        borderRadius: (theme) => theme.shape.custom.medium,
        textTransform: 'none',
        fontWeight: 600,
        mx: 0.5,
      },
    }}
  >
    {tabs.map((tab) => (
      <Tab key={tab.value} label={tab.label} value={tab.value} icon={tab.icon} iconPosition="start" />
    ))}
  </Tabs>
);

export default MDTabSwitcher;
