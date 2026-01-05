# API Documentation

این دایرکتوری شامل تمام API routes و configuration های مربوط به ارتباط با backend است.

## ساختار

```
/src/api/
├── config.js          # Axios instance با interceptors
├── auth.js            # Auth endpoints (OTP, verify, create user)
├── lobbies.js         # Lobby endpoints
├── users.js           # User endpoints
├── health.js          # Health check endpoints
├── index.js           # Export تمام modules
└── hooks/             # React Query hooks
    ├── useAuth.js
    ├── useLobbies.js
    ├── useUsers.js
    └── index.js
```

## استفاده

### 1. استفاده مستقیم از API functions

```javascript
import { requestOTP, verifyOTP } from '@/api/auth';
import { getAllLobbies, createLobby } from '@/api/lobbies';
import { getMe } from '@/api/users';

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

// دریافت تمام لابی‌ها
const lobbies = await getAllLobbies({
  status: 'registering',
  game_mode: 'multiplayer',
  limit: 20,
  offset: 0,
});
```

### 2. استفاده با React Query Hooks

```javascript
import { useRequestOTP, useVerifyOTP } from '@/api/hooks/useAuth';
import { useGetAllLobbies, useCreateLobby } from '@/api/hooks/useLobbies';
import { useGetMe } from '@/api/hooks/useUsers';

function MyComponent() {
  // درخواست OTP
  const requestOTPMutation = useRequestOTP();

  const handleRequestOTP = async () => {
    try {
      const response = await requestOTPMutation.mutateAsync({
        phone_number: '09123456789',
        purpose: 'login',
      });
      console.log('OTP sent:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // دریافت لابی‌ها
  const {
    data: lobbies,
    isLoading,
    error,
  } = useGetAllLobbies({
    status: 'registering',
    game_mode: 'multiplayer',
  });

  // ایجاد لابی
  const createLobbyMutation = useCreateLobby();

  const handleCreateLobby = async () => {
    try {
      const response = await createLobbyMutation.mutateAsync({
        title: 'My Lobby',
        arrangement_id: 'uuid-here',
        entry_fee: 1000,
        total_prize: 5000,
        game_mode: 'multiplayer',
      });
      console.log('Lobby created:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // دریافت اطلاعات کاربر
  const { data: user, isLoading: userLoading } = useGetMe();

  return (
    <div>
      <button onClick={handleRequestOTP}>Request OTP</button>
      <button onClick={handleCreateLobby}>Create Lobby</button>

      {isLoading && <p>Loading lobbies...</p>}
      {lobbies?.map((lobby) => (
        <div key={lobby.id}>{lobby.title}</div>
      ))}
    </div>
  );
}
```

### 3. استفاده از apiClient مستقیم

```javascript
import apiClient from '@/api/config';

// درخواست سفارشی
const response = await apiClient.get('custom-endpoint');
const data = response.data;
```

## Configuration

### تنظیم Base URL

می‌توانید Base URL را از طریق متغیر محیطی تنظیم کنید:

```env
VITE_API_BASE_URL=http://localhost:8000
```

یا مستقیماً در `config.js` تغییر دهید.

### Interceptors

- **Request Interceptor**: به صورت خودکار access token را از auth store می‌گیرد و به header اضافه می‌کند
- **Response Interceptor**: خطاهای 401 را مدیریت می‌کند (می‌توانید refresh token logic را اضافه کنید)

## نکات مهم

1. تمام درخواست‌ها به صورت خودکار access token را در header اضافه می‌کنند
2. در صورت خطای 401، کاربر به صفحه auth هدایت می‌شود
3. React Query hooks به صورت خودکار cache و refetch را مدیریت می‌کنند
4. بعد از mutations موفق، cache به صورت خودکار invalidate می‌شود
