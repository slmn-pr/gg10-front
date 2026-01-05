import apiClient from './config';

/**
 * Health API
 * بررسی وضعیت سرور
 */

/**
 * Health check
 * @returns {Promise}
 */
export const health = async () => {
  const response = await apiClient.get('health');
  return response.data;
};

/**
 * Healthcheck endpoint
 * @returns {Promise}
 */
export const healthcheck = async () => {
  const response = await apiClient.get('healthz');
  return response.data;
};

export default {
  health,
  healthcheck,
};
