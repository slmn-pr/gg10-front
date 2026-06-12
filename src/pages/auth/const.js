export const STEP_TYPES = {
  PHONE_NUMBER: 'phone_number',

  // Signup steps
  SIGNUP_OTP_VERIFICATION: 'signup_otp_verification',
  GAME_NAME: 'game_name',
  SUCCESS_SIGNUP: 'success_signup',

  // Login
  PASSWORD_LOGIN: 'password_login',
  LOGIN_OTP_VERIFICATION: 'login_otp_verification',
};

export const SIGNUP_STEP_PROGRESS = {
  [STEP_TYPES.SIGNUP_OTP_VERIFICATION]: 0,
  [STEP_TYPES.GAME_NAME]: 1,
  [STEP_TYPES.SUCCESS_SIGNUP]: 2,
};
