import { Box, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AttachFile } from '@mui/icons-material';

interface TicketAttachmentChipProps {
  fileName: string;
  onRemove?: () => void;
}

export default function TicketAttachmentChip({
  fileName,
  onRemove,
}: TicketAttachmentChipProps) {
  return (
    <Box
      sx={{
        bgcolor: 'custom.grey4',
        borderRadius: '8px',
        px: 2,
        py: 1.5,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        minWidth: '220px',
      }}
    >
      {onRemove && (
        <IconButton size="small" onClick={onRemove} sx={{ p: 0 }}>
          <CloseIcon sx={{ color: 'white', fontSize: 18 }} />
        </IconButton>
      )}

      <Typography variant="sub2" color="white" sx={{ flex: 1, textAlign: 'center' }}>
        {fileName}
      </Typography>

      <AttachFile sx={{ color: 'white', fontSize: 18 }} />
    </Box>
  );
}
