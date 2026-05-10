import useOnlineStatus from '@/hooks/useOnlineStatus';

import ErrorSnakBar from './snackbar/ErrorSnakBar';
import { useState } from 'react';

export default function OfflineSnakbar() {
  const isOnline = useOnlineStatus();

  const [isOpen, setIsOpen] = useState(!isOnline);
  // const [isOpen, setIsOpen] = useState(true);

  function handleAction() {
    window.location.reload();
  }

  return (
    <ErrorSnakBar
      bottom="10px"
      open={isOpen}
      message="اتصال خود به اینترنت را بررسی و مجددا تلاش کنید."
      actionText="تلاش مجدد"
      onAction={handleAction}
      onClose={() => setIsOpen(false)}
    />
  );
}
