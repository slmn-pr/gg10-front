// src/pages/lobby/hooks/useLobbyStatus.ts

import { useMemo } from 'react';
import {
  LOBBY_STATUS,
  LOBBY_STATUS_TEXT,
  NON_REGISTERABLE_STATUSES,
  STATUS_ERROR_MESSAGES,
} from '../constants/lobbyStatus';
import type { LobbyStatus } from '../constants/lobbyStatus';

interface UseLobbyStatusReturn {
  statusText: string;
  isRegisterable: boolean;
  isNotRegisterable: boolean;
  getErrorMessage: string;
}

export const useLobbyStatus = (status: LobbyStatus | undefined): UseLobbyStatusReturn => {
  const statusText = useMemo(() => {
    if (!status) return '';
    return LOBBY_STATUS_TEXT[status] ?? '';
  }, [status]);

  const isRegisterable = useMemo(() => {
    if (!status) return false;
    return status === LOBBY_STATUS.REGISTERING;
  }, [status]);

  const isNotRegisterable = useMemo(() => {
    if (!status) return false;
    return NON_REGISTERABLE_STATUSES.includes(status);
  }, [status]);

  const getErrorMessage = useMemo(() => {
    if (!status || !isNotRegisterable) return '';
    return STATUS_ERROR_MESSAGES[status] ?? '';
  }, [status, isNotRegisterable]);

  return {
    statusText,
    isRegisterable,
    isNotRegisterable,
    getErrorMessage,
  };
};
