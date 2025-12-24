import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useLobbyStatus } from '../hooks/useLobbyStatus';
import ErrorSnakBar from '@/components/snackbar/ErrorSnakBar';

const LobbyContext = createContext(null);

export const useLobby = () => {
  const context = useContext(LobbyContext);
  if (!context) {
    throw new Error('useLobby must be used within LobbyProvider');
  }
  return context;
};

export const LobbyProvider = ({ children, initialLobbyData }) => {
  const [lobbyData, setLobbyData] = useState(initialLobbyData);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  // Use the lobby status hook
  const {
    isRegisterable,
    isNotRegisterable,
    getErrorMessage,
  } = useLobbyStatus(lobbyData?.status);

  // Update lobby data
  const updateLobbyData = useCallback((newData) => {
    setLobbyData((prev) => ({ ...prev, ...newData }));
  }, []);

  // Show error snackbar if status is not registerable
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

  // Update lobby data when initialLobbyData changes
  useEffect(() => {
    if (initialLobbyData) {
      setLobbyData(initialLobbyData);
    }
  }, [initialLobbyData]);

  const value = {
    lobbyData,
    updateLobbyData,
    errorSnackbarOpen,
    getErrorMessage,
    showErrorIfNotRegisterable,
    closeErrorSnackbar,
    isRegisterable,
    isNotRegisterable,
  };

  return (
    <LobbyContext.Provider value={value}>
      {children}
      {/* Error Snackbar for non-registerable lobbies */}
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

