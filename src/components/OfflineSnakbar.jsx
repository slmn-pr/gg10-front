import useOnlineStatus from '@/hooks/useOnlineStatus';

import ErrorSnakBar from './snackbar/ErrorSnakBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OfflineSnakbar() {
  const isOnline = useOnlineStatus();

  const [isOpen, setIsOpen] = useState(!isOnline);

  function handleAction() {
    window.location.reload();
  }

  return (
    <ErrorSnakBar
      open={isOpen}
      message="اتصال خود به اینترنت را بررسی و مجددا تلاش کنید."
      actionText="تلاش مجدد"
      onAction={handleAction}
      onClose={() => setIsOpen(false)}
    />
  );
}
