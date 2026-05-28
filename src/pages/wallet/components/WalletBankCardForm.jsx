import { AccountBalanceOutlined, CreditCardOutlined } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { WalletFormField } from './WalletFormField.jsx';
import { WalletSidePageHeader, WalletSidePageShell } from './WalletSidePageShell.jsx';
import { WalletStatusNotice } from './WalletStatusNotice.jsx';

export const WalletBankCardForm = ({ config }) => {
  const [cardNumber, setCardNumber] = useState(config.initialCardNumber);
  const [cardName, setCardName] = useState(config.initialCardName);
  const [notice, setNotice] = useState(null);

  const handleSubmit = () => {
    if (cardNumber.replace(/\s/g, '').length < 16 || cardName.trim().length < 3) {
      setNotice({ type: 'error', text: 'شماره کارت یا نام صاحب کارت کامل نیست.' });
      return;
    }
    setNotice({ type: 'success', text: config.successMessage });
  };

  return (
    <WalletSidePageShell>
      <WalletSidePageHeader {...config} icon={CreditCardOutlined} />
      <Stack sx={{ width: 'calc(100% - 32px)', pt: 1 }} gap={2}>
        <Stack
          sx={{
            minHeight: 168,
            p: 2,
            borderRadius: '8px',
            bgcolor: 'custom.bg2',
            background: 'linear-gradient(135deg, #212121 0%, #161616 54%, #48011B 100%)',
          }}
          justifyContent="space-between"
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <AccountBalanceOutlined sx={{ color: 'primary.main' }} />
            <Typography variant="caption1" color="custom.grey0">
              کارت بانکی
            </Typography>
          </Stack>
          <Stack alignItems="flex-end" gap={0.5}>
            <Typography variant="title3" color="custom.white" sx={{ direction: 'ltr' }}>
              {cardNumber || '---- ---- ---- ----'}
            </Typography>
            <Typography variant="caption1" color="custom.grey1">
              {cardName || 'نام صاحب کارت'}
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', p: 2 }} gap={2}>
          <WalletFormField
            label="شماره کارت"
            helper="شماره کارت باید متعلق به حساب خودتان باشد."
            error=""
            suffix=""
            value={cardNumber}
            onChange={setCardNumber}
            placeholder="شماره ۱۶ رقمی کارت"
          />
          <WalletFormField
            label="نام صاحب کارت"
            helper="نام و نام خانوادگی صاحب کارت را وارد کنید."
            error=""
            suffix=""
            value={cardName}
            onChange={setCardName}
            placeholder="مثلا امیر محمدی"
          />
        </Stack>

        {notice && <WalletStatusNotice type={notice.type} text={notice.text} />}

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
