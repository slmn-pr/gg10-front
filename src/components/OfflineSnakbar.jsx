import useOnlineStatus from '@/hooks/useOnlineStatus';

import ErrorSnakBar from './snackbar/ErrorSnakBar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function OfflineSnakbar() {
  const isOnline = useOnlineStatus();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(isOnline);

  return (
    <ErrorSnakBar
      open={isOpen}
      message="اتصال خود به اینترنت را بررسی و مجددا تلاش کنید."
      actionText="تلاش مجدد"
      onAction={() => navigate(-1)}
      onClose={() => setIsOpen(false)}
    />
  );
}
