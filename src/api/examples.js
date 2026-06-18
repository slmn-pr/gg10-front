/**
 * مثال‌های استفاده از API
 * این فایل فقط برای راهنمایی است و در production استفاده نمی‌شود
 */

import { useRequestOTP, useVerifyOTP } from './hooks/useAuth';
import { useGetAllLobbies, useCreateLobby } from './hooks/useLobbies';
import { useGetMe } from './hooks/useUsers';
import useAuthStore from '@/store/auth-store';

/**
 * مثال 1: استفاده از OTP flow
 */
export function ExampleOTPFlow() {
  const requestOTP = useRequestOTP();
  const verifyOTP = useVerifyOTP();
  const authStore = useAuthStore();

  const handleRequestOTP = async () => {
    try {
      const response = await requestOTP.mutateAsync({
        phone_number: '09123456789',
        purpose: 'login', // 'login' | 'register' | 'password_reset'
      });

      console.log('OTP sent:', response);
      console.log('Expires at:', response.expires_at);
      console.log('Resend available at:', response.resend_available_at);
    } catch (error) {
      console.error('Error requesting OTP:', error);
    }
  };

  const handleVerifyOTP = async (code) => {
    try {
      const response = await verifyOTP.mutateAsync({
        phone_number: '09123456789',
        code: code,
        purpose: 'login',
      });

      // ذخیره tokens در auth store
      if (response.access_token && response.refresh_token) {
        authStore.setAuth(response.access_token, response.refresh_token);
      }

      // بررسی نیاز به تکمیل پروفایل
      if (response.requires_profile) {
        // هدایت به صفحه تکمیل پروفایل
        console.log('User needs to complete profile');
      }

      console.log('OTP verified:', response);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return { handleRequestOTP, handleVerifyOTP };
}

/**
 * مثال 2: استفاده از Lobbies
 */
export function ExampleLobbies() {
  const {
    data: lobbies,
    isLoading,
    error,
  } = useGetAllLobbies({
    status: 'registering',
    game_mode: 'multiplayer',
    limit: 20,
    offset: 0,
  });

  const createLobby = useCreateLobby();

  const handleCreateLobby = async () => {
    try {
      const response = await createLobby.mutateAsync({
        title: 'My Awesome Lobby',
        arrangement_id: 'uuid-here', // باید از API دیگری دریافت شود
        entry_fee: 1000,
        total_prize: 5000,
        game_mode: 'multiplayer',
        tags: ['competitive', 'ranked'],
        allowed_ranks: ['legend', 'master'],
        vip: false,
      });

      console.log('Lobby created:', response);
    } catch (error) {
      console.error('Error creating lobby:', error);
    }
  };

  return {
    lobbies,
    isLoading,
    error,
    handleCreateLobby,
  };
}

/**
 * مثال 3: استفاده از User API
 */
export function ExampleUser() {
  const { data: user, isLoading, error } = useGetMe();

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error loading user: {error.message}</div>;
  }

  return {
    user,
    username: user?.username,
    phoneNumber: user?.phone_number,
    rankPoints: {
      battle: user?.battle_rank_points,
      multiplayer: user?.multiplayer_rank_points,
    },
    stats: {
      lobbiesJoined: user?.total_lobbies_joined,
      lobbiesWon: user?.total_lobbies_won,
    },
  };
}

/**
 * مثال 4: استفاده مستقیم از API functions (بدون hooks)
 */
export async function exampleDirectAPI() {
  const { requestOTP, verifyOTP } = await import('./auth');
  const { getAllLobbies, getLobbyById } = await import('./lobbies/lobbies');

  try {
    // درخواست OTP
    const otpResponse = await requestOTP({
      phone_number: '09123456789',
      purpose: 'login',
    });

    // تایید OTP
    const verifyResponse = await verifyOTP({
      phone_number: '09123456789',
      code: '123456',
      purpose: 'login',
    });

    // دریافت لابی‌ها
    const lobbies = await getAllLobbies({
      status: 'registering',
      limit: 10,
    });

    // دریافت یک لابی خاص
    if (lobbies.length > 0) {
      const lobby = await getLobbyById(lobbies[0].id);
      console.log('Lobby details:', lobby);
    }
  } catch (error) {
    console.error('API Error:', error);
  }
}
