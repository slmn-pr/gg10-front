import { Button, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { WalletBalanceSummary } from './WalletBalanceSummary.jsx';
import { WalletFormField } from './WalletFormField.jsx';
import { WalletSidePageHeader, WalletSidePageShell } from './WalletSidePageShell.jsx';
import { WalletStatusNotice } from './WalletStatusNotice.jsx';

const normalizeAmount = (value) => Number(value.replace(/[^\d]/g, ''));

export const WalletMoneyFlowForm = ({ config, type }) => {
  const [value, setValue] = useState('');
  const [notice, setNotice] = useState(null);

  const helperError = useMemo(() => {
    if (!notice || notice.type !== 'error') return '';
    return notice.text;
  }, [notice]);

  const handleSubmit = () => {
    if (type === 'gift') {
      const isValidGiftCode = value.trim().toUpperCase() === 'GG10-2026';
      setNotice({
        type: isValidGiftCode ? 'success' : 'error',
        text: isValidGiftCode ? config.successMessage : config.minError,
      });
      return;
    }

    const amount = normalizeAmount(value);
    if (!amount || amount < 50000) {
      setNotice({ type: 'error', text: config.minError });
      return;
    }
    if (amount > config.maxAmount) {
      setNotice({ type: 'error', text: config.maxError });
      return;
    }
    setNotice({ type: 'success', text: config.successMessage });
  };

  return (
    <WalletSidePageShell>
      <WalletSidePageHeader {...config} />
      <Stack sx={{ width: 'calc(100% - 32px)', pt: 1 }} gap={2}>
        <Stack
          sx={{
            minHeight: 202,
            bgcolor: 'custom.bg2',
            borderRadius: '8px',
            p: 2,
          }}
          gap={2}
        >
          <WalletFormField
            label={config.inputLabel}
            helper={config.helper}
            error={helperError}
            suffix={config.suffix}
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
              setNotice(null);
            }}
            placeholder={config.placeholder}
          />
          {config.presets.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {config.presets.map((preset) => (
                <Button
                  key={preset}
                  onClick={() => setValue(preset)}
                  sx={{
                    flex: '1 0 calc(50% - 4px)',
                    height: 38,
                    bgcolor: 'custom.grey5',
                    color: 'custom.white',
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'custom.grey4' },
                  }}
                >
                  <Typography variant="caption1">{preset} تومان</Typography>
                </Button>
              ))}
            </Stack>
          )}
        </Stack>

        {notice && <WalletStatusNotice type={notice.type} text={notice.text} />}

        <WalletBalanceSummary />

        <Button
          onClick={handleSubmit}
          sx={{
            height: 48,
            borderRadius: '8px',
            bgcolor: 'primary.main',
            color: 'custom.white',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          <Typography variant="button1">{config.primaryLabel}</Typography>
        </Button>
      </Stack>
    </WalletSidePageShell>
  );
};
