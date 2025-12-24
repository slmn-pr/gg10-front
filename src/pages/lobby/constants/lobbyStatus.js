// Lobby status constants and mappings

export const LOBBY_STATUS = {
  REGISTERING: 1, // در حال ثبت نام
  IN_PROGRESS: 2, // در حال برگزاری
  FULL: 3, // تکمیل ظرفیت
  FINISHED: 4, // پایان یافته
};

export const LOBBY_STATUS_TEXT = {
  [LOBBY_STATUS.REGISTERING]: 'در حال ثبت نام',
  [LOBBY_STATUS.IN_PROGRESS]: 'در حال برگزاری',
  [LOBBY_STATUS.FULL]: 'تکمیل ظرفیت',
  [LOBBY_STATUS.FINISHED]: 'پایان یافته',
};

export const LOBBY_STATUS_TEXT_TO_NUMBER = {
  'در حال ثبت نام': LOBBY_STATUS.REGISTERING,
  'در حال برگزاری': LOBBY_STATUS.IN_PROGRESS,
  'تکمیل ظرفیت': LOBBY_STATUS.FULL,
  'پایان یافته': LOBBY_STATUS.FINISHED,
};

// Non-registerable statuses
export const NON_REGISTERABLE_STATUSES = [
  LOBBY_STATUS.IN_PROGRESS,
  LOBBY_STATUS.FULL,
  LOBBY_STATUS.FINISHED,
];

// Error messages for non-registerable statuses
export const STATUS_ERROR_MESSAGES = {
  [LOBBY_STATUS.IN_PROGRESS]: 'این لابی در حال برگزاری است و امکان ثبت نام وجود ندارد.',
  [LOBBY_STATUS.FULL]: 'این لابی تکمیل ظرفیت شده است و امکان ثبت نام وجود ندارد.',
  [LOBBY_STATUS.FINISHED]: 'این لابی پایان یافته است و امکان ثبت نام وجود ندارد.',
};
