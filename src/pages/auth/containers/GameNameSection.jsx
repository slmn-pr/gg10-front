import {
  Box,
  Button,
  Drawer,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import InputLoading from '../../../components/form/InputLoading';
import CircleCheckIcon from '../../../components/icons/CircleCheckIcon';
import CloseIcon from '@/components/icons/general/CloseIcon';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import useCreateUser from '../hooks/useCreateUser';
import toast from 'react-hot-toast';
import ButtonLoading from '@/components/form/ButtonLoading';
import useAuthStore from '@/store/auth-store';
import useSaveUserAuth from '../hooks/useSaveUserAuth';

export default function GameNameSection() {
  const theme = useTheme();
  const { setStep, phoneNumber, password } = useStep();
  const { mutate, isPending } = useCreateUser();
  const { setAuth } = useAuthStore();

  const saveAuth = useSaveUserAuth(setAuth);

  console.log('STORE', setAuth);

  const [gameName, setGameName] = useState('');
  const [openHelp, setOpenHelp] = useState(false);

  // TODO: Add real state for checking name exist from database
  // These are fake to test app
  const isCheckingName = false;
  const isNameAvailable = true;

  const handleOpenHelpModal = () => {
    setOpenHelp(true);
  };

  const onSuccess = (data) => {
    setStep(STEP_TYPES.SUCCESS_SIGNUP);

    saveAuth(data);
  };
  const onError = () => {
    toast.error('نام قبلا ثبت شده است!');
  };

  const handleSubmit = () => {
    mutate(
      {
        password: password,
        phone_number: phoneNumber,
        username: gameName,
      },
      { onSuccess, onError },
    );
  };

  return (
    <Box>
      {/* LOgo */}
      <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
        <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
      </Box>

      {/* Labels Title, Description, Link */}
      <Box sx={{ mt: '60px', mb: '8px' }}>
        <Typography variant="title3" color="white" component="p">
          اسم گیم خود را ثبت کنید
        </Typography>

        {/* Description */}
        <Typography
          variant="sub1"
          color="white"
          component="p"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>اسم شما باید دقیقا منطبق با نام شما در گیم باشد</span>

          <Link onClick={handleOpenHelpModal}>راهنما</Link>
        </Typography>
      </Box>

      {/* Input */}
      <Box>
        <TextField
          placeholder="اسم شما در بازی CODM"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          sx={{
            '& .MuiInputBase-input': {
              color: isNameAvailable
                ? theme.palette.custom.success
                : theme.palette.custom.errorOnTertiaryBg,
            },
            // For standard variant (underline)
            '& .MuiInput-underline:after': {
              borderBottomColor: isNameAvailable
                ? theme.palette.custom.success
                : theme.palette.custom.errorOnTertiaryBg,
            },
            '& .MuiInput-underline:before': {
              borderBottomColor: isNameAvailable
                ? theme.palette.custom.success
                : theme.palette.custom.errorOnTertiaryBg,
            },
            // For outlined variant
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: isNameAvailable
                  ? theme.palette.custom.success
                  : theme.palette.custom.errorOnTertiaryBg,
              },
              '&:hover fieldset': {
                borderColor: isNameAvailable
                  ? theme.palette.custom.success
                  : theme.palette.custom.errorOnTertiaryBg,
              },
              '&.Mui-focused fieldset': {
                borderColor: isNameAvailable
                  ? theme.palette.custom.success
                  : theme.palette.custom.errorOnTertiaryBg,
              },
            },
          }}
          slotProps={{
            input: {
              endAdornment: isCheckingName ? (
                <InputAdornment position="end">
                  <InputLoading />
                </InputAdornment>
              ) : isNameAvailable ? (
                <InputAdornment position="end">
                  <CircleCheckIcon />
                </InputAdornment>
              ) : null,
            },
          }}
        />
        {/* Error text */}
        {!isNameAvailable && (
          <Typography
            variant="sub2"
            color="custom.errorOnPrimaryBg"
            component="p"
            sx={{ mt: '8px', paddingRight: '16px' }}
          >
            این نام در GG10 وجود دارد و تکراری است.
          </Typography>
        )}

        {/* Helper text */}
        <List sx={{ listStyle: 'disc', paddingRight: '16px' }}>
          <Typography variant="sub2" color="white" component="p">
            دقت کنید اگر نام واردشده با اسم شما در گیم یکسان نباشد:
          </Typography>

          <ListItem>
            <ListItemText>حق شرکت در لابی‌ها را نخواهید داشت</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              کمترین زمان مجاز برای تغییر نام، یک هفته خواهد بود
            </ListItemText>
          </ListItem>
        </List>
      </Box>

      {/* Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '80px' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '252px', height: '40px', mx: 'auto' }}
          disabled={!isNameAvailable || isPending}
          onClick={handleSubmit}
        >
          {!isPending && <> تایید و ثبت</>}
          {isPending && <ButtonLoading />}
        </Button>
      </Box>

      {/* Help Modal */}
      <Drawer open={openHelp} onClose={() => setOpenHelp(false)} anchor="bottom">
        <Box
          sx={{
            backgroundColor: theme.palette.custom.grey7,
            height: '235px',
          }}
        >
          {/* Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ direction: 'rtl', width: '100%', mb: '12px' }}
          >
            <Typography variant="title3" color="white" component="p">
              راهنما
            </Typography>
            <IconButton onClick={() => setOpenHelp(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* Body */}
          <Box>
            <Typography variant="sub1" color="white" component="p" mb="28px">
              منظور از نام شما در گیم، قسمت مشخص‌شده در تصویر زیر است:
            </Typography>

            <img src="/images/help_game_name.png" alt="help-modal" />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
