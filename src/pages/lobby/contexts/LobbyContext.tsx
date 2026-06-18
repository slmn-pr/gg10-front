import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import type { LobbyDetailResponse } from '@/api/lobbies/lobbies';
import { useLobbyStatus } from '../hooks/useLobbyStatus';
import ErrorSnakBar from '@/components/snackbar/ErrorSnakBar';

// ==================== Types ====================

interface LobbyContextValue {
  lobbyData: LobbyDetailResponse;
  updateLobbyData: (newData: Partial<LobbyDetailResponse>) => void;
  errorSnackbarOpen: boolean;
  getErrorMessage: string;
  showErrorIfNotRegisterable: () => void;
  closeErrorSnackbar: () => void;
  isRegisterable: boolean;
  isNotRegisterable: boolean;
}

interface LobbyProviderProps {
  children: React.ReactNode;
  initialLobbyData: LobbyDetailResponse;
}

// ==================== Context ====================

const LobbyContext = createContext<LobbyContextValue | null>(null);

export const useLobbyContext = (): LobbyContextValue => {
  const context = useContext(LobbyContext);
  if (!context) {
    throw new Error('useLobbyContext must be used within LobbyProvider');
  }
  return context;
};

// ==================== Provider ====================

export const LobbyProvider = ({ children, initialLobbyData }: LobbyProviderProps) => {
  const [lobbyData, setLobbyData] = useState<LobbyDetailResponse>(initialLobbyData);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  const { isRegisterable, isNotRegisterable, getErrorMessage } = useLobbyStatus(
    lobbyData?.status,
  );

  const updateLobbyData = useCallback((newData: Partial<LobbyDetailResponse>) => {
    setLobbyData((prev) => ({ ...prev, ...newData }));
  }, []);

  const showErrorIfNotRegisterable = useCallback(() => {
    if (isNotRegisterable) {
      setErrorSnackbarOpen(true);
    }
  }, [isNotRegisterable]);

  const closeErrorSnackbar = useCallback(() => {
    setErrorSnackbarOpen(false);
  }, []);

  // Show error snackbar on initial load if status is not registerable
  useEffect(() => {
    if (lobbyData?.status && isNotRegisterable) {
      setErrorSnackbarOpen(true);
    }
  }, [lobbyData?.status, isNotRegisterable]);

  // Sync lobbyData when initialLobbyData changes
  useEffect(() => {
    if (!initialLobbyData) return;

    const rafId = requestAnimationFrame(() => {
      setLobbyData(initialLobbyData);
    });

    return () => cancelAnimationFrame(rafId);
  }, [initialLobbyData]);

  const value = useMemo<LobbyContextValue>(
    () => ({
      lobbyData,
      updateLobbyData,
      errorSnackbarOpen,
      getErrorMessage,
      showErrorIfNotRegisterable,
      closeErrorSnackbar,
      isRegisterable,
      isNotRegisterable,
    }),
    [
      lobbyData,
      updateLobbyData,
      errorSnackbarOpen,
      getErrorMessage,
      showErrorIfNotRegisterable,
      closeErrorSnackbar,
      isRegisterable,
      isNotRegisterable,
    ],
  );

  return (
    <LobbyContext.Provider value={value}>
      {children}
      {errorSnackbarOpen && getErrorMessage && (
        <ErrorSnakBar
          open={errorSnackbarOpen}
          message={getErrorMessage}
          onClose={closeErrorSnackbar}
          actionText=""
          onAction={() => {}}
        />
      )}
    </LobbyContext.Provider>
  );
};
