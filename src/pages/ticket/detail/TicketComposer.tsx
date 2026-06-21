import { useRef, useState } from 'react';
import { Box, Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { uploadTicketAttachmentReq } from '@/api';
import TicketAttachmentChip from './TicketAttachmentChip';

interface TicketComposerProps {
  onSend: (payload: { message: string; attachment_url?: string }) => void;
  isSending: boolean;
  disabled?: boolean;
}

export default function TicketComposer({
  onSend,
  isSending,
  disabled,
}: TicketComposerProps) {
  const theme = useTheme();
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [attachmentUrl, setAttachmentUrl] = useState<string | undefined>();
  const [isUploading, setIsUploading] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];
    if (!selected) return;

    setSizeError(false);

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
    if (!allowedTypes.includes(selected.type)) {
      toast.error('فرمت فایل مجاز نیست');
      return;
    }

    if (selected.size > 10 * 1024 * 1024) {
      setSizeError(true);
      return;
    }

    setFile(selected);

    try {
      setIsUploading(true);
      const { attachment_url } = await uploadTicketAttachmentReq(selected);
      setAttachmentUrl(attachment_url);
    } catch {
      toast.error('آپلود فایل با خطا مواجه شد');
      handleRemoveFile();
    } finally {
      setIsUploading(false);
    }
  }

  function handleRemoveFile() {
    setFile(null);
    setAttachmentUrl(undefined);
    setSizeError(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleSend() {
    if (!message.trim() && !attachmentUrl) return;

    onSend({ message: message.trim(), attachment_url: attachmentUrl });
    setMessage('');
    handleRemoveFile();
  }

  return (
    <Stack sx={{ width: '100%', px: 2, pb: 2 }} spacing={1}>
      <TextField
        multiline
        minRows={4}
        maxRows={8}
        fullWidth
        placeholder="پیام خود را اینجا تایپ کنید"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={disabled}
        sx={{
          bgcolor: 'white',
          borderRadius: '4px',
          '& .MuiInputBase-input': { direction: 'rtl', textAlign: 'right' },
        }}
      />

      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".jpg,.jpeg,.png,.gif,.mp4"
        onChange={handleFileSelect}
        disabled={!!file || disabled}
      />

      {sizeError && (
        <Box
          onClick={() => setSizeError(false)}
          sx={{
            bgcolor: 'error.main',
            borderRadius: '8px',
            px: 2,
            py: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
        >
          <Typography variant="sub2" color="white">
            فایل ضمیمه بیش از ۱۰ مگابایت است
          </Typography>
        </Box>
      )}

      {file && !sizeError && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TicketAttachmentChip fileName={file.name} onRemove={handleRemoveFile} />
        </Box>
      )}

      {!file && !sizeError && (
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <Typography variant="sub3" color="custom.grey3" textAlign="center">
            اگر قصد ارسال فایل دارید، از اینجا انتخاب کنید
            <br />
            (تا ۱۰ مگابایت | فرمت‌های jpg, png, gif, mp4)
          </Typography>
          <AttachFile
            sx={{ color: 'custom.grey3', cursor: 'pointer' }}
            onClick={() => fileInputRef.current?.click()}
          />
        </Stack>
      )}

      <Button
        variant="contained"
        fullWidth
        onClick={handleSend}
        disabled={
          disabled || isSending || isUploading || (!message.trim() && !attachmentUrl)
        }
      >
        {isSending ? 'در حال ارسال...' : 'ارسال پیام'}
      </Button>
    </Stack>
  );
}
