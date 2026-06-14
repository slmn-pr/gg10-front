import VisibilyOffIcon from '@/components/icons/VisibilyOffIcon';
import VisibilyOnIcon from '@/components/icons/VisibilyOnIcon';
import { IconButton, TextField } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

interface PasswordInputProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  hasError?: boolean;
}

export default function PasswordInput({
  password,
  setPassword,
  hasError,
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      type={isVisible ? 'text' : 'password'}
      placeholder="رمز عبور"
      value={password}
      onChange={(event) => {
        setPassword(event.target.value);
      }}
      error={hasError}
      sx={{ direction: 'rtl' }}
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <VisibilyOffIcon /> : <VisibilyOnIcon />}
            </IconButton>
          ),
        },
      }}
    />
  );
}
