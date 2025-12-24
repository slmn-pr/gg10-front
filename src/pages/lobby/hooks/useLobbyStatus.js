import { useMemo } from 'react';
import {
  LOBBY_STATUS,
  LOBBY_STATUS_TEXT,
  LOBBY_STATUS_TEXT_TO_NUMBER,
  NON_REGISTERABLE_STATUSES,
  STATUS_ERROR_MESSAGES,
} from '../constants/lobbyStatus';

/**
 * Custom hook to work with lobby status
 * @param {string|number} status - Status as text or number
 * @returns {object} Status utilities
 */
export const useLobbyStatus = (status) => {
  const statusNumber = useMemo(() => {
    if (typeof status === 'number') {
      return status;
    }
    return LOBBY_STATUS_TEXT_TO_NUMBER[status] || null;
  }, [status]);

  const statusText = useMemo(() => {
    if (typeof status === 'string') {
      return status;
    }
    return LOBBY_STATUS_TEXT[status] || null;
  }, [status]);

  const isRegisterable = useMemo(() => {
    if (!statusNumber) return false;
    return statusNumber === LOBBY_STATUS.REGISTERING;
  }, [statusNumber]);

  const isNotRegisterable = useMemo(() => {
    if (!statusNumber) return false;
    return NON_REGISTERABLE_STATUSES.includes(statusNumber);
  }, [statusNumber]);

  const getErrorMessage = useMemo(() => {
    if (!statusNumber || !isNotRegisterable) {
      return '';
    }
    return STATUS_ERROR_MESSAGES[statusNumber] || '';
  }, [statusNumber, isNotRegisterable]);

  return {
    statusNumber,
    statusText,
    isRegisterable,
    isNotRegisterable,
    getErrorMessage,
  };
};
