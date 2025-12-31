import { Box, FormControl, Stack, TextField, Typography, useTheme } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';

const FieldLoading = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap="6px">
      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor:
            activeIndex === 0 ? theme.palette.primary.main : theme.palette.custom.grey1,
        }}
      ></Box>

      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor:
            activeIndex === 1 ? theme.palette.primary.main : theme.palette.custom.grey1,
        }}
      ></Box>

      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor:
            activeIndex === 2 ? theme.palette.primary.main : theme.palette.custom.grey1,
        }}
      ></Box>
    </Stack>
  );
};

export default function FormField({
  name,
  label,
  placeholder,
  helperText,
  required = false,
  showLoading = false,
  ...textFieldProps
}) {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];
  const errorMessage = error?.message;

  return (
    <FormControl>
      <Typography variant="title3" color="white" textAlign="right" component="p">
        {label}
      </Typography>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            {...textFieldProps}
            variant="outlined"
            color="primary"
            placeholder={placeholder}
            fullWidth
            required={required}
            sx={{ mt: '8px' }}
            error={!!error}
            helperText={errorMessage || helperText}
            InputProps={{
              endAdornment: showLoading ? <FieldLoading /> : null,
              ...textFieldProps.InputProps,
            }}
          />
        )}
      />
    </FormControl>
  );
}
