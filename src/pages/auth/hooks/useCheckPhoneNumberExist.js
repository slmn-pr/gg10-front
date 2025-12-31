import { PERSIAN_PHONE_NUMBER_SCHEMA } from '../schema';

export default function useCheckPhoneNumberExist() {
  const checkPhoneNumberExist = async (phoneNumber) => {
    if (!phoneNumber) return false;
    const isValid = PERSIAN_PHONE_NUMBER_SCHEMA.safeParse(phoneNumber);
    if (!isValid.success) return false;

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Fake check - return true if phone number is "09123456789"
    const existingNumbers = ['09121212121'];
    return existingNumbers.includes(phoneNumber);
  };

  return checkPhoneNumberExist;
}
