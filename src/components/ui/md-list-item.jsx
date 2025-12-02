import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const MDListItem = ({ title, subtitle, metadata, thumbnail, actions }) => (
  <ListItem
    sx={{
      borderRadius: (theme) => theme.shape.custom.large,
      backgroundColor: (theme) => theme.vars.palette.surfaceContainer,
      mb: 1,
      px: 2,
      py: 1.5,
      boxShadow: (theme) => theme.shadows[2],
    }}
    secondaryAction={actions}
  >
    {thumbnail ? (
      <ListItemAvatar>
        {typeof thumbnail === 'string' ? (
          <Avatar src={thumbnail} variant="rounded" />
        ) : (
          thumbnail
        )}
      </ListItemAvatar>
    ) : null}
    <ListItemText
      primary={
        <Typography variant="titleMedium" component="span">
          {title}
        </Typography>
      }
      secondary={
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={0.5} mt={0.5}>
          <Typography variant="bodySmall" color="text.secondary">
            {subtitle}
          </Typography>
          {metadata ? (
            <Typography variant="labelSmall" color="primary" sx={{ textTransform: 'uppercase' }}>
              {metadata}
            </Typography>
          ) : null}
        </Box>
      }
    />
  </ListItem>
);

export default MDListItem;
