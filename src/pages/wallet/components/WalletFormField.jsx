import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';

export const WalletFormField = ({
  label,
  helper,
  error,
  suffix,
  value,
  onChange,
  placeholder,
}) => (
  <FormControl error={Boolean(error)} sx={{ width: '100%' }} variant="outlined">
    <Typography variant="sub2" color="custom.white" sx={{ mb: 0.75 }}>
      {label}
    </Typography>
    <OutlinedInput
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      endAdornment={
        suffix ? (
          <InputAdornment position="end">
            <Typography variant="caption1" color="custom.grey2">
              {suffix}
            </Typography>
          </InputAdornment>
        ) : null
      }
      sx={{
        height: 56,
        borderRadius: '8px',
        bgcolor: 'custom.white',
        color: 'custom.black',
        direction: 'rtl',
        '& input': {
          textAlign: 'right',
          fontFamily: 'Estedad-FD, sans-serif',
        },
        '& fieldset': {
          borderColor: error ? 'custom.error' : 'transparent',
        },
      }}
    />
    <FormHelperText sx={{ mx: 0, mt: 0.75, color: error ? 'custom.errorOnPrimaryBg' : 'custom.grey1' }}>
      {error || helper}
    </FormHelperText>
  </FormControl>
);
