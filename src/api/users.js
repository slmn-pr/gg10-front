import apiClient from './config';

/**
 * Users API
 * مدیریت تمام endpoint های مربوط به کاربران
 */

/**
 * دریافت اطلاعات کاربر فعلی
 * @returns {Promise} UserResponse
 */
export const getMe = async () => {
  const response = await apiClient.get('users/me');
  return response.data;
};

export default {
  getMe,
};
