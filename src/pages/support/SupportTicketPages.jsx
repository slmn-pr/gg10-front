import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, PrimaryButton } from '@/pages/user/pages/profile/shared/ui.jsx';
import SupportPageShell from './SupportPageShell.jsx';
import { supportRouteBase } from './utils.js';
import ServerErrorIcon from '@/assets/icons/General icons/server error.svg';
import InternetErrorIcon from '@/assets/icons/General icons/internet error.svg';
import NotificationIcon from '@/assets/icons/General icons/notifications.svg';

const TicketTopActions = ({ mode = 'list', hasActiveTicket = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const base = supportRouteBase(location.pathname);

  const goSubmit = () => {
    if (hasActiveTicket) {
      navigate(`${base}/tickets/has-ticket/error`);
      return;
    }
    navigate(`${base}/tickets/submit`);
  };

  return (
    <Stack direction="row-reverse" gap={1}>
      <Button
        onClick={() => navigate(`${base}/tickets/has-ticket/default`)}
        fullWidth
        sx={{
          height: 42,
          borderRadius: '8px',
          bgcolor: mode === 'list' ? 'primary.main' : 'custom.bg2',
          color: 'custom.white',
          '&:hover': { bgcolor: mode === 'list' ? 'primary.dark' : 'custom.grey6' },
        }}
      >
        تیکت های من
      </Button>
      <Button
        onClick={goSubmit}
        fullWidth
        sx={{
          height: 42,
          borderRadius: '8px',
          bgcolor: mode === 'new' ? 'primary.main' : 'custom.bg2',
          color: 'custom.white',
          '&:hover': { bgcolor: mode === 'new' ? 'primary.dark' : 'custom.grey6' },
        }}
      >
        ثبت تیکت جدید
      </Button>
    </Stack>
  );
};

const SupportTicketShell = ({ title, subtitle, mode = 'list', hasActiveTicket = false, children }) => (
  <SupportPageShell title="تیکت پشتیبانی">
    <TicketTopActions mode={mode} hasActiveTicket={hasActiveTicket} />
    <Card sx={{ p: 2 }}>
      <Stack gap={0.75} alignItems="flex-end">
        <Typography variant="title3" color="custom.white" textAlign="right">
          {title}
        </Typography>
        <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={2}>
          {subtitle}
        </Typography>
      </Stack>
    </Card>
    {children}
  </SupportPageShell>
);

const SupportTicketMetaCard = ({ status, updatedAt }) => (
  <Card sx={{ p: 2 }}>
    <Stack gap={1.25}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="title3" color="custom.white">
          وضعیت
        </Typography>
        <Typography variant="caption1" color={status === 'باز' ? 'custom.success' : 'custom.errorOnPrimaryBg'}>
          {status}
        </Typography>
      </Stack>
      <Divider sx={{ borderColor: 'custom.grey6' }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="caption1" color="custom.grey0">
          آخرین بروزرسانی
        </Typography>
        <Typography variant="caption1" color="custom.white">
          {updatedAt}
        </Typography>
      </Stack>
    </Stack>
  </Card>
);

const TicketSummaryCard = () => (
  <Card sx={{ p: 2 }}>
    <Stack gap={1}>
      <Typography variant="title3" color="custom.white" textAlign="right">
        #894521 - مشکل پرداخت جایزه
      </Typography>
      <Typography variant="caption1" color="custom.grey1" textAlign="right">
        دسته‌بندی: پرداخت و کیف پول
      </Typography>
      <Divider sx={{ borderColor: 'custom.grey6' }} />
      <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={2}>
        جایزه برد من در لابی ثبت شده اما به کیف پول اضافه نشده است. لطفا بررسی کنید.
      </Typography>
    </Stack>
  </Card>
);

const StateIconChip = ({ src, bg = 'rgba(228,11,90,0.12)' }) => (
  <Box
    sx={{
      width: 44,
      height: 44,
      borderRadius: '12px',
      bgcolor: bg,
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <Box component="img" src={src} alt="" sx={{ width: 24, height: 24 }} />
  </Box>
);

const TicketConversationPreview = ({ error = false }) => (
  <Card sx={{ p: 2 }}>
    <Stack gap={1.25} alignItems="flex-end">
      <Typography variant="sub1" color="custom.white">
        گفت‌وگو
      </Typography>
      <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={2}>
        {error
          ? 'در حال حاضر یک تیکت فعال دارید. تا زمان پاسخ‌گویی یا بسته شدن تیکت فعلی امکان ثبت تیکت جدید وجود ندارد.'
          : 'درخواست شما دریافت شد و همکاران پشتیبانی در اسرع وقت پاسخ می‌دهند. می‌توانید پاسخ‌ها را از همین صفحه پیگیری کنید.'}
      </Typography>
    </Stack>
  </Card>
);

const TicketSubmitForm = ({ showErrors = false, filled = false, submitPath }) => {
  const navigate = useNavigate();
  const fieldStyle = {
    width: '100%',
    border: '1px solid',
    borderColor: 'custom.grey5',
    borderRadius: '8px',
    bgcolor: 'custom.grey7',
    color: 'custom.white',
    px: 1.5,
    py: 1.25,
    textAlign: 'right',
    fontFamily: 'inherit',
    fontSize: 14,
  };

  return (
    <Card sx={{ p: 2 }}>
      <Stack gap={1.25}>
        <Box component="input" placeholder="عنوان تیکت" defaultValue={filled ? 'مشکل واریز جایزه' : ''} sx={fieldStyle} />
        {showErrors && (
          <Typography variant="caption1" color="custom.errorOnPrimaryBg" textAlign="right">
            عنوان تیکت الزامی است.
          </Typography>
        )}
        <Box component="input" placeholder="دسته‌بندی" defaultValue={filled ? 'پرداخت و کیف پول' : ''} sx={fieldStyle} />
        {showErrors && (
          <Typography variant="caption1" color="custom.errorOnPrimaryBg" textAlign="right">
            انتخاب دسته‌بندی الزامی است.
          </Typography>
        )}
        <Box
          component="textarea"
          rows={4}
          placeholder="شرح کامل مشکل را بنویسید"
          defaultValue={filled ? 'پرداخت من ثبت شده اما موجودی کیف پول بروزرسانی نشده است.' : ''}
          sx={{ ...fieldStyle, resize: 'none' }}
        />
        {showErrors && (
          <Typography variant="caption1" color="custom.errorOnPrimaryBg" textAlign="right">
            توضیحات تیکت الزامی است.
          </Typography>
        )}
        <PrimaryButton disabled={!filled} onClick={filled ? () => navigate(submitPath) : undefined}>
          ارسال تیکت
        </PrimaryButton>
      </Stack>
    </Card>
  );
};

export const SupportTicketsNoTicketPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const base = supportRouteBase(location.pathname);

  return (
    <SupportTicketShell
      title="تیکت فعالی ندارید"
      subtitle="اگر با مشکلی در حساب، لابی یا پرداخت روبه‌رو هستید یک تیکت جدید ثبت کنید."
      mode="list"
    >
      <Card sx={{ p: 2 }}>
        <Stack gap={1.5} alignItems="center">
          <StateIconChip src={InternetErrorIcon} bg="rgba(255,255,255,0.08)" />
          <Typography variant="caption1" color="custom.grey1" textAlign="center" lineHeight={2}>
            هنوز هیچ درخواست فعالی ثبت نشده است.
          </Typography>
          <PrimaryButton onClick={() => navigate(`${base}/tickets/submit`)}>ایجاد تیکت جدید</PrimaryButton>
        </Stack>
      </Card>
    </SupportTicketShell>
  );
};

export const SupportTicketsSubmitPage = () => {
  const location = useLocation();
  const base = supportRouteBase(location.pathname);

  return (
    <SupportTicketShell title="ثبت تیکت پشتیبانی" subtitle="مشکل خود را دقیق بنویسید تا پیگیری سریع‌تر انجام شود." mode="new">
      <TicketSubmitForm submitPath={`${base}/tickets/has-ticket/default`} />
    </SupportTicketShell>
  );
};

export const SupportTicketsSubmitRequiredErrorsPage = () => {
  const location = useLocation();
  const base = supportRouteBase(location.pathname);

  return (
    <SupportTicketShell title="ثبت تیکت پشتیبانی" subtitle="برای ارسال تیکت، فیلدهای ضروری را کامل کنید." mode="new">
      <TicketSubmitForm showErrors submitPath={`${base}/tickets/has-ticket/default`} />
    </SupportTicketShell>
  );
};

export const SupportTicketsSubmitFieldsFilledPage = () => {
  const location = useLocation();
  const base = supportRouteBase(location.pathname);

  return (
    <SupportTicketShell title="ثبت تیکت پشتیبانی" subtitle="اطلاعات کامل است و می‌توانید تیکت را ارسال کنید." mode="new">
      <TicketSubmitForm filled submitPath={`${base}/tickets/has-ticket/default`} />
    </SupportTicketShell>
  );
};

export const SupportTicketsHasTicketDefaultPage = () => (
  <SupportTicketShell
    title="تیکت فعال شما"
    subtitle="جزئیات تیکت فعال و پاسخ تیم پشتیبانی را از این صفحه دنبال کنید."
    mode="list"
    hasActiveTicket
  >
    <Stack gap={1.5}>
      <Stack direction="row-reverse" alignItems="center" gap={1}>
        <Typography variant="caption1" color="custom.grey1">
          تیکت در صف پاسخ‌گویی
        </Typography>
        <StateIconChip src={NotificationIcon} />
      </Stack>
      <SupportTicketMetaCard status="باز" updatedAt="۱۴۰۵/۰۳/۰۵ - ۱۴:۲۵" />
      <TicketSummaryCard />
      <TicketConversationPreview />
    </Stack>
  </SupportTicketShell>
);

export const SupportTicketsHasTicketErrorPage = () => (
  <SupportTicketShell title="تیکت فعال شما" subtitle="امکان ثبت همزمان چند تیکت وجود ندارد." mode="list" hasActiveTicket>
    <Stack gap={1.5}>
      <Stack direction="row-reverse" alignItems="center" gap={1}>
        <Typography variant="caption1" color="custom.errorOnPrimaryBg">
          ثبت تیکت جدید امکان‌پذیر نیست
        </Typography>
        <StateIconChip src={ServerErrorIcon} bg="rgba(254,58,58,0.14)" />
      </Stack>
      <SupportTicketMetaCard status="خطا" updatedAt="۱۴۰۵/۰۳/۰۵ - ۱۴:۲۵" />
      <TicketSummaryCard />
      <TicketConversationPreview error />
    </Stack>
  </SupportTicketShell>
);
