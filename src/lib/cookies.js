import Cookies from 'universal-cookie';

export const cookies = new Cookies(null, { path: '/' });

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const getAccessToken = () => cookies.get(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => cookies.get(REFRESH_TOKEN_KEY);

export const setAuthTokens = (accessToken, refreshToken) => {
  cookies.set(ACCESS_TOKEN_KEY, accessToken, { path: '/' });
  cookies.set(REFRESH_TOKEN_KEY, refreshToken, { path: '/' });
};

export const clearAuthTokens = () => {
  cookies.remove(ACCESS_TOKEN_KEY, { path: '/' });
  cookies.remove(REFRESH_TOKEN_KEY, { path: '/' });
};
