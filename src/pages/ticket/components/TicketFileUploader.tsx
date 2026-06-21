import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { AttachFile } from '@mui/icons-material';
import toast from 'react-hot-toast';
import { uploadTicketAttachmentReq } from '@/api';

export default function TicketFileUploader() {
  const theme = useTheme();
  const [isUploading, setIsUploading] = useState(false);

  const {
    setValue,
    watch,
    formState: { errors },
    resetField,
  } = useFormContext();
  const selectedFile = watch('file');

  const fileInputRef = useRef<HTMLInputElement>(null);

  function cleanup(): void {
    resetField('file');
    resetField('attachment_url');
  }

  async function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];

    if (!allowedTypes.includes(file.type)) {
      toast.error('فرمت فایل مجاز نیست');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error('حجم فایل نباید بیشتر از 10 مگابایت باشد');
      return;
    }

    setValue('file', file, { shouldValidate: true });

    try {
      setIsUploading(true);
      const { attachment_url } = await uploadTicketAttachmentReq(file);
      setValue('attachment_url', attachment_url, { shouldValidate: true });
    } catch (err) {
      toast.error('آپلود فایل با خطا مواجه شد');
      cleanup();
    } finally {
      setIsUploading(false);
    }
  }

  function handleRemoveFile() {
    cleanup();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".jpg,.jpeg,.png,.gif,.mp4"
        onChange={handleFileSelect}
        disabled={!!selectedFile}
      />
      {selectedFile ? (
        <Box
          onClick={() => fileInputRef.current?.click()}
          sx={{
            width: '100%',
            height: '145px',
            border: `1px dashed ${errors.file ? theme.palette.error.main : '#D90251'}`,
            background: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            {isUploading ? (
              <CircularProgress size={20} />
            ) : (
              <AttachFile sx={{ color: theme.palette.custom.grey3 }} />
            )}

            <Stack direction="row" alignItems="center">
              <Typography variant="sub2" color="custom.grey3">
                {selectedFile?.name}
              </Typography>
              <IconButton onClick={handleRemoveFile} disabled={isUploading}>
                <DeleteOutlineIcon sx={{ color: theme.palette.custom.grey3 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Box
          onClick={() => fileInputRef.current?.click()}
          sx={{
            width: '100%',
            height: '145px',
            border: `1px dashed ${errors.file ? theme.palette.error.main : '#D90251'}`,
            background: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="title3"
            color={errors.file ? 'error.main' : 'custom.grey3'}
            textAlign="center"
          >
            فایل ضمیمه (اختیاری)
          </Typography>

          <Stack direction="row" justifyContent="center" alignItems="center">
            <AttachFile sx={{ color: theme.palette.custom.grey3 }} />
            <Stack>
              <Typography variant="sub2" color="custom.grey3">
                اگر قصد ارسال فایل دارید، از اینجا انتخاب کنید
              </Typography>
              <Typography variant="sub2" color="custom.grey3">
                (تا 10 مگابایت | فرمت‌های jpg, png, gif, mp4)
              </Typography>
            </Stack>
          </Stack>
        </Box>
      )}
    </>
  );
}
