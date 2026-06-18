/**
 * API Index
 * Export تمام API modules
 */

export { default as apiClient } from './config';
export { default as authAPI } from './auth';
export { default as lobbiesAPI } from './lobbies/lobbies';
export { default as usersAPI } from './users';
export { default as healthAPI } from './health';

// Named exports برای استفاده راحت‌تر
export * from './auth';
export * from './lobbies/lobbies';
export * from './users';
export * from './health';
