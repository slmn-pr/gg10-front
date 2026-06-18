export const LOBBY_STATUS = {
  REGISTERING: 'registering',
  FULL: 'full',
  RUNNING: 'running',
  FINISHED: 'finished',
  CANCELED: 'canceled',
} as const;

export type LobbyStatus = (typeof LOBBY_STATUS)[keyof typeof LOBBY_STATUS];

export const LOBBY_STATUS_TEXT: Record<LobbyStatus, string> = {
  registering: 'در حال ثبت نام',
  full: 'تکمیل ظرفیت',
  running: 'در حال برگزاری',
  finished: 'پایان یافته',
  canceled: 'لغو شده',
};

export const NON_REGISTERABLE_STATUSES: LobbyStatus[] = [
  LOBBY_STATUS.FULL,
  LOBBY_STATUS.RUNNING,
  LOBBY_STATUS.FINISHED,
  LOBBY_STATUS.CANCELED,
];

export const STATUS_ERROR_MESSAGES: Partial<Record<LobbyStatus, string>> = {
  running: 'این لابی در حال برگزاری است و امکان ثبت نام وجود ندارد.',
  full: 'این لابی تکمیل ظرفیت شده است و امکان ثبت نام وجود ندارد.',
  finished: 'این لابی پایان یافته است و امکان ثبت نام وجود ندارد.',
  canceled: 'این لابی لغو شده است و امکان ثبت نام وجود ندارد.',
};
